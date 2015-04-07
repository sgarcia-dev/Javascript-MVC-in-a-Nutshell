angular.module('app', [])
	.controller('controller', function () {
		var viewModel = this;
		viewModel.num1 = 2;
		viewModel.num2 = 4;
		viewModel.hello = hello;

		function hello() {
			alert('Hello!');
		}
	});