$(document).on('ready', function() {

	$('input').on('input', function(){
		var userInput = $(this).val();
		var currentClass = $(this).attr('class');
		var currentSelctor = '.'+ currentClass;
		$(currentSelctor).text(userInput);

	});

	$('input[name="submit"]').on('click', function(e){
		e.preventDefault();
		if ($(this).attr('value') === 'Hide Form'){
			$(this).attr('value', 'Show Form');
		}
		else {
			$(this).attr('value', 'Hide Form');
		}
		$('.form-section').toggle();
	
	});


});