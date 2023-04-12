/**
 * 跨文档消息 XDM (cross-document messaging)
 */
// const frameWindow = document.getElementsByTagName("iframe")[0].contentWindow;
//
// frameWindow.postMessage(JSON.stringify("iframe 发送的消息"), "");
//
// window.addEventListener("message", (evt) => {
// 	console.log(evt);
// });

// const textEncoder = new TextEncoder();
// const decodeText = "foo";
// const encodeText = textEncoder.encode(decodeText);
//
// console.log(encodeText);

// const file = document.getElementById("file");
// file.addEventListener("change", (evt) => {
// 	console.log(evt.target.files);
// 	const reader = new FileReader();
// 	reader.readAsDataURL(evt.target.files[0]);
// 	const url = window.URL.createObjectURL(evt.target.files[0]);
// 	window.URL.revokeObjectURL(url);
// 	console.log(url);
//
// 	reader.addEventListener("error", () => {
// 		console.log("读取失败", reader.error.code);
// 	});
// 	reader.addEventListener("progress", (evt) => {
// 		console.log(evt);
// 		if (evt.lengthComputable) {
// 			console.log(`${evt.loaded}/${evt.total}`);
// 		}
// 	});
// 	reader.addEventListener("load", () => {
// 		console.log("读取完成", reader.result);
// 	});
// });

/**
 * FileReader 异步文件读取机制
 */

// 拖放事件
// dragstart drag dragend
// 拖动到一个有效的放置目标时 dragenter dragover dragleave/drop
const dropTarget = document.getElementById("dropTarget");
dropTarget.addEventListener("dragover", (evt) => {
	evt.preventDefault();
});
dropTarget.addEventListener("dragenter", (evt) => {
	evt.preventDefault();
});

// Notifications API
Notification.requestPermission().then((permission) => {
	console.log(permission);
});

// const n = new Notification("title text");
// n.addEventListener("show", () => {});
// n.addEventListener("click", () => {});
// n.addEventListener("close", () => {});
// n.addEventListener("error", () => {});
// setTimeout(() => {
// 	n.close();
// }, 3000);

document.addEventListener("visibilitychange", () => {
	console.log(document.visibilityState);
});

async function* ints() {
	for (let i = 0; i < 5; i++) {
		yield await new Promise((resolve) => setTimeout(resolve, 1000, i));
	}
}
const readableStream = new ReadableStream({
	async start(controller) {
		for await (const chunk of ints()) {
			controller.enqueue(chunk);
		}
		controller.close();
	},
	write(value) {
		console.log(value);
	}
});

console.log(readableStream.locked);
const readableStreamDefaultReader = readableStream.getReader();
console.log(readableStream.locked);

// (async () => {
// 	// eslint-disable-next-line no-constant-condition
// 	while (true) {
// 		const { done, value } = readableStreamDefaultReader.read();
// 		if (done) {
// 			break;
// 		} else {
// 			console.log(value);
// 		}
// 	}
// })();

const t0 = performance.now();
const t1 = performance.now();

for (const color of ["red", "green", "blue"]) {
	const div = document.createElement("div");
	const shadowDOM = div.attachShadow({ mode: "open" });
	document.body.appendChild(div);
	shadowDOM.innerHTML = `
		<p>Make me ${color}</p>
		
		<style>
		p{
		color: ${color};
		}
		</style>
	`;
}
