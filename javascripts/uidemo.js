$(function() {
	// $(".sider-affix").affix({
	// 	offset: {
	// 		top: 50,
	// 		bottom: function() {
	// 			return (this.bottom = $('#comments').outerHeight(true) + $('#footer').outerHeight(true))
	// 		}
	// 	}
	// });

	
	$('[data-toggle=popover]').popover({
		html: true,
  		trigger: 'hover'

	})
	 $('[data-toggle="tooltip"]').tooltip();
})