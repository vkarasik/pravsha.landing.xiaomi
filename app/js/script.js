$(function(){
          
        var draggableElements = $("#draggable-1, #draggable-2, #draggable-3, #draggable-4, #draggable-5");
        
        $(draggableElements).draggable({ 
            revert: "invalid"
        });
          
        $('.droppable').droppable({
          drop: function(event, ui){
              
            var droppableId = $(this).attr('id'); 
            var currentDraggElement =  ui.draggable[0].id; // объект события содержит id dragg-элемента
            var currentDraggElementID = "\#" + ui.draggable[0].id; // объект события содержит id dragg-элемента

            if(currentDraggElement.slice(-1) === droppableId.slice(-1)){ // сотвествие перетаскиваемого и принимающего элемета по последней цифре в id
                $(this).addClass("sucsess-highlight");
                $(currentDraggElementID).css({'background':'#309a5e', 'color':'#fff'}) 
            }
            
          },
            accept: function(el){ // el — объект перетаскиваемого элемента
                return $(this).attr('id').slice(-1) === el[0].id.slice(-1);  
            },
            
            tolerance: 'fit'
        });
});

$(function(){
    
    $('.write-sentences input').focusout(function(){
        var $inputValue = $(this).val();
        var $dataAnswer = $(this).attr('data-answer');

        });
                                         }
        
       // Узнать сколько элементов в ансвер
        // Использовать это для счетчика
        // пройти циклом и добавить содержания спан в массив
        //Создавать массив в жс и на лету создавать элементы на странице исходя из ид которые в самой задаче
        // использовать дата артибут???
        //онфокус колор блак
        
        var test ='.answers span[data-answer=\"' + $dataAnswer + '\"]';
        console.log(test);
        
        var answersArray = $('#unit-1_ex-2 span'); // массив с вариантами
        
        if($inputValue === $placeholderValue + ' ' + toBe[$placeholderValue] + ' from ' + $dataAnswer){
            
           $(this).css({'color':'green'});
            
$(test).css({'color':'red'});           
        }
        else{
            $(this).css({'color':'red'});
        }
        

    })
    
});