// Code your solution in this file!
function logDriverNames(drivers) {
  drivers.forEach(driver => {
    console.log(driver.name)
  });
}

function logDriverByHometown(drivers, location) {
  drivers.forEach(driver => {
    if (driver.hometown === location){
      console.log(driver.name)
    };
  })
}
