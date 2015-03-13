// underscore syntax html template
var templateStringUnderscore = "<p>Hello World from Underscore!</p>";
// Handlebars syntax html template
var templateStringHandlebars = "<p>Hello World from Handlebars!</p>";

var ViewConstructor = Backbone.View.extend({
	// JQuery syntax selector that sets this view's html parent element
	el: "#view-container",
	// Underscore template syntax
	myUnderscoreTemplate: _.template(templateStringUnderscore),
	// Handlebars template syntax
	myHandlebarsTemplate: Handlebars.compile(templateStringHandlebars),
	// render method
	render: function () {
		// "this" refers to the current object scope, uncomment below
		// "this" can change depending on the context. Solution:
		var viewScope = this;
		// render the underscore template
		$(viewScope.el).append(viewScope.myUnderscoreTemplate());
		// render the handlebars template
		$(viewScope.el).append(viewScope.myHandlebarsTemplate());
	}
});

var myView = new ViewConstructor();
myView.render();