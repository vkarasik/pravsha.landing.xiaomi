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
    
    var modelsObj = { //Список брендов-моделей
        xiaomi: {
            mi: {
                models: ['Mi 4s','Mi 4c','Mi 4i','Mi 4 LTE','Mi 5 Pro','Mi 5 High','Mi 5c','Mi 5s Plus','Mi 5s','Mi Pad 2','Mi Note Pro','Mi Note','Mi 6','Mi Note 2','Mi Max Prime']
            },
            redmi: {
                models: ['Redmi 3','Redmi 3X','Redmi Pro','Redmi 3S Pro','Redmi 4 SE','Redmi 4 HE','Redmi 4A','Redmi 2A','Redmi 2 Prime','Redmi Note 2']
            },
            redminote: {
                models: ['Redmi Note 2 Prime','Redmi Note 4G Dual SIM','Redmi Note 4','Redmi Note 4X']
            },
            hongmi: {
                models: ['Hongmi 1S 4G','Hongmi 1S 3G']
            }
        },
        samsung: {
            alpha: {
                models: ['Alpha(SM-G820)','Mega-2(SM-G750F)']
            },
            aSer : {
                models: ['A3(SM-A300F)','A5(SM-A500F)','A7(SM-A700F)','A8(SM-A800)','A9(SM-A9000)','A9-Pro(SM-A9100)','A3-2016(SM-A310F)','A5-2016(SM-A510)','A7-2016(SM-A710)','A3-2017(SM-A320F)','A5-2017(SM-A520F)','A7-2017(SM-A720F)']
            },
            cSer: {
                models: ['C5-pro(SM-C5010)','C7-pro(SM-C7010)']    
            },
            eSer: {
                models: ['E5(SM-E500)','E7(SM-E700)']    
            },
            grand: {
                models: ['Grand(GT-i9082)','Grand-2(SM-G7102)','Grand-Prime(SM-G530H)']
            },
            jSer: {
                models: ['J2(SM-J200H-Y)','J5(SM-J500H)','J7(SM-J700H)','J3-2016(SM-J320H)','J5-2016(SM-J510)','J7-2016(SM-J710)']
            },
            note: {
                models: ['Note-7(SM-N930)','Note-2(GT-N7100-N7102)','Note-3(SM-N900,N9000,N9005)','Note-5(SM-N920)']
            },
            sSer: {
                models: ['S8(SM-G950F)','S7(SM-G930F)','S8+(SM-G955F)','S7-edge(SM-G935F)','S6(SM-G920F)','S6-edge(SM-G925F)','S6-edge+(SM-G928F,G9287)','S5(SM-G900)','S5-mini(SM-G800H,G800F)','S5-neo(SM-G903F)','S4(SM-i9500,i9502,i9505)','S4-mini(GT-i9190,i9192,i9195)','S3(GT-i9300,i9300i)','S3-mini(GT-i8190)']
            },
            xcover: {
                models: ['Xcover-2(GT-S7710)','Xcover-3(SM-G388H)']
            }
        },
        sony: {
            xzSer: {
                models: ['Z(C66XX)','Z1(C69XX)','Z1-compact(D55XX)','Z2(D65XX)','Z3(D66XX)','Z3-compact(D58XX)','Z3+(E65XX)','Z5(E66XX)','Z5-compact(E58XX)','Z5-premium(E68XX)','Z-Ultra(C6802)','ZL(C65XX)','ZR(C55XX)']
            },
            xlSer: {
                models: ['L(C21XX)']
            },
            xmSer: {
                models: ['M(C19XX)','M2(D24XX)','M4(E23XX)','M5(E56XX)']
            },
            xvSer: {
                models: ['V(LT25i)']
            },
            xcSer: {
                models: ['C(C23XX)','C3(D25XX)','C4(E53XX)','C4-Ultra(E53XX)','C5-Ultra(E55XX)']
            },
            xeSer: {
                models: ['E(C16XX)','E1(D20XX)','E3(D22XX)','E4(E21XX)']
            },
            xtSer: {
                models: ['T2-Ultra(D53XX)']
            },
            xxSer: {
                models: ['X(F51XX)','X-performance(F81XX)','XA(F31XX)','XA-Ultra(F32XX)','X-compact(F53XX)','XZ(F83XX)']
            },
            xspSer: {
                models: ['Xperia-SP(C53XX)']
            }
        }
    };
    
    var seriesArr = []; // массив для id серий
    
    $('.series-filter span').each(function(){
        var $seriesId = '#' + $(this).attr('id');
        seriesArr.push($seriesId); // добавим все id в массив
    });
    
    var seriesArrStr = seriesArr.join(','); // получим строку с id выбранных элементов
    
    $('.models').hide();
    
    $(seriesArrStr).click(function(el){
        var elementID = $(this).attr('id');
        var brand = $('.wrap-filter').attr('data-brand');
        var modelsArr = modelsObj[brand][elementID].models;
        
        //var modelsArr = eval(filterID); // получим ссылку на массив моделей текущего отбора
        $('.models span').remove(); // очистим предыдущие результаты отбора в блоке моделей
        $('.models-pic div').remove(); // очистим предыдущие результаты отбора в блоке изображений
        
        for(i=0; i<modelsArr.length; ++i){
            $('.models').append('<span>' + modelsArr[i] + '</span>').hide();
            $('.models-pic').append('<div class="model-pic-item"><img src="img/models/' + modelsArr[i] + '.jpg"><p>' + modelsArr[i] + '</p></div>'); 
        }
        $('.models').slideDown();
        $(this).addClass('activ');
        $('.series-filter span').not(this).removeClass('activ');
        
        $('.models span').click(function(){
            $(this).addClass('activ');
            $('.models span').not(this).removeClass('activ');
            $('.models-pic div').remove();
            $('.models-pic').append('<div class="model-pic-item"><img src="img/models/' + $(this).text() + '.jpg"><p>' + $(this).text() + '</p></div>');
        })
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