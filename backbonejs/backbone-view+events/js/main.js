var MyView = Backbone.View.extend({
	el: '#view-container',
	events: {
		"click #the-button" : "buttonClicked"
	},
	buttonClicked: function() {
		toastr.info("You clicked the button");
	}
});

var myView = new MyView();