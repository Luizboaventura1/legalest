

$('.menu_burguer').click(function(){
    let open = $('#menu_open')
    let close = $('#menu_close')

    if(open.css('display') == 'block') {
        open.fadeOut().css('display','none')
        close.fadeIn().css('display','block')
    }else {
        open.fadeIn().css('display','block')
        close.fadeOut().css('display','none')
    }

    $('#menu').slideToggle()
})

$('.navbar a').click(function(){
    let href = $(this).attr('href')
    let offset = $(href).offset().top

    $('html,body').animate({
        'scrollTop': offset
    },600)
})