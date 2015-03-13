// module get
angular.module('myApp')
.controller('myController', myController);

// inject dependencies via the $inject function, this solves the minification problem
// use named functions over anonymous functions for easier debugging and code clarity
function myController() {
	//"this" is problematic, but angular requires it
	//we can solve this saving an instance of it
	var vm = this;
	
	vm.message = "Hello World from an AngularJS Controller!";
}