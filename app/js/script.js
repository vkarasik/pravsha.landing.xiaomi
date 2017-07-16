$(function(){
    
    var $hideCell = $('.tr:gt(4)');
    $($hideCell).hide();
    
    $('.show-all').click(function(){
        
        var buttonText = $(this);
        buttonText.text(buttonText.text() == 'Показать все' ? 'Скрыть' : 'Показать все');

        $($hideCell).slideToggle('slow');
        })
        
});