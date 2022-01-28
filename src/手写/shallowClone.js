/**
 * @description: 浅拷贝
 * @author: 彭天宇
 * @date: 2021-09-30 14:49
 */

/**
 * 赋值没有创建新对象，仅仅是拷贝了原对象的指针。
 * 浅拷贝是创建一个新对象，这个对象仅对原对象的属性进行拷贝，属性值是基本类型时，拷贝的是原数据，属性值是引用类型时，拷贝的是指针
 */

/**
 * Object.assign
 */
let person = { name: "swt", age: 20 };
const people = Object.assign({}, person);
people.name = "pty";
console.log(person); //  { name: 'swt', age: 20 }
console.log(people); //  { name: 'pty', age: 20 }	

/**
 * Array.prototype.concat
 */
let arr = [1, 2, 3];
let newArr = arr.concat();
newArr[0] = 100;
console.log(arr); //  [ 1, 2, 3 ]
console.log(newArr); //  [ 100, 2, 3 ]

/**
 * Array.prototype.slice
 */
const animals = ["ant", "bison", "camel", "duck", "elephant"];
const newAnimals = animals.slice();
newAnimals[0] = "chicken";

console.log(animals); //  [ 'ant', 'bison', 'camel', 'duck', 'elephant' ]
console.log(newAnimals); //  [ 'chicken', 'bison', 'camel', 'duck', 'elephant' ]

/**
 * Spread syntax
 */
const a = [1, 2, 3];
const b = [...a];
b[0] = 4;
console.log(a); //  [ 1, 2, 3 ]
console.log(b); //  [ 4, 2, 3 ]
