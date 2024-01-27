// let func = function () {
// 	console.log("wellcome to anonymus function")
// }
// func();

//Arrow function
// let func = username => `Hii ${username} welcome to arrow`;
// console.log(func('sanskar'))

//HIgher order functions

let upperCase = function (str) {
	return str.toUpperCase();
}
let lowerCase = function (str) {
	return str.toLowerCase()
}
let transforming = (str, func) => {
	return func(str)
}
// console.log(transforming('HELLO', lowerCase))


// let complete = function (msg) {
// 	return function (name) {
// 		console.log(`Hello ${name} is ${msg}`)
// 	}
// }
// console.log(complete("Hello Higher Oder function")("sanskar"))


//!settimeout setInterval

// function greeting(name) {
// 	console.log("wellcomt timeout " + name);
// }
// setTimeout(greeting, 5000, 'sanskar');

//!hoisting in javascript
// greeting()
// let greeting = () => {
// 	console.log("Hell come")
// }

//Asyncronus Js
function doSomething(number) {
	return number * 2;
}

// setTimeout(() => {
// 	console.log(doSomething(12))
// }, 5000);

// setTimeout((cb) => {
// 	cb(doSomething(12))
// }, 2000, result);

// function result(data) {
// 	console.log(data)
// }



// console.log(1);
// asyncc(function () {
// 	console.log(3);
// })
// console.log(2);
// function asyncc(cb) {
// 	cb()
// }


// function doSomething() {
// 	setTimeout(() => {
// 		console.log("Hii")
// 	}, 2000);
// 	return new Promise((resolve, reject) => {
// 		resolve(console.log("Promise is done"))
// 	});
// }
// doSomething()


// async function fixAsync() {
// 	const promise = new Promise((resolve, reject) => {
// 		setTimeout(() => {
// 			resolve("Hello Sanskar")
// 		}, 5000)
// 	})
// 	console.log(promise)
// 	return promise;
// }

// (async () => {
// 	const data = await fixAsync()
// 	console.log(data)
// 	console.log("async")
// })()

// function func1(cb) {
// 	cb();
// 	setTimeout(() => {
// 		console.log("func1")
// 	}, 5000)
// }
// function func2() {
// 	setTimeout(() => {
// 		console.log("Func2")
// 	}, 2000)
// }
// func1(func2);

// console.log("start");
// setTimeout(() => {
// 	console.log("timeout")
// }, 0);

// for (let i = 0; i < 10; i++) {
// 	console.log("transfunnel consulting")
// }
// console.log("end")
let arr = ['mango', 'apple', 'banana', 'apple', 'mango', 'mango'];
let ob = {};
arr.forEach((element,) => {
	if (ob.hasOwnProperty(element)) {
		const value = ob[element];
		ob[element] = value + 1;
	} else {
		ob[element] = 1;
	}
})
console.log(ob)


// const obj = {
// 	name: "singh"
// }
// console.log(obj.name)





























