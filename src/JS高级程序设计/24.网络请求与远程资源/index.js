let xhr = new XMLHttpRequest();
xhr.open("get", "", true);
xhr.send(null);
console.log(xhr.responseText); // 响应体返回的文本
console.log(xhr.responseXML);
console.log(xhr.status); // 相应的HTTP状态
console.log(xhr.statusText); // 相应的HTTP状态描述

xhr.addEventListener("readystatechange", () => {
	console.log(xhr.readyState); // 0未初始化 1已打开 2已发送 3接收中 4完成
});

xhr.abort(); // 取消请求

xhr.setRequestHeader("", "");
// Accept 浏览器可以处理的内容类型
// Accept-Charset 浏览器可以显示的字符集
// Accept-Encoding 浏览器可以处理的压缩编码类型
// Accept-Language 浏览器使用的语言
// Connection 浏览器与服务器的连接类型
// Cookie 页面中设置的Cookie
// Host 发送请求的页面所在的域
// Referer 发送请求页面的URI 将错就错 正确拼写(Referrer)
// UserAgent 浏览器的用户代理字符串

xhr.getResponseHeader("");
xhr.getAllResponseHeaders();

// content-type application/x-www-formurlencoded
// 使用FormData 不再需要给XHR对象显示设置任何请求头

xhr.timeout = 60 * 1000;
xhr.addEventListener("timeout", () => {});

// 进度事件
xhr.addEventListener("loadstart", () => {});
xhr.addEventListener("progress", (evt) => {
	console.log(evt.lengthComputable); // 进度信息是否可用
	console.log(evt.loaded); // 接收到的字节数
	console.log(evt.total);
});
xhr.addEventListener("error", () => {});
xhr.addEventListener("abort", () => {});
xhr.addEventListener("load", () => {});
xhr.addEventListener("loadend", () => {});

// 跨域 图片探测 JSONP

fetch("")
	.then((res) => {
		console.log(res.status);
		console.log(res.statusText);
		console.log(res.redirected);
		return res.text();
	})
	.then((res) => {
		console.log(res);
	});

const abortController = new AbortController();
fetch("", {
	signal: abortController.signal
}).catch((reason) => {
	console.log("aborted", reason);
});
setTimeout(() => abortController.abort("手动取消"), 10);

navigator.sendBeacon("", {});
