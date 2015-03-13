// module get
angular.module('myApp')
// creation of a factory, with no dependencies
.factory('myFactory', myFactory);

function myFactory() {
	var ngFactoryImplementation = {
		getData: getData
	};
	
	function getData() {
		var complexData = "<really complex data...>";
		return complexData;
	}
	
	return ngFactoryImplementation;
}