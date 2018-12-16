$().ready(ev=>{
$(`section>h3`).click(function(ev){
  ev.stopPropagation();
  $(this).parent().parent().find(`div`).slideUp(500);
  $(this).siblings().slideDown(500);
})

$(`body`).click(function(ev){
  $(this).find(`div`).slideUp(500);
})
})
