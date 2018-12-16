let links = document.querySelectorAll(`ul`);
let movies = document.querySelectorAll(`div`);
let yAxisOfMovies = [];
for (i=0; i<movies.length; i++){
  yAxisOfMovies.push(movies[i].offsetTop)
};

window.addEventListener(`scroll`, function(){

    for(j=0; j<movies.length; j++){
      if(window.pageYOffset>=yAxisOfMovies[j] && window.pageYOffset<yAxisOfMovies[j+1]){
      links[j].classList.add(`hover`);
    }
      else {links[j].classList.remove(`hover`);
    }
  }
})
     //
     //   if(window.pageYOffset<=yAxisOfMovies[0]){
     //   for(k=0; k<movies.length; k++){
     //       links[k].classList.remove(`hover`);
     //     }
     //    links[0].classList.add(`hover`);
     //  }else if(window.pageYOffset<=yAxisOfMovies[1]){
     //   for(k=0; k<movies.length; k++){
     //     links[k].classList.remove(`hover`);
     //   }
     //   links[1].classList.add(`hover`);
     // }else if(window.pageYOffset<=yAxisOfMovies[2]){
     //    for(k=0; k<movies.length; k++){
     //      links[k].classList.remove(`hover`);
     //    }
     //    links[2].classList.add(`hover`);
     // }else if(window.pageYOffset<=yAxisOfMovies[3]){
     //    for(k=0; k<movies.length; k++){
     //      links[k].classList.remove(`hover`);
     //    }
     //    links[3].classList.add(`hover`);
     //  } else {
     //    for(k=0; k<movies.length; k++){
     //      links[k].classList.remove(`hover`);
     //    }
     //    links[4].classList.add(`hover`);
     //  }

  // })
