$(function () {
	
	/* Set */
	$("#portal-set li").click(function() {
		window.open("portal-manage.html","_top");
	}); 
	
	/* Sort List */
  	$(".sort-list li").click(function() {
		$(".sort-list li").removeClass("on");
		$(this).addClass("on");
    });
	
	/* Manage */
  	$("#portal-layer .channel-list li  .btn-remove").click(function() {
		$(this).parents(".thumb").parents("li").hide();
    });  
	
	/* Message */
  	$(".btn-msg-close").click(function() {
		$(".msg-layer").hide();
    }); 
	
	$(document).keyup(function(e) {
   		if (e.keyCode == 27) { 
	  	$(".msg-layer").hide();
		}
  	});
	
	/* Add */
	$("#portal-layer .channel-list li.empty").click(function() {
		$("#portal-add-layer").fadeIn(400);
    });  
	
	/* Checkbox */
	$(".checkbox").click(function() {
    	$(this).toggleClass("on");
  	});
	
	/* Form */
	$("input").click(function() {
		$(this).val("");
    });  
	$("form").each(function() { 
		this.reset() 
	});
	
	/* Dropdown */
	$("#btn-portal-ch").click(function() {
		$("#dropdown-portal-ch").toggleClass("on");
    }); 
	
	$("#btn-portal-ch").click(function() {
		$(this).toggleClass("on");
    }); 
	
	$("#dropdown-portal-ch li").click(function() {
		$("#dropdown-portal-ch li").removeClass("on");
		$(this).toggleClass("on");
		$("#dropdown-portal-ch").removeClass("on");
    });  

	$("#dropdown-url").click(function() {
		$("#txt-portal-ch").text("Channel URL");
		$("#input-portal-ch").val("Please input channel URL");
		$("#btn-portal-ch").removeClass("on");
    });
	
	$("#dropdown-keywords").click(function() {
		$("#txt-portal-ch").text("Keywords");
		$("#input-portal-ch").val("Please input channel name or curator name");
		$("#btn-portal-ch").removeClass("on");
    }); 

	$("html").click(function() {
		$(".select-gray").find(".select-dropdown").removeClass("on");
	 	$(".select-gray").find(".select-btn").removeClass("on");
	 });
	
	 $(".select-gray").click(function(event){
		 event.stopPropagation();
	 });

	/* Slider */
	setTimeout ('scrollbar("#portal-constrain", "#portal-list", "#portal-slider")', 400);

});
