$('img').on('click',showImage)

$('#all').on('click',showAll)

$('#chat').on('click',playSound)

function showImage(e){
    $('img').off()
    $(this).addClass('current');
    $('#chat').attr('data-id',$(this).attr('src').split("/")[2])
    $self = $(this)
    $('img').fadeOut(800,function(){
        $('#chat').show()
        $self.show(10)
        $self.addClass('center')
    })
}

function playSound(){
    let id = $(this).attr('data-id').split(".")[0];
    let audio = document.querySelector(`#${id}`)
    audio.play()
    $(".current").animate({height: '250px'},"fast")
    $(".current").animate({width: '250px'},"fast")
    $(".current").animate({height: '200px'},"fast")
    $(".current").animate({width: '200px'},"fast")
}

function showAll(){
    $('#chat').hide()
    $(".current").css({
        height : "112px",
        width : "112px",
    })
    $('.current').fadeOut(200,function(){
        $(this).removeClass('current').removeClass('center')
        $('img').on('click',showImage)
        $('img').show()
    })
}