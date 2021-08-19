/**
 * @description 掘金抽奖
 * */
async function luckDraw() {
	// 获取账户矿石数量
	let { data: point, err_msg, err_no } = await fetch("https://api.juejin.cn/growth_api/v1/get_cur_point", {
		headers: {
			cookie: document.cookie
		},
		method: "GET",
		credentials: "include"
	}).then(res => {
		return res.json();
	});

	if (err_no !== 0) {
		console.log(err_msg);
	}
	if (point < 200) {
		console.log("积分不足");
	} else {
		let times = parseInt(point / 200);
		let arr = [];
		// 抽奖
		for (let i = 0; i < times; i++) {
			let result = await fetch("https://api.juejin.cn/growth_api/v1/lottery/draw", {
				headers: {
					cookie: document.cookie
				},
				method: "POST",
				credentials: "include"
			}).then(res => {
				return res.json();
			});
			arr.push(result);
		}
		// 统计结果
		let obj = {};
		for (let i = 0; i < arr.length; i++) {
			if (!obj.hasOwnProperty(arr[i].lottery_name)) {
				obj[arr[i].data.lottery_name] = 1;
			} else {
				obj[arr[i].data.lottery_name] = obj[arr[i].data.lottery_name] + 1;
			}
		}
		for (const objKey in obj) {
			console.log(`奖品${objKey}中了${obj[objKey]}个`);
		}
	}
}
