console.log(window.parent);
console.log(window.top);
console.log(window.self);

console.log(window.screenLeft);
console.log(window.screenTop);

let a = window.open("https://www.baidu.com", "_blank", `height=400,width=400,top=10,left=10,resizable=no`);

console.log(a.opener === window);
a.opener = null; // 不再需要与打开它的标签页通信 可在独立进程中运行 不可逆

setTimeout(() => {
	a.close();
}, 3000);
