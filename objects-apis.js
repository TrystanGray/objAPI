
let dog = {
	name: "Martin",
	color: "brown",
	breed: "pug",
	size: "small",
	bark: function(tyOfBark) {
		console.log("Bark!");
	},
};

dog.bark();

/*...*/
/*...*/

function x(y) {
	y.num = y.num+ 5;
	console.log(y)
}

let y = {
	name: "tom",
		num: 10,
};
x(y);
console.log(y);