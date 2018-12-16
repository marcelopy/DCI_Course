$().ready(ev=>{
  $(`button`).click(ev=>{
    $('p').hide();
    let grabIdentifier=ev.target.getAttribute(`identifier`);
    $(`p[identifier=${grabIdentifier}]`).show();
  })
})
