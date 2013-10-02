$('#btn-forgot-password').on("click", function() {
    $(".msg-error").hide();
    $("#forgot-password-layer").fadeIn(400);
    $(".forgot-password-form").show();
    $(".forgot-password-msg").hide();
});

$('#btn-forgot-password-close, .back-to-sign').on("click", function() {
    $("#fg_email").val($("#fg_email").attr("defvalue"));
    $("#forgot-password-form").show();
    $("#forgot-password-msg").hide();
    $("#forgot-password-layer").hide();
});

$('#sign-up').click(function() {
    $(".msg-error").hide();
    $("#signup-layer").fadeIn(400);
});

$('#btn-signup-close, #signup-cancel').click(function(){
    $(".msg-error").hide();
    $("#signup-layer").hide(400);
});