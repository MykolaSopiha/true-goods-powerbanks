var sApp = {};

// Сохранение email
sApp.MailSent = function(){

	if( $(this).hasClass('disabled') ){
		return false;
	}

	var control = $('.js-control-email');

	var value = $('.js-control-email').val();

	$('.mailerror').remove();

	if(value == ''){

		sApp.MailSentError('Введите адрес электронной почты');
		return false;

	} else {

		if( !/.+@.+\..+/i.test(value) ){

			sApp.MailSentError('Адрес введен неверно. Пример: \"example@example.ru\"');
			return false;

		} else {

			var data = {
				'orderId': $('#order_id_full').val(),
				'email': value 
			};

			$.ajax({
				type: "POST",
				url: "/spec",	
				data: data,
				beforeSend: sApp.MailSentDisable,
				success: sApp.MailSentSuccess
			});
		}
	}

	return false;

}


sApp.MailSentDisable = function(){
	$('.js-mail-btn').addClass("disabled");
}

// Если все ок
sApp.MailSentSuccess = function(){

	$('.js-control-email').hide();
	$('.js-mail-btn').hide();

	var Mailsuccess = $("<div/>", {
		"class": "mailsuccess",
		text: 'Спасибо!'
	});

	Mailsuccess.appendTo(".js-mail_wrap");
}

// Вывод ошибок
sApp.MailSentError = function(text){

	var Error = $("<div/>", {
		"class": "mailerror",
		text: text,
	});	
	Error.insertBefore(".js-mail_wrap .button");
}



$(function(){
	$('.js-mail-btn').on('click', sApp.MailSent);
});




