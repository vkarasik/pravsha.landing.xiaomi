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
    
    var xzSer = [
        'Z(C66XX)',
        'Z1(C69XX)',
        'Z1-compact(D55XX)',
        'Z2(D65XX)',
        'Z3(D66XX)',
        'Z3-compact(D58XX)',
        'Z3+(E65XX)',
        'Z5(E66XX)',
        'Z5-compact(E58XX)',
        'Z5-premium(E68XX)',
        'Z-Ultra(C6802)',
        'ZL(C65XX)',
        'ZR(C55XX)'
    ];
    
    var xlSer = ['L(C21XX)'
            ]; // Модели из серии A
    
    var xmSer = ['M(C19XX)',
                'M2(D24XX)',
                'M4(E23XX)',
                'M5(E56XX)'
               ];
    
    var xvSer = ['V(LT25i)'
               ];
    
    var xcSer = ['C(C23XX)',
                'C3(D25XX)',
                'C4(E53XX)',
                'C4-Ultra(E53XX)',
                'C5-Ultra(E55XX)'
               ];
    
    var xeSer = ['E(C16XX)',
                'E1(D20XX)',
                'E3(D22XX)',
                'E4(E21XX)'
               ];
    
    var xtSer = [
        'T2-Ultra(D53XX)'
    ];
    
    var xxSer = [
        'X(F51XX)',
        'X-performance(F81XX)',
        'XA(F31XX)',
        'XA-Ultra(F32XX)',
        'X-compact(F53XX)',
        'XZ(F83XX)'
    ];
    
    var xspSer = [
        'Xperia-SP(C53XX)'
    ];
    
    
    $('.models').hide();

    $('#xzSer,#xlSer,#xmSer,#eSer,#xvSer,#xcSer,#xeSer,#xtSer,#xspSer,#xxSer').click(function(el){
        
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