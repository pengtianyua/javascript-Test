import { calcFileMD5 } from "./calcFileMD5";
import { checkFileExist } from "./checkFileExist";
import { upload } from "./upload";
import { concatFiles } from "./concatFiles";

export async function uploadFile(element) {
	if (!element.files.length) return;
	const file = element.files[0];
	const fileMd5 = await calcFileMD5(file);
	const fileStatus = await checkFileExist("/exists", file.name, fileMd5);
	if (fileStatus.data && fileStatus.data.isExists) {
		console.log("文件已上传");
		return;
	} else {
		await upload({
			url: "/single",
			file,
			fileMD5: fileMd5,
			fileSize: file.size,
			chunkSize: 1024 * 1024,
			chunkIds: fileStatus.data.chunkIds,
			poolLimit: 3
		});
	}
	await concatFiles("/concatFiles", file.name, fileMd5);
}
