import axios from "axios";

export function checkFileExist(url, name, md5) {
	return axios
		.get(url, {
			params: {
				name,
				md5
			}
		})
		.then((res) => res.data);
}
