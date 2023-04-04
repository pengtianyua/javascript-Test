function P() {
	this.name = "p";
	this.play = [1, 2, 3];
}

function C() {
	this.name = "c";
}

C.prototype = new P(); // 核心将父类实例作为子类的原型

let c1 = new C();
let c2 = new C();
c1.play.push(4);

console.log(c1.play, c2.play);
