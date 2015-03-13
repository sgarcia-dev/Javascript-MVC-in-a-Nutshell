var ViewConstructor = Backbone.View.extend({
	el: "#view-container",
	render: function() {
		var viewScope = this;
		$(viewScope.el).append("<p>Hello World!</p>");
	}
});

var myView = new ViewConstructor();
myView.render();