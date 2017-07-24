$(function(){
    
    var $hideCell = $('.tr:gt(4)');
    $($hideCell).hide();
    
    $('.show-all').click(function(){
        
        var buttonText = $(this);
        buttonText.text(buttonText.text() == 'Показать все' ? 'Скрыть' : 'Показать все');

        $($hideCell).slideToggle('slow');
        })
        
}); // Спойлер

$(function(){
    
    var alpha = [
        'Alpha(SM-G820)',
        'Mega-2(SM-G750F)'
    ]; // Модели из серии alpha
    
    var aSer = ['A3(SM-A300F)',
            'A5(SM-A500F)',
            'A7(SM-A700F)',
            'A8(SM-A800)',
            'A9(SM-A9000)',
            'A9-Pro(SM-A9100)',
            'A3-2016(SM-A310F)',
            'A5-2016(SM-A510)',
            'A7-2016(SM-A710)',
            'A3-2017(SM-A320F)',
            'A5-2017(SM-A520F)',
            'A7-2017(SM-A720F)',
            ]; // Модели из серии A
    
    var cSer = ['C5-pro(SM-C5010)',
                'C7-pro(SM-C7010)'
               ];
    
    var eSer = ['E5(SM-E500)',
                'E7(SM-E700)'
               ];
    
    var grand = ['Grand(GT-i9082)',
                'Grand-2(SM-G7102)',
                'Grand-Prime(SM-G530H)'
               ];
    
    var jSer = ['J2(SM-J200H-Y)',
                'J5(SM-J500H)',
                'J7(SM-J700H)',
                'J3-2016(SM-J320H)',
                'J5-2016(SM-J510)',
                'J7-2016(SM-J710)',
               ];
    
    var note = [
        'Note-7(SM-N930)',
        'Note-2(GT-N7100-N7102)',
        'Note-3(SM-N900,N9000,N9005)',
        'Note-5(SM-N920)',
    ];
    
    var sSer = [
        'S8(SM-G950F)',
        'S7(SM-G930F)',
        'S8+(SM-G955F)',
        'S7-edge(SM-G935F)',
        'S6(SM-G920F)',
        'S6-edge(SM-G925F)',
        'S6-edge+(SM-G928F,G9287)',
        'S5(SM-G900)',
        'S5-mini(SM-G800H,G800F)',
        'S5-neo(SM-G903F)',
        'S4(SM-i9500,i9502,i9505)',
        'S4-mini(GT-i9190,i9192,i9195)',
        'S3(GT-i9300,i9300i)',
        'S3-mini(GT-i8190)'
    ];
    
    var xcover = [
        'Xcover-2(GT-S7710)',
        'Xcover-3(SM-G388H)'
    ];
    
    
    $('.models').hide();

    $('#alpha,#aSer,#cSer,#eSer,#grand,#jSer,#note,#sSer,#xcover').click(function(el){
        
        var filterID = $(this).attr('id');
        var modelsArr = eval(filterID); // получим ссылку на массив моделей текущего отбора
        $('.models span').remove(); // очистим предыдущие результаты отбора
        $('.models-pic div').remove();
        
        for(i=0; i<modelsArr.length; ++i){
            $('.models').append('<span>' + modelsArr[i] + '</span>').hide();
            $('.models-pic').append('<div class="model-pic-item"><img src="img/models/' + modelsArr[i] + '.jpg"><p>' + modelsArr[i] + '</p></div>');
            
            
        }
        $('.models').slideDown();
        $(this).addClass('activ');
        $('.series-filter span').not(this).removeClass('activ');
    })
}); // Фильтр моделей

$(function(){
    $('.name, .tel').focusin(function(){
        var placeholder = $(this).attr('data-placeholder');
        $(this).attr('placeholder', '');
        $(this).focusout(function(){
            if($(this).val() == ''){
                $(this).attr('placeholder', placeholder);    
            }
        });
    });

    $('.form').submit(function(e){
        e.preventDefault();// Отмена перезагрузки страницы при submit
        var $form = $(this);
        $.ajax({
            type: $form.attr('method'),
            url: $form.attr('action'),
            data: $form.serialize(),
            success: function(response){
                $('.form input').slideUp();
                $('form .callback').css({background: '#4caf50'}).text('Заявка принята!');
            },
            error: function(response){
                alert('Произошла ошибка! Пожалуйста повторите отправку!');  
            }
        });
    });
}); // Форма обратной связи

$(function(){
    $('#callback').click(function(e){
      e.preventDefault();
      $('.modal-form').fadeIn();
      $('.overlay').fadeIn().click(function(){
          $(this).fadeOut();
          $('.modal-form').fadeOut();
      });
    }); 
}); // всплывающее окно для формы

$(function(){
    $('a[href^="#"]').click(function(){
        var $linkHref = $(this).attr("href");
        var $ancorName = $('a[name="' + $linkHref.slice(1) + '"]');
        var ancorPosition = $ancorName.offset();
        $('body, html').animate({scrollTop: ancorPosition.top}, 500); 
    })
}); // Плавный скролинг к якорю

//https://www.one-tab.com/page/Th5VYoRGSsmrGd6_AX0p4A