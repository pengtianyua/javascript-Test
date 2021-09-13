/**
 * @description 下载文件
 * */
export async function saveFile(blob, filename) {
	try {
		const handle = await window.showSaveFilePicker({
			suggestedName: filename,
			types: [
				{
					description: "PNG file",
					accept: {
						"image/png": [".png"]
					}
				},
				{
					description: "Jpeg file",
					accept: {
						"image/jpeg": [".jpeg"]
					}
				}
			]
		});
		const writable = await handle.createWritable();
		await writable.write(blob);
		await writable.close();
		return handle;
	} catch (e) {
		console.error(e.name, e.message);
	}
}

// https://developer.mozilla.org/en-US/docs/Web/API/Window/showSaveFilePicker
