// Mark todos as completed on click, if not completed
// and as not competed on click, if completed.
$('ul').on('click', 'li', function(){
    $(this).toggleClass('completed');
});

// Delete todo when clicked on X
$('ul').on('click', 'span', function(event){
    $(this).parent().fadeOut(500, function(){
        $(this).remove();
    });
    event.stopPropagation();
});

// Add todo list item to the end of the list
$('input[type="text"]').on('keypress', function(event){
    if (event.which === 13) {
        var itemToAdd = $(this).val();
        $(this).val('');
        $('ul').append('<li><span> X </span> ' + itemToAdd + '</li>');
    }
});