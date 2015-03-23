var MyView = Backbone.View.extend({
	el: '#view-container',
	render: function() {
		var viewModel = this;
		$(viewModel.el).html("Hello World!");
	}
});

var myView = new MyView();
myView.render();