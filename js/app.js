// Completed 'li' elements
$('ul').on('click', 'li', function() { 
  $(this).toggleClass('completed');
});

// Remove 'li' elements
$('ul').on('click', 'span', function(e) {
  $(this).parent().fadeOut(500, function() {
    $(this).remove();
  });
  // e.stopPropagation();S
});

// Create new 'li' elements
$("input[type='text']").keypress(function(e){
  if(e.which === 13){
    let listItem = $(this).val();
    $(this).val('');
    $('ul').append(`<li><span><i class="fas fa-trash-alt"></i></span> ${listItem}</li>`);
  }
});

// Toggle input element
$('.fa-plus').click(function() {
  $("input[type='text']").fadeToggle();
})

