// ===== Scroll to Top ==== 
$(window).scroll(function() {
    if ($(this).scrollTop() >= 50) {        // If page is scrolled more than 50px
        $('#return-to-top').fadeIn(200);    // Fade in the arrow
    } else {
        $('#return-to-top').fadeOut(200);   // Else fade out the arrow
    }
});


$('#return-to-top').click(function() {      // When arrow is clicked
    $('body,html').animate({
        scrollTop : 0                       // Scroll to top of body
    }, 500);
});

$('.navbar a').on('click',function(e){
    if(this.hash !== '') {
        e.preventDefault();

        const hash = this.hash;

        $('html,body').animate(
            {
                scrollTop: $(hash).offset().top     
            }, 
            700
        );
    }
});

$('.links a').on('click',function(e){
    if(this.hash !== '') {
        e.preventDefault();
        const hash = this.hash;

        $('html,body').animate(
            {
                scrollTop: $(hash).offset().top     
            }, 
            500
        );
    }
});
