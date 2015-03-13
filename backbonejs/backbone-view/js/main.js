var templateStringHandlebars = "<p>Hello World from Handlebars!</p>";
var templateStringUnderscore = "<p>Hello World from Underscore!</p>";

var ViewConstructor = Backbone.View.extend({
	// JQuery syntax selector that sets this view's html parent element
	el: "#view-container",
	// Handlebars template syntax
	myHandlebarsTemplate: Handlebars.compile(templateStringHandlebars),
	// Underscore template syntax
	myUnderscoreTemplate: _.template(templateStringUnderscore),
	// render method
	render: function() {
		// "this" refers to the current object scope, uncomment below
		// "this" can change depending on the context. Solution:
		var viewScope = this;
		$(viewScope.el).append(viewScope.myHandlebarsTemplate());
		$(viewScope.el).append(viewScope.myUnderscoreTemplate());
	}
});

var myView = new ViewConstructor();
myView.render();