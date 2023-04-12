document.querySelector("");
document.querySelectorAll(""); // 返回NodeList静态实例

let parentElement = document.getElementById("parent");
console.log(parentElement.childElementCount);
console.log(parentElement.firstElementChild);
console.log(parentElement.lastElementChild);
console.log(parentElement.previousElementSibling);
console.log(parentElement.nextElementSibling);

document.getElementsByClassName("");

parentElement.classList.add("");
parentElement.classList.contains("");
parentElement.classList.remove("");
parentElement.classList.toggle(""); // 类名列表存在指定value则删除 否则添加

console.log(document.activeElement); // 当前拥有焦点的DOM元素
console.log(document.hasFocus());

console.log(document.readyState);

console.log(document.head);

console.log(parentElement.dataset);

console.log(parentElement.contains(document.body));
