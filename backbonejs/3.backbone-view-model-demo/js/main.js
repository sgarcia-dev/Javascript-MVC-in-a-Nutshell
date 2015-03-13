// Underscore syntax html template
var templateStringUnderscore = "<p>Underscore: Hello <%=name%>! How does being a <%=ocupation%> feel?</p>";
// Handlebars syntax html template
var templateStringHandlebars = "<p>Handlebars: Hello {{name}}! How does being a {{ocupation}} feel?</p>";

// Simple Backbone Model
var MrAwesomeModel = new Backbone.Model({
	name: 'Mister Awesome',
	ocupation: "Master of Awesomeness"
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
	render: function () {
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