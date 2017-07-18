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
    var mi = ['Mi5 High',
            'Mi 4s',
            'Mi 5 Pro',
            'MiPad 2',
            'Mi4c',
            'Mi4i',
            'Mi Note Pro',
            'Mi Note',
            'Mi4 LTE',
            'Mi 6',
            'Mi 5c',
            'Mi Note 2',
            'Mi Max Prime',
            'Mi 5s Plus',
            'Mi 5s'] // Модели из серии mi
    
    var redmi = ['Redmi 3X',
            'Redmi Pro',
            'Redmi 3S Pro',
            'Redmi 4 SE',
            'Redmi 4 HE',
            'Redmi 4A',
            'Redmi 2A',
            'Redmi 2 Prime',
            'Redmi Note 2',
            'Redmi 2 Pro',
            'Redmi 3'] // Модели из серии redmi
    
    var redminote = ['Redmi Note 2 Prime',
            'Redmi Note 4G Dual SIM',
            'Redmi Note 4',
            'Redmi Note 4х']
    
    var hongmi = ['Hongmi 1S 4G','Hongmi 1S 3G']

    $('#mi,#redmi,#redminote,#hongmi').click(function(el){
        
        console.log(el);
        
        var filterID = $(this).attr('id');
        var modelsArr = eval(filterID); // получим ссылку на массив моделей текущего отбора
        $('.series span').remove(); // очистим предыдущие результаты отбора
        
        for(i=0; i<modelsArr.length; ++i){
            $('.series').append('<span>' + modelsArr[i] + '</span>').hide();
        }
        $('.series').slideDown();
        $(this).addClass('activ');
        $('.series-filter span').not(this).removeClass('activ');
    })
});