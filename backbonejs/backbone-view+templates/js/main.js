var MyView = Backbone.View.extend({
	el: '#view-container',
	template: _.template("<h3>Hello</h3><p>This is an underscore template</p>"),
	render: function() {
		var viewModel = this;
		$(viewModel.el).append(viewModel.template);
	}
});

var myView = new MyView();
myView.render();