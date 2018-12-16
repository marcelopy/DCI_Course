$().ready(ev=>{
  $(`form`).submit(function(ev){
    ev.preventDefault();
    let task = $(`input`).val();
    $(`input`).val(``);
    let div = document.createElement(`DIV`);
    div.setAttribute(`class`,`container`);
    let p = document.createElement(`P`);
    p.setAttribute(`class`,`taskText`);
    let span = document.createElement(`SPAN`);
    span.setAttribute(`class`,`removeButton`);
    p.innerText = task;
    span.innerText = `Remove Task`;
    div.append(p,span);
    $(div).hide().appendTo(`form`).fadeIn(500);
    $(`.removeButton`).click(function(ev){
      $(this).parent().slideUp(300, function(){$(this).remove()});

    })

  })

})
