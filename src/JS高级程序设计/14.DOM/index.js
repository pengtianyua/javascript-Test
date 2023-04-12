console.log(Node.ELEMENT_NODE);
console.log(Node.ATTRIBUTE_NODE);
console.log(Node.TEXT_NODE);
console.log(Node.CDATA_SECTION_NODE);
console.log(Node.ENTITY_REFERENCE_NODE);
console.log(Node.ENTITY_NODE);
console.log(Node.PROCESSING_INSTRUCTION_NODE);
console.log(Node.COMMENT_NODE);
console.log(Node.DOCUMENT_NODE);
console.log(Node.DOCUMENT_TYPE_NODE);
console.log(Node.DOCUMENT_FRAGMENT_NODE);
console.log(Node.NOTATION_NODE);

console.log(document.title);
console.log(document.URL);
console.log(document.domain);
console.log(document.referrer);

let images = document.getElementsByTagName("img");

images[0]; // 调用 item()
images["myImg"]; // 调用 namedItem()

console.log(document.forms); // 包含文档中所有form元素
console.log(document.images); // 包含文档中所有img元素
console.log(document.links); // 包含文档中带href属性的a元素

document.createElement("div");

document.createDocumentFragment(); // 文档片段本身永远不会添加到文档树 所有子节点被添加到文档相应的位置

function loadScript(url) {
	let script = document.createElement("script");
	script.src = url;
	document.body.appendChild(script);
}

function loadStyles(url) {
	let link = document.createElement("link");
	link.rel = "stylesheet";
	link.type = "text/css";
	link.href = url;
	let head = document.getElementsByTagName("head")[0];
	head.appendChild(link);
}

const observer = new MutationObserver((mutations, mutationObserver) => {
	console.log(mutations);
	console.log(mutationObserver);
});
observer.observe(document.body, {
	attributes: true,
	subtree: true,
	attributeOldValue: true,
	childList: true,
	characterData: true,
	characterDataOldValue: true,
	attributeFilter: ["class"]
});
document.body.className = "foo";
document.body.className = "bar";
document.body.className = "baz";

// observer.takeRecords(); // 断开之前获取所有记录
// observer.disconnect();

setTimeout(() => {
	observer.disconnect();
	document.body.className = "bax";
});
