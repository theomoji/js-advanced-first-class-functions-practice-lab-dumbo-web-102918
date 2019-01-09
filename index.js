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

const driversByRevenue = function (drivers) {
  return drivers.slice().sort((a, b) => a.revenue - b.revenue);
}

const driversByName = function (drivers) {
  return drivers.slice().sort(function (a, b) {
    return a.name.localeCompare(b.name);
  });
}
