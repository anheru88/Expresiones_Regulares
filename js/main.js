$(function(){
	var expreg_Name = /^[A-Za-z]{5,}/;
	var expreg_Last_Name = "/^[A-Za-z]{5,}";
	var expreg_NUIP = "";
	var expreg_CC = "";
	var expreg_CE = "";
	var expreg_TI = "";
	var expreg_RC = "";
	var expreg_Email = /[\w-\.]{3,}@([\w-]{2,}\.)*([\w-]{2,}\.)[\w-]{2,4}/;
	var expreg_Phone = /\(?\d{3}\)?/;
	var expreg_Celphone = "";

	$("#name").on('keyup', function(event) {
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

	$("#last_name").on('keyup', function(event) {
		last_name = $(this).val();
		if(expreg_Last_Name.test(last_name))
		{
			$(this).parent().removeClass('has-error');
			$(this).parent().addClass('has-success');
		}else{
			$(this).parent().removeClass('has-success');
			$(this).parent().addClass('has-error');
		}
	});

	$("#id_number").on('keyup', function(event) {
		id_number = $(this).val();
		if (expreg_NUIP.test(id_number)) {

		}else{
			if (expreg_CC.test(id_number)) {			
			
			}else{
				if (expreg_CE.test(id_number)) {

				}else{
					if (expreg_TI.test(id_number)) {

					}else{
						if (expreg_RC.test(id_number)) {
							
						}else{
							$(this).parent().removeClass('has-success');
							$(this).parent().addClass('has-error');
						}
					}
				}
			}

		}

	});

	$("#email").on('keyup', function(event) {
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

	$("#phone").on('keyup', function(event) {
		phone = $(this).val();
		console.log(expreg_Phone.test(phone));
		if (expreg_Phone.test(phone)) {
			$(this).parent().removeClass('has-error');
			$(this).parent().addClass('has-success');
		}else{
			if (expreg_Celphone.test(phone)) {			
				$(this).parent().removeClass('has-error');
				$(this).parent().addClass('has-success');
			}else{
				$(this).parent().removeClass('has-success');
				$(this).parent().addClass('has-error');
			}
		}
	});
});