$(document).ready(function(){
	$('a').click(function(e){
		e.preventDefault();
	});

	$('#nav .numberd>a').hover(function(e){
		const data = this; 
		const img = $(data).attr('data-img');
		const sum = $(data).attr('data-sum');

		$('#nav .numberd, #page-summaries .summary, #hero-img img').removeClass('show');
		$(`${img}, ${sum}`).addClass('show');
		$(data).parent('.numberd').addClass('show');
	});
});
