// Check Off Specific Todos By Clicking
$("ul").on("click", "li", function () {
  $(this).toggleClass("completed");
});

//Click on X to delete Todo and remove Bubbling effect
$("ul").on("click", "span", function (event) {
  $(this)
    .parent()
    .fadeOut(500, function () {
      $(this).remove();
    });
  event.stopPropogation();
});

//Add new todos
$("input[type='text']").keypress(function (event) {
  if (event.which === 13) {
    //grabbing new todo text from input
    var todoText = $(this).val();
    $(this).val("");
    //create new li and add to ul
    $("ul").append(
      "<li><span><i class='far fa-trash-alt'></i></span> " + todoText + "</li>"
    );
  }
});

$(".fa-plus").click(function () {
  $("input[type='text']").fadeToggle();
});
