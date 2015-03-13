// module get
angular.module('myApp')
// adding a controller to a module
.controller('myController', myController);

// inject dependencies via the $inject function, this solves the minification problem
myController.$inject = ['myFactory'];
// use named functions over anonymous functions for easier debugging and code clarity
function myController(myFactory) {
	//"this" is problematic, but angular requires it
	//we can solve this saving an instance of it
	var vm = this;
	
	vm.message = "Hello World!";
	vm.data = myFactory.getData();

	vm.sayHello = sayHello;

	function sayHello() {
		alert("Hello!");
	}
}