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
    
    var mi = [
        'Mi 4s',
        'Mi 4c',
        'Mi 4i',
        'Mi 4 LTE',
        'Mi 5 Pro',
        'Mi 5 High',
        'Mi 5c',
        'Mi 5s Plus',
        'Mi 5s',
        'Mi Pad 2',
        'Mi Note Pro',
        'Mi Note',
        'Mi 6',
        'Mi Note 2',
        'Mi Max Prime'
    ]; // Модели из серии mi
    
    var redmi = ['Redmi 3',
            'Redmi 3X',
            'Redmi Pro',
            'Redmi 3S Pro',
            'Redmi 4 SE',
            'Redmi 4 HE',
            'Redmi 4A',
            'Redmi 2A',
            'Redmi 2 Prime',
            'Redmi Note 2',
            'Redmi 2 Pro'
            ]; // Модели из серии redmi
    
    var redminote = ['Redmi Note 2 Prime',
            'Redmi Note 4G Dual SIM',
            'Redmi Note 4',
            'Redmi Note 4х'];
    
    var hongmi = ['Hongmi 1S 4G','Hongmi 1S 3G'];
    
    $('.models').hide();

    $('#mi,#redmi,#redminote,#hongmi').click(function(el){
        
        console.log(el);
        
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
    $('.name').focusin(function(){
        $(this).attr('placeholder', '');
    });
    
    $('.name').focusout(function(){
        if($(this).val() == ''){
        $(this).attr('placeholder', 'Ваше имя');    
        }
    });
    
    $('.class').submit(function(e){
        e.preventDefault();// Отмена перезагрузки страницы при submit
        var $form = $(this);
        $.ajax({
            type: $form.attr('method'),
            url: $form.attr('action'),
            data: $form.serialize(),
            success: function(response){
                
            },
            error: function(response){
                
            }
        });
    });
}); // Форма обратной связи

$(function(){
  $('.callback').click(function(e){
      e.preventDefault();
      console.log('1');
      $('.modal-form').fadeIn();
      $('.overlay').fadeIn().click(function(){
          $(this).fadeOut();
          $('.modal-form').fadeOut();
      });
  }); 
});

$(function(){
    $('nav a').click(function(){
        var test = $(this).scrollTop();
        $('html,body').scrollTop()
    })
});

//https://www.one-tab.com/page/Th5VYoRGSsmrGd6_AX0p4A