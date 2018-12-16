$().ready(ev=>{
$("li").click(ev=>{
  $("li").removeClass("selected");
  $("section").removeClass("active");
  let grabIdentifier=ev.target.getAttribute(`identifier`);
  $(`li[identifier=${grabIdentifier}]`).addClass("selected");
  $(`section[identifier=${grabIdentifier}]`).addClass("active");
})

$(`button`).on({
  mouseenter: function(ev){
    $(this).text("Welcome, stay here");
  },
  mouseleave: function(ev){
    $(this).text("Don't leave me this way!");
  }
})

})
