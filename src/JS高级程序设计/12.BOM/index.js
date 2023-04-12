console.log(window.parent);
console.log(window.top);
console.log(window.self);

console.log(window.screenLeft);
console.log(window.screenTop);

// let a = window.open("https://www.baidu.com", "_blank", `height=400,width=400,top=10,left=10,resizable=no,status=no`);
//
// console.log(a.opener === window);
// a.opener = null; // 不再需要与打开它的标签页通信 可在独立进程中运行 不可逆

// let blocked;
// try {
// 	let wroxWin = window.open();
// 	if (wroxWin === null) {
// 		blocked = true;
// 	}
// } catch (e) {
// 	blocked = true;
// }
// if (blocked) {
// 	console.log("the popup was blocked");
// }

// console.log(window.prompt("who are you?", "swt"));

// 以下两种都为异步
// window.print(); // 打印
// window.find(); // 查找

// console.log(location.hash); // 井号后跟零或多个字符
// console.log(location.host); // 服务器名及端口号
// console.log(location.hostname); // 服务器名
// console.log(location.href); // 当前加载页面完整URL location的toString返回这个值
// console.log(location.pathname); // URL中的路径
// console.log(location.port); // 请求的端口
// console.log(location.protocol); // 页面使用的协议
// console.log(location.search); // URL的查询字符串
// console.log(location.origin); // URL的源地址

let getQueryStringArgs = (url) => {
	let qs = url.substring(url.indexOf("?") + 1);
	// || location.search.length > 0 ? location.search.substring(1) : "";
	const args = {};

	for (const item of qs.split("&").map((kv) => kv.split("="))) {
		let name = decodeURIComponent(item[0]);
		let value = decodeURIComponent(item[1]);
		if (name.length) {
			args[name] = value;
		}
	}
	return args;
};

console.log(getQueryStringArgs("https:www.baidu.com/home?name=swt&age=20"));

let qs = "?q=javascript&num=10";
let searchParams = new URLSearchParams(qs);
searchParams.has("num");
searchParams.get("num");
searchParams.set("page", "3");

for (const searchParam of searchParams) {
	console.log(searchParam);
}

// location.assign("https://www.baidu.com");

// location.replace()

// location.reload();

// console.log(navigator.userAgent);

// console.log(navigator.plugins);

// navigator.registerProtocolHandler("mailto", "http://www.somemailclient.com?cmd=%s");

// console.log(screen);

// history.go();
//
// history.back();
// history.forward();
console.log(history.length);

// history.pushState(
// 	{
// 		foo: "bar"
// 	},
// 	"title",
// 	"baz.html"
// );

window.addEventListener("popstate", (e) => {
	let state = e.state;
	if (state) {
		// processState(state);
	}
});

// history.replaceState({}, "");
