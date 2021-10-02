$('img').on('click',showImage)

$('#all').on('click',showAll)

$('#sound').on('click',playSound)

function showImage(e){
    $(this).addClass('current');
    $('#sound').attr('data-id',$(this).attr('src').split("/")[2])
    $self = $(this)
    $('img').fadeOut(800,function(){
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
    $(".current").css({
        height : "112px",
        width : "112px",
    })
    $('.current').fadeOut(200,function(){
        $(this).removeClass('current').removeClass('center')
        $('img').show()
    })
}