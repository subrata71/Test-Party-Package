export default {
	myVar1: [],
	myVar2: {},
	myFun1 () {
		//	write code here
		//	this.myVar1 = [1,2,3]
		return JSModule1.myFun1()
	},
	async myFun2 () {
		//	use async-await or promises
		//	await storeValue('varName', 'hello world')
		return moment.now()
	},
	getCurrentVersion() {
		return "v8.0.0"
	},
	v8() {
		return "v8"
	}
}