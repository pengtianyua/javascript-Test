/**
 * 1.将传入的data数据转化为url字符串形式
 * 2.处理url中的回调函数
 * 3.创建一个script标签并插入到页面中
 * 4.挂载回调函数
 */

(function(window, document) {
	"use strict";
	window.$jsonp = function(url, data, callback) {

		// 将传入的 data 数据转化为 URL 字符串格式
		// {id: 1, name: 'jack'} => id=1&name=jack
		let dataString = url.indexOf("?") === -1 ? "?" : "&";
		for (const key in data) {
			dataString += `${key}=${data[key]}&`;
		}

		// 处理 URL 中的回调函数
		// cbFuncName 回调函数的名字 ：my_json_cb_名字的前缀 + 随机数（把小数点去掉）
		let cbFuncName = "my_json_cb" + Math.random().toString().replace(".", "");
		dataString += "callback=" + cbFuncName;

		// 创建一个 script 标签并插入到页面中
		let scriptEle = document.createElement("script");
		scriptEle.src = url + dataString;

		// 挂载回调函数
		window[cbFuncName] = function(data) {
			callback(data);
			document.body.removeChild(scriptEle);
		};

		document.body.appendChild(scriptEle);
	};
})(window, document);

const jsonp = ({ url, params, callbackName }) => {
	const generalUrl = () => {
		let dataSrc = "";
		for (let key in params) {
			// eslint-disable-next-line no-prototype-builtins
			if (params.hasOwnProperty(key)) {
				dataSrc += `${key}=${params[key]}&`;
			}
		}
		dataSrc += `callback=${callbackName}`;
		return `${url}?${dataSrc}`;
	};
	return new Promise(resolve => {
		const scriptEle = document.createElement("script");
		scriptEle.src = generalUrl();
		document.body.appendChild(scriptEle);
		window[callbackName] = data => {
			resolve(data);
			document.body.removeChild(scriptEle);
		};
	});
};
