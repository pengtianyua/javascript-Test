const bucket = new Set()
const effect = (fn) => {
	bucket.add(fn)
}

const proxyOptions = {
	set(target, key, value, receiver) {
		const result = Reflect.set(target, key, value, receiver);
		bucket.forEach(item => {
			Reflect.apply(item, this, [])
		})
		return result
	},
	get(target, key, receiver) {
		return Reflect.get(target, key)
	}
}

const observer = (obj) => new Proxy(obj, proxyOptions)
const obj = {
	name: 'Maic',
	age: 18
}
const userInfo2 = observer(obj)

effect(() => {
	console.log(userInfo2.name, userInfo2.age);
})

userInfo2.name = 'Tom'
