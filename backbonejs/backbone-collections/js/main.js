var data = [
	{
		id: 1,
		message: "encrypted message 001"
	},
	{
		id: 2,
		message: "encrypted message 002"
	},
	{
		id: 3,
		message: "encrypted message 003"
	}
]

var collection = new Backbone.Collection(data);

toastr.info("Press F12 and view the console");

console.log("----------------------------------");
console.log("<collection contents>");
console.log(collection);
console.log("----------------------------------");
console.log("<collection models>");
console.log(collection.models);
console.log("----------------------------------");
console.log("<collection model #1 attributes>");
console.log(collection.models[0].attributes);
console.log("----------------------------------");
console.log("<collection model #3 message attribute>");
console.log(collection.models[2].attributes.message);
console.log("----------------------------------");
console.log("<printing all models inside the collection>");
_.forEach(collection.models, function(model) {
	console.log("id: " + model.attributes.id + " / message: " + model.attributes.message);
});
console.log("----------------------------------");