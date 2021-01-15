$('.btn').click((event) => {
	//this stops the form from getting cleared
	event.preventDefault();
	let ques = $('.ques').val();
	let lang = $("#frm .grp input[type='radio']:checked").val();
	let l1 = '',
		l2 = '';
	if (lang === 'english') {
		l1 = 'eng';
		l2 = 'fr';
	} else {
		l1 = 'fr';
		l2 = 'eng';
	}

	let finalString = `https://api.mymemory.translated.net/get?q=${ques}&langpair=${l2}|${l1}`;

	console.log(finalString);
	$('.ques').val('');
	$.getJSON(finalString)
		.done((res) => {
			$('.ans').val(res.responseData.translatedText);
		})
		.fail(function() {
			console.log('Error!');
		});
});
