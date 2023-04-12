let hasNSPlugins = !!(navigator.plugins && navigator.plugins.length);
let hasDOM1 = !!(document.getElementById && document.createElement && document.getElementsByTagName);

console.log(navigator.vendor);
console.log(navigator.platform);
console.log(screen.colorDepth);
console.log(screen.pixelDepth);

const getPosition = () => {
	navigator.geolocation.getCurrentPosition(
		(position) => {
			console.log(position);
		},
		(e) => {
			console.log(e);
		},
		{
			enableHighAccuracy: true, // 返回值更精确
			timeout: 10 * 1000,
			maximumAge: 20 * 1000 // 返回坐标的最长有效期  Infinity阻止系统重新查询 只返回缓存值 可通过检查Position对象的timestamp是否重复判断返回额的是不是缓存值
		}
	);
};

getPosition();
setTimeout(getPosition, 5000);

const connectionStateChange = () => console.log(navigator.onLine);
window.addEventListener("online", connectionStateChange);
window.addEventListener("offline", connectionStateChange);

navigator.connection.addEventListener("change", () => {
	console.log(111);
});

navigator.getBattery().then((b) => {
	console.log(b);
	const noop = () => {};
	b.addEventListener("chargingChange", noop);
	b.addEventListener("chargingTimeChange", noop);
	b.addEventListener("dischargingTimeChange", noop);
	b.addEventListener("levelChange", noop);
});

console.log("处理器核心数", navigator.hardwareConcurrency);
console.log("设备内存大小", navigator.deviceMemory);
console.log("最大触点数", navigator.maxTouchPoints);
