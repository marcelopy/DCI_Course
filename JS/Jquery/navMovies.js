$().ready(ev=>{
  $(`nav>li>ul`).hide();

  $(`nav>li`).click(function(ev){
    ev.stopPropagation();
    if($(this).hasClass(`flag`)){
      $(this).children().slideUp(500);
      $(this).removeClass(`flag`);
    } else {
      $(`nav>li`).children().slideUp(500);
      $(`nav>li`).removeClass(`flag`);
      $(this).children().slideDown(500);
      $(this).addClass(`flag`);
    }

  })

  $(`body`).click(function(ev){
    $(this).find(`ul`).slideUp(500);
    $(this).find(`li`).removeClass(`flag`);

  })
})
// $().ready(ev=>{
//   $(`nav>li`).children().hide();
//   $(`body`).click(function(ev){
//     $(this).find(`ul`).slideUp(500);
//   })
// $(`nav>li`).click(function(ev){
//   ev.stopPropagation();
//   $(`nav>li`).children().slideUp(500);
//   $(this).children().slideDown(500);
// })
//
// })
