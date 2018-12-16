let otherValues= {"font-size":"2vw", "border":"2px solid black"};

//Selectors

$().ready(ev=>{
  console.log(`is ready!`);
  $(`button`).click(ev=>{
    // console.log(ev.target);
    // $(`p`).css(`display`, `block`);
    // $(`p`).css({'color':'blue', 'background':"#ccc", "padding":"2vw"});
    // $(`p`).css(otherValues);

    $(`p`).slideToggle();

  })
    $(`button`).dblclick(ev=>{
    $(`p`).css({'color':'blue', 'background':"#ccc", "padding":"2vw"});
  })

})
