$(function(){
	var expreg_Name = /^[A-Z]/i;
	var expreg_Last_Name = "/^[A-Z]/i";
	var expreg_NUIP = "";
	var expreg_CC = "";
	var expreg_CE = "";
	var expreg_TI = "";
	var expreg_RC = "";
	var expreg_Email = /[\w-\.]{3,}@([\w-]{2,}\.)*([\w-]{2,}\.)[\w-]{2,4}/;
	var expreg_Phone = "";
	var expreg_Celphone = "";

	$("#name").on('keypress', function(event) {
		name = $(this).val();
		if(expreg_Name.test(name))
		{
			$(this).parent().removeClass('has-error');
			$(this).parent().addClass('has-success');
		}else{
			$(this).parent().removeClass('has-success');
			$(this).parent().addClass('has-error');
		}
	});

	$("#last_name").on('keypress', function(event) {
		
	});

	$("#id_numer").on('keypress', function(event) {
		
	});

	$("#email").on('keypress', function(event) {
		email = $(this).val();
		if(expreg_Email.test(email))
		{
			$(this).parent().removeClass('has-error');
			$(this).parent().addClass('has-success');
		}else{
			$(this).parent().removeClass('has-success');
			$(this).parent().addClass('has-error');
		}
	});

	$("#phone").on('keypress', function(event) {
		
	});
});