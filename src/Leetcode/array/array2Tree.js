function arr2Tree(arr) {
	let res
	const map = new Map()
	arr.forEach(item => {
		map.set(item.id, item)
	)
	arr.forEach(item => {
		const parent = map.get(item.parentId)
		if(parent) {
			(parent.children || (parent.children = [])).push(item)
		} else {
			res = item
		}
	})
	return res
}

function tree2Arr(tree) {
	if(!tree.children) {
		return tree
	}
	const res = []
	const traversalChildren = (children) => {
		children.forEach(item => {
			if(item.children) {
				traversalChildren(item.children)
				delete item.children
			}
			res.push(item)
		})
	}

	traversalChildren(tree.children)
	delete tree.children
	res.push(tree)
	return res
}
