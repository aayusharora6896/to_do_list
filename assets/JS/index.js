// Check off specific Todos by Clicking.
$("ul").on("click", "li", function(){
   $(this).toggleClass("completed");
});

//CLick on X to delete.
$("ul").on("click", "span", function(event){
    $(this).parent().fadeOut(500, function(){
        $(this).remove();
    });
    event.stopPropagation();
})

$("input[type='text']").keypress(function(event){
    if(event.which === 13){
        // grabbing new ToDoText from Input.
        var newListItem = $(this).val();
        $(this).val(" ");
        // create a new Li and add to Ul.
        $("ul").append("<li><span><i class='fas fa-trash-alt'></i></span> " + newListItem + "</li>");
    }
});

  $("#toggleForm").on("click", function(){
       $("input[type='text']").fadeToggle();
});