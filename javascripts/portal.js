$(function () {
	
	/* Sign in */
	$("#sign-up").click(function() {
		$("#signup-layer").fadeIn(400);
  	});
	
	$("#btn-signup-close, #signup-cancel").click(function() {
		$("#signup-layer").hide();
 	});
	
	$("#signup-checkbox").click(function() {
    	$(this).toggleClass("on");
  	});
	
	$("#btn-forgot-password").click(function() {
		$("#forgot-password-layer").fadeIn(400);
		$(".forgot-password-form").show();
		$(".forgot-password-msg").hide();
  	});
	
	$("#btn-forgot-password-close").click(function() {
		$("#forgot-password-layer").hide();
 	});
  
  	$(".back-to-sign").click(function() {
		$("#forgot-password-layer").hide();
  	});
	
	$("#btn-reset-password").click(function() {
	  $("#forgot-password-form").hide();
	  $("#forgot-password-msg").show();
  	});
	
	$("#btn-reset-password-close, #reset-password-cancel").click(function() {
		$("#reset-password-layer").hide();
 	});
	
	
	/* Set */
	$("#portal-set li").click(function() {
		window.open("portal-manage.html","_top");
	}); 
	
	/* Demo for first */
	$("#portal-set li.empty").click(function() {
		window.open("portal-first.html","_top");
	}); 
	
	/* Sort List */
  	$(".sort-list li").click(function() {
		if($(".sort-list li:last-child").hasClass("on")){
		$("#msg-portal").fadeIn(400);
		$("#msg-portal .msg-center").removeClass("center").css("width", "370px");
		$("#msg-portal .msg-content").text("You will change the order of channel list to update time, it will sort by update time of channels automatically so you can't change the order manually except set on top channels.");
		$("#msg-portal .btn-white.last .center").text("Yes");
		$("#msg-portal .btn-white.first .center").text("No");
		$(".sort-list li").removeClass("on");
		$(this).addClass("on"); 
		$(".channel-list li").css("cursor", "pointer");
		$(".btn-top.on").parents("li").css("cursor", "move");	
		$(".btn-top").css("visibility", "visible");
		}
		else {
		$(".sort-list li").removeClass("on");
		$(this).addClass("on"); 
		$(".channel-list li").css("cursor", "move");
		$(".btn-top").css("visibility", "hidden");
		}
    });
	
	if($(".sort-list li:last-child").hasClass("on")){
		$(".channel-list li").css("cursor", "move");
		$(".btn-top").css("visibility", "hidden");
		}
	else {
		$(".channel-list li").css("cursor", "pointer");
		$(".btn-top.on").parents("li").css("cursor", "move");
		}
	
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
	
	$("#btn-portal-save").click(function() {
		var input = $("#set-title input").val();
    	if(input == ""){
		$("#portal-slider").css("top", "182px");
		$("#portal-layer .msg-error").show();
		} else {
		$("#portal-slider").css("top", "160px");
		$("#msg-portal").fadeIn(400);
		$("#msg-portal .msg-center").removeClass("center").css("width", "223px");
		$("#msg-portal .msg-center").removeClass("center");
		$("#msg-portal .msg-content").text("If you save cutomized channels, the top channels will be cancelled.");
		$("#msg-portal .btn-white.first").show();
		$("#msg-portal .btn-white.last .center").text("Save");
		} 
    });  	
	
	$("#msg-portal .btn-white").click(function() {
		$("#msg-portal").hide();
    });  
	
	$("#portal-list .channel-list .btn-top").click(function() {
		if ($(this).hasClass("on")) {
	} else {
		$("#msg-portal").fadeIn(400);
		$("#msg-portal .msg-center").removeClass("center");
		$("#msg-portal .msg-center").removeClass("center").css("width", "223px");
		$("#msg-portal .msg-content").text("You cannot set more than 4 top channels.");
		$("#msg-portal .btn-white.first").hide();
		$("#msg-portal .btn-white.last .center").text("OK");
		}
    }); 
		
	/* Add */
	$("#portal-layer .channel-list li.empty").click(function() {
		if ($(this).hasClass("disable")) {
	} else {
		$("#portal-add-layer").fadeIn(400);
		}
    }); 
	 
	$("#portal-add-layer a.prev").click(function() {
		$("#portal-add-layer .channel-list").animate({"left":"0"}, 400);
    }); 
	
	$("#portal-add-layer .msg-btn-holder .btn-white").click(function() {
		$("#portal-add-layer").hide();
		$("#msg-portal").fadeIn(400);
		$("#msg-portal .msg-center").removeClass("center").css("width", "223px");
		$("#msg-portal .msg-center").addClass("center");
		$("#msg-portal .msg-content").text("Added successfully!");
		$("#msg-portal .btn-white.first").hide();
		$("#msg-portal .btn-white.last .center").text("OK");
    }); 
	
	$("#btn-portal-search").click(function() {
		var input = $("#input-portal-ch").val();
    	if(input == ""){
		$("#portal-add-layer form .msg-error").show();
		} else {
		} 
    });  
	
	/* Checkbox */
	$(".checkbox").click(function() {
    	$(this).toggleClass("on");
  	});
	
	/* Dropdown */		
	$("#dropdown-url").click(function() {
		$("#txt-portal-ch").text("Channel URL");
		$("#input-portal-ch").val("Please input channel URL");
    });
	
	$("#dropdown-keywords").click(function() {
		$("#txt-portal-ch").text("Keywords");
		$("#input-portal-ch").val("Please input channel name or curator name");
    }); 
	 
	/* Store */
  	$("#store-category .btn-gray").click(function() {
		$("#store-layer").toggleClass("collapse");
		setTimeout ('scrollbar("#store-constrain", "#store-list", "#store-slider")', 400);
    });
	
	$("#store-category .btn-gray").click(function() {
		if ($("#store-layer").hasClass("collapse")) {
		$("#store-category ul").slideUp(400);
	} else {
		$("#store-category ul").slideDown(400);
		}
    });
	
	$("#store-category ul li").click(function() {
		$("#store-category ul li").removeClass("on");
		$(this).addClass("on");
    });
	
	$("#store-layer .btn-minus").click(function() {
		if ($(this).hasClass("on")) {
		$(this).parents("li").removeClass("minus");
		$(this).removeClass("on");
	} else {
		$(this).parents("li").addClass("minus");
		$(this).addClass("on");
		}
    });
	
	/* Brand */
	$("#btn-brand-save").click(function() {
		var input = $("#brand-title input").val();
    	if(input == ""){
		$("#brand-layer .msg-error").show();
		} else {
		} 
    });  	

	/* Slider */
	setTimeout ('scrollbar("#portal-constrain", "#portal-list", "#portal-slider")', 400);
	setTimeout ('scrollbar("#store-constrain", "#store-list", "#store-slider")', 400);
	setTimeout ('scrollbar("#brand-constrain", "#brand-list", "#brand-slider")', 400);
	
	 $(window).resize(function() {
        setTimeout ('scrollbar("#portal-constrain", "#portal-list", "#portal-slider")', 400);
		setTimeout ('scrollbar("#store-constrain", "#store-list", "#store-slider")', 400);
		setTimeout ('scrollbar("#brand-constrain", "#brand-list", "#brand-slider")', 400);
    });

});
