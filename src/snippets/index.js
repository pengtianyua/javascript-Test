/**
 * 获取网址参数
 * @param url
 * @returns {Object}
 */
const getURLParameters = url =>
	(url.match(/([^?=&]+)(=([^&]*))/g) || []).reduce(
		(a, v) => (
			(a[v.slice(0, v.indexOf("="))] = v.slice(v.indexOf("=") + 1)), a
		),
		{}
	);

/**
 * 解析Cookie
 * @param str
 */
const parseCookie = str =>
	str
		.split(";")
		.map(v => v.split("="))
		.reduce(
			(acc, v) => (
				(acc[decodeURIComponent(v[0].trim())] = decodeURIComponent(v[1].trim())), acc
			),
			{}
		);
