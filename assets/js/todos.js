// Toggle specific todos by clicking
$("ul").on("click", "li", function(){
  $(this).toggleClass("completed");
});

//Click on X to delete todo
$("ul").on("click", "span", function(event){
  event.stopPropagation();
  $(this).parent().fadeOut(500, function() {
    $(this).remove();
  });
})

$("input[type='text']").keypress(function(event){
  if (event.which === 13) {
    //grab new todo text from input
    var todoText = $(this).val();
    $(this).val("");

    //create new li for todo
    $("ul").append("<li><span><i class='fa fa-trash'></i></span> " + todoText + "</li>");
  }
})

$(".fa-plus").click(function () {
  $("input[type='text']").fadeToggle(500);
})
