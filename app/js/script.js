$(function(){
    
    var $hideCell = $('.tr:gt(4)');
    $($hideCell).hide();
    
    $('.show-all').click(function(){
        
        var buttonText = $(this);
        buttonText.text(buttonText.text() == 'Показать все' ? 'Скрыть' : 'Показать все');

        $($hideCell).slideToggle('slow');
        })
        
});

$(function(){
    var miModels = ['Mi Max','Mi5 High','Mi 4s'] // Модели из серии
    $('#mi,#redmi,#redmi-note,#hongmi').click(function(){
        
        var test = $(this).attr('id');
        console.log(test);
        $('.series span').remove();
        
        for(i=0;i<miModels.length;++i){
            $('.series').append('<span>' + miModels[i] + '</span>').hide();
        }
        $('.series').slideDown();
        
    })
});