 $(function(){
 	$('.cacngonngu').slideUp();
 	$('.top-ngonngu b').click(function(event) {
 		/* Act on the event */
 		$(this).next().slideToggle(300);
 	});

 	//kích hoạt wow
 	new WOW().init();
})  
 