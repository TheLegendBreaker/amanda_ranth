$(document).ready(function(){

 /* -- variables  -- */
	const viewport = $(window);
 /* -- end variables  -- */

	/* -- dev function  -- */
	$('a').click(function(e){
		e.preventDefault();
	});
	/* -- end dev function  -- */

	$('#nav .numberd>a').hover(function(e){
		const data = this; 
		const img = $(data).attr('data-img');
		const sum = $(data).attr('data-sum');

		$('#nav .numberd, #page-summaries .summary, #hero-img img').removeClass('show');
		$(`${img}, ${sum}`).addClass('show');
		$(data).parent('.numberd').addClass('show');
	});

 /* -- mobile view functions  -- */
/// topbar nav

	// hamburger to x
	$('#hamburger').click(function(){
		$('#hamburger .bar').toggleClass('x');
	});

	// open/close nav menu
	$('#hamburger').click(function(){
		const icon = this;
		const nav = $(this).next('.nav');
		nav.toggleClass('show');
	});

	// open/close submenu
	$('.nav a').click(function(){
		const submenu = $( this ).next('.submenu');
		const width = viewport.width();
		const open = $('.submenu.show');
		// check if other sumenues are open
		if (open != 'undefined'){
			// if so close them.
			open.toggleClass('show');
			// also closes submenues when another a is clicked
		}
		if(submenu != 'undefined' && width < 768) {
			$(submenu).toggleClass('show');
		}
	});

/// end topbar
 /* -- end mobile view functions  -- */

});
