function addTen(num) {
	num += 10;
	return num;
}
let count = 20;
let res = addTen(count);

console.log(res); // 30
console.log(count); // 20

function setName(obj) {
	obj.name = "swt";
	obj = {};
	obj.name = "swt2";
}
let person = {};
setName(person);
console.log(person.name); // swt

console.log(typeof "swt"); // string
console.log(typeof 1); // number
console.log(typeof true); // boolean
console.log(typeof undefined); // undefined
console.log(typeof null); // object
console.log(typeof {}); // object

console.log(person instanceof Object); // true
console.log(person instanceof Array); // false
console.log(person instanceof RegExp); // false

let color = "blue";
function changeColor() {
	let anotherColor = "red";
	function swapColors() {
		let tempColor = anotherColor;
		anotherColor = color;
		color = tempColor;
		// 这里可以访问color anotherColor tempColor
	}
	// 这里可以访问 anotherColor color
	swapColors();
	if (color === "blue") {
		color = "red";
	} else {
		color = "blue";
	}
}
// 这里只能访问color
changeColor();
