$(document).ready(function(){
    $(window).scroll(function(){
        console.log($(window).scrollTop());
        
        if( $(window).scrollTop() > 270 )
        {
            console.log('test');
            $('.navbar').css({'position':'fixed', 'width':'100%', 'top':'0', 'z-index':'2', 'background':'rgb(130, 187, 249)'});
        }
        else
        {
            $('.navbar').css({'position':'inherit', 'background':'rgba(55,118,185,.21)'});   
        }
    });

    
});