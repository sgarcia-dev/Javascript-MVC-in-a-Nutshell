// module get
angular.module('myApp')
// adding a controller to a module
.controller('myController', myController);
// use named functions over anonymous functions for easier debugging and code clarity
function myController() {
	//"this" is problematic, but angular requires it
	//we can solve this saving an instance of it
	var vm = this;
	
	vm.message = "Hello World!";
}