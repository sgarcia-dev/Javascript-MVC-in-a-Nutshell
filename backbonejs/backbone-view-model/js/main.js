var templateStringUnderscore = "<p>Hello <%=name%>!</p>";
var templateStringHandlebars = "<p>Hello {{name}}!</p>";

var MrAwesomeModel = new Backbone.Model({
	name: 'Mister Awesome',
	ocupation: "Master of Awesome"
});

var ViewConstructor = Backbone.View.extend({
	// JQuery syntax selector that sets this view's html parent element
	el: "#view-container",
	// Handlebars template syntax
	myUnderscoreTemplate: _.template(templateStringUnderscore),
	// data to populate the template
	myHandlebarsTemplate: Handlebars.compile(templateStringHandlebars),
	// Underscore template syntax
	model: MrAwesomeModel,
	// render method
	render: function() {
		// "this" refers to the current object scope, uncomment below
		// "this" can change depending on the context. Solution:
		var viewScope = this;
		// render underscore Template
		$(viewScope.el).append(viewScope.myUnderscoreTemplate(viewScope.model.attributes));
		// render handlebars Template
		$(viewScope.el).append(viewScope.myHandlebarsTemplate(viewScope.model.attributes));
	}
});

var myView = new ViewConstructor();
myView.render();