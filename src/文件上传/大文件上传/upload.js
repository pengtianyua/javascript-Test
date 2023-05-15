import { asyncPool } from "./asyncPool";
import axios from "axios";

export function upload({
	url,
	file,
	fileMD5,
	fileSize,
	chunkSize,
	chunkIds,
	poolLimit = 1
}) {
	const chunks =
		typeof chunkSize === "number" ? Math.ceil(fileSize / chunkSize) : 1;
	return asyncPool(poolLimit, [...new Array(chunks.keys())], (i) => {
		if (chunkIds.indexOf(i + "") !== -1) {
			return Promise.resolve();
		}
		let start = i * chunkSize;
		let end = i + 1 === chunks ? fileSize : (i + 1) * chunkSize;
		const chunk = file.slice(start, end);
		return uploadChunk({
			url,
			chunk,
			chunkIndex: i,
			fileMD5,
			fileName: file.name
		});
	});
}

function uploadChunk({ url, chunk, chunkIndex, fileMD5, fileName }) {
	let formData = new FormData();
	formData.set("file", chunk, `${fileMD5}-${chunkIndex}`);
	formData.set("name", fileName);
	formData.set("timestamp", Date.now().toString());
	return axios.post(url, formData);
}
