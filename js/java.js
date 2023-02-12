$(function(){
    $('.add-action').click(function(evt){
        evt.preventDefault();
        var NewActionName = $('.action-name').val();
        var NewActionDescription = $('.description').val();
        $('p').remove();
        $('.column-left').append('.description');
    $('.lol').click(function(){
        $(this).parent().parent().remove();

    });
    $('.yes').click(function(){
        $('.text').slideToggle()
    });
    $('.dropdown').click(function(){
        $('.pup').fadeIn(1000);
        $('.rol').animate({
        width : '200px',
        height : '300px'
        }, 2000)
    });
    $('.pup').click(function(event){
        if(event.target == this){
        $(this).fadeOut(1500);
        $('.rol').animate({
        width : '0',
        height : '0'
        },1500)
    }});
    });
    
})
