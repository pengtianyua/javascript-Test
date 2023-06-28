const blob = new Blob("hello".split(""));
const array = new Uint8Array([128, 128, 128]);
const blob2 = new Blob([array]);

function readBlob(blob, type) {
	return new Promise((resolve) => {
		const reader = new FileReader();
		reader.onload = (ev) => {
			resolve(ev.target.result);
		};
		if (type === "ArrayBuffer") {
			reader.readAsArrayBuffer(blob);
		} else if (type === "Text") {
			reader.readAsText(blob);
		} else if (type === "DataURL") {
			reader.readAsDataURL(blob);
		} else if (type === "BinaryString") {
			reader.readAsBinaryString(blob);
		}
	});
}

readBlob(blob, "ArrayBuffer").then((url) => console.log(url));
readBlob(blob, "Text").then((url) => console.log(url));
readBlob(blob, "DataURL").then((url) => console.log(url));
readBlob(blob, "BinaryString").then((url) => console.log(url));
