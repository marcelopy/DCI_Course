let currentRuler = `Cersei`;

// let changeRuler = newRuler =>{
//   setTimeout(()=>{
//     currentRuler = newRuler;
//     console.log(currentRuler)
//
//     setTimeout(()=>{
//       currentRuler=`Snow`;
//       console.log(currentRuler);
//
//       setTimeout(()=>{
//         currentRuler=`Jamie`;
//         console.log(currentRuler);
//
//           setTimeout(()=>{
//             currentRuler=`Nightking`;
//             console.log(currentRuler);
//           }, 1000);
//       }, 2000);
//     }, 3000);
//   }, 5000);
// }


let changeRuler = name =>{
  let promisedRuler = new Promise(function(resolve, reject){
    setTimeout(()=>{
        resolve(name);
  }, 3000)
})
  return promisedRuler;
}


changeRuler(`Danny`)
  .then(name=>{
    currentRuler = name;
    console.log(currentRuler);
    return changeRuler(`Snow`);
  })

  .then (name=>{
    currentRuler=name;
    console.log(currentRuler);
    return changeRuler(`Jamie`);
  })
  .then (name=>{
    currentRuler=name;
    console.log(currentRuler);
  })

  console.log(currentRuler);
