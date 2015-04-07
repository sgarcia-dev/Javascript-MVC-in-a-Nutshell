angular.module('app', [])
	.controller('controller', function () {
		var viewModel = this;
		viewModel.message = "Hello World!";
	});