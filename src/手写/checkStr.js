function checkStr(string, child) {
	let res = string.split(child);
	console.log(res);
	return res.length > 1;
}

console.log(checkStr("123456", "123"));
