var data = {
	id: 1,
	message: "encrypted message"
}

var model = new Backbone.Model(data);
toastr.info("Press F12 and view the console");

console.log("----------------------------------");
console.log("<model contents>");
console.log(model);
console.log("----------------------------------");
console.log("<model attributes>");
console.log(model.attributes);
console.log("----------------------------------");
console.log("<model id attribute>");
console.log(model.attributes.id);
console.log("----------------------------------");
console.log("<model name attribute>");
console.log(model.attributes.message);
console.log("----------------------------------");