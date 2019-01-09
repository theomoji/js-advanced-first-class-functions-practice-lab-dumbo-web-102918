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

function driversByRevenue(drivers){
  return drivers.sort((a, b) =>a.revenue - b.revenue);
}
