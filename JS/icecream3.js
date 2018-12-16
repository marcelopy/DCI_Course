// Container Ex Refactored


console.log(`Container Refactored`)

var maxWeight = 10000;
var weightIncluded = 0;
// var id = 1;
var weightNextContainer = 10;
var ignoredContainers = 0;


function calculateContainers(id){
if (maxWeight >= weightIncluded + weightNextContainer) {

  if (id <= 100) {
    // if (id >= 61 && id <= 70) {
    //   id++;
    //   ignoredContainers++;
    //   continue;
    // }
    weightIncluded += 10;
    weightNextContainer = 10;
  } else if (id <= 200) {
    weightIncluded += 20;
    weightNextContainer = 20;
    // if (id === 111) {
    //   id++;
    //   break;
    // }
  } else if (id <= 250)  {
    weightIncluded += 50;
    weightNextContainer = 50;
  } else if (id <= 300){
    weightIncluded += 100;
    weightNextContainer = 100;
  } else if (id <= 400) {
    weightIncluded += 200;
    id === 400 ? weightNextContainer = 500 : weightNextContainer = 200;
  } else {
    weightIncluded += 500;
    weightNextContainer = 500;
  }

  id++;
 console.log(`I have included ${id-1} containers to the ship `);
 console.log(`The remaining weight is ${maxWeight-weightIncluded}`);
 calculateContainers(id);
}
return id;
}

// calculateContainers(1);
var totalNumberContainers = calculateContainers(1);
console.log(`The total number of containers in the ship is ${totalNumberContainers-1}.`);
