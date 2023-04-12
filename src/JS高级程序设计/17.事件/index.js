/**
 * 捕获阶段>目标阶段>冒泡阶段
 */

let btn = document.getElementById("myBtn");

// document.body.onclick = function (ev) {
// 	console.log(ev.currentTarget === document.body);
// 	console.log(this === document.body);
// 	console.log(ev.target === btn);
// 	console.log(ev.eventPhase);
// };

// document.body.addEventListener(
// 	"click",
// 	(ev) => {
// 		console.log("click");
// 		console.log(ev.eventPhase);
// 	},
// 	true
// );

// btn.addEventListener("click", function (ev) {
// 	console.log(ev.eventPhase);
// 	console.log(this);
// 	console.log(this === ev.target);
// 	console.log(this === ev.currentTarget);
// 	console.log(ev.target === ev.currentTarget);
// 	// window.event.cancelBubble = true; // 阻止冒泡
// 	// window.event.returnValue = false; // 取消默认行为
// 	// ev.stopPropagation(); // 取消捕获 冒泡
// 	// ev.preventDefault(); // 阻止默认行为
// });

/**
 * 用户界面事件 UIEvent
 * DOMActivate DOM3已废弃
 * load  在 window 对象上，load 事件会在整个页面（包括所有外部资源如图片、JavaScript 文件和 CSS 文件）加载完成后触发
 * unload unload 事件会在文档卸载完成后触发
 * abort
 * error
 * select
 * resize 当浏览器窗口被缩放到新高度或宽度时，会触发 resize 事件
 * scroll 随着文档滚动触发
 */

// btn.addEventListener("DOMActivate", () => {
// 	console.log("DOMActivate");
// });

window.addEventListener("load", () => {
	console.log("load");
});

/**
 * 焦点事件 FocusEvent
 * blur 失去焦点触发 不冒泡
 * DOMFocusIn focus冒泡版 DOM3Event废弃 推荐focusIn
 * DOMFocusOut blur通用版 DOM3Event废弃 推荐focusOut
 * focus 不冒泡
 * focusin 冒泡
 * focusout
 *
 * 焦点从一个元素到另一个元素依次发生如下事件
 * focusout
 * focusin
 * blur
 * DOMFocusOut
 * focus
 * DOMFocusIn
 */

/**
 * 鼠标和滚轮事件 MouseEvent WheelEvent
 * click  在用户单击鼠标主键（通常是左键）或按键盘回车键时触发
 * dblclick 在用户双击鼠标主键（通常是左键）时触发
 * mousedown 在用户按下任意鼠标键时触发
 * mouseenter 在用户把鼠标光标从元素外部移到元素内部时触发 (不冒泡)
 * mouseleave 在用户把鼠标光标从元素内部移到元素外部时触发 (不冒泡)
 * mousemove 在鼠标光标在元素上移动时反复触发
 * mouseout 在用户把鼠标光标从一个元素移到另一个元素上时触发
 * mouseover 在用户把鼠标光标从元素外部移到元素内部时触发
 * mouseup 在用户释放鼠标键时触发
 */

// btn.addEventListener("click", (e) => {
// 	console.log(e.altKey);
// 	console.log(e.ctrlKey);
// 	console.log(e.shiftKey);
// 	console.log(e.metaKey);
// });

// btn.addEventListener("mouseout", (e) => {
// 	console.log(e.relatedTarget); // 只有在mouseout mouseover事件发生时才包含值
//
// 	// IE
// 	console.log(e.toElement);
// 	console.log(e.fromElement);
// });

// btn.addEventListener("click", (ev) => {
// 	console.log(ev.button); // 0 鼠标主键 1 鼠标中键 2 鼠标副键 3 第四个按钮 通常是浏览器后退按钮 4 第五个按钮 通常是浏览器前进按钮
// });

// btn.addEventListener("click", (ev) => {
// 	console.log(ev.detail); // 给定位置发生多少次点击
// });

// document.addEventListener("mousewheel", (ev) => {
// 	console.log(ev.wheelDelta);
// });

/**
 * 触摸屏设备
 * 不支持dblclick事件 双击浏览器窗口可以放大 没有办法覆盖这个行为
 */

/**
 * 键盘与输入事件
 * keydown 用户按下键盘上某个键时触发，而且持续按住会重复触发
 * keypress 用户按下键盘上某个键并产生字符时触发，而且持续按住会重复触发。Esc键也触发这个事件 dom3event废弃 推荐textInput
 * keyup 用户释放键盘上某个键时触发
 * textInput  textInput 会在文本被插入到文本框之前触发
 */

// document.addEventListener("keypress", (evt) => {
// 	console.log(evt.charCode);
// 	console.log(String.fromCharCode(evt.charCode));
// 	console.log(evt.location);
// });

// const myText = document.getElementById("myText");
// myText.addEventListener("textInput", (ev) => {
// 	console.log(ev.data);
// 	console.log(ev.inputMethod);
// });

btn.addEventListener("contextmenu", (evt) => {
	evt.preventDefault();
	let menu = document.getElementById("myMenu");
	menu.style.left = evt.clientX + "px";
	menu.style.top = evt.clientY + "px";
	menu.style.visibility = "visible";
});
document.addEventListener("click", (evt) => {
	document.getElementById("myMenu").style.visibility = "hidden";
});

window.addEventListener("beforeunload", (evt) => {
	console.log(evt);
	// 浏览器兼容性
	// evt.preventDefault();
	evt.returnValue = "";
	// return "";
});

document.addEventListener("DOMContentLoaded", () => {
	console.log("content loaded");
});

document.addEventListener("readystatechange", () => {
	console.log(document.readyState);
});

window.addEventListener("pageshow", (evt) => {
	console.log(evt.persisted);
});

window.addEventListener("pagehide", (evt) => {
	console.log(evt.persisted);
});

window.addEventListener("unload", () => {});

window.addEventListener("hashchange", (evt) => {
	console.log(evt.oldURL);
	console.log(evt.newURL);
	console.log(location.hash);
});

window.addEventListener("orientationchange", () => {
	console.log(screen.orientation);
	console.log(window.orientation); // 90 0 -90 180 逆时针正值 顺时针负值
});

window.addEventListener("deviceorientation", (evt) => {
	console.log(evt.alpha);
	console.log(evt.beta);
	console.log(evt.gamma);
});

window.addEventListener("devicemotion", (evt) => {
	console.log(evt.acceleration);
	console.log(evt.accelerationIncludingGravity);
	console.log(evt.interval);
	console.log(evt.rotationRate);
});

/**
 * 触摸及手势事件
 *
 * touchstart
 * touchmove
 * touchend
 * touchcancel
 *
 * gesturestart
 * gesturechange
 * gestureend
 */

/**
 * 剪贴板事件
 *
 * beforecopy
 * copy
 * beforecut
 * cut
 * beforepaste
 * paste
 */
