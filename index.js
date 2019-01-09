// Code your solution in this file!
function logDriverNames(drivers) {
  drivers.forEach(driver => {
    console.log(driver.name)
  });
}

function logDriversByHometown(drivers, location) {
  drivers.forEach(driver => {
    if (driver.hometown === location){
      console.log(driver.name)
    };
  })
}

// const driversByRevenue = function (drivers) {
//   return drivers.sort((a, b) => a.revenue - b.revenue);
// }

const driversByRevenue = function (drivers) {
  return drivers.slice().sort(function (driverOne, driverTwo) {
    return driverOne.revenue - driverTwo.revenue;
  });
}


const driversByName = function (drivers) {
  return drivers.sort =>( (a, b) => a.name.localeCompare(b.name));
}
