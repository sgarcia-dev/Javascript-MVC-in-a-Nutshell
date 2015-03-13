var ViewConstructor = Backbone.View.extend({
	// JQuery syntax selector that sets this view's html parent element
	el: "#view-container",
	// render method
	render: function () {
		// "this" refers to the current object scope, uncomment below
		// "this" can change depending on the context. Solution:
		var viewScope = this;
		$(viewScope.el).append("Hello World!");
	}
});

var myView = new ViewConstructor();
myView.render();