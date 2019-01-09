// Code your solution in this file!
function logDriverNames(drivers) {
  drivers.forEach(driver => {
    console.log(driver.name)
  });
}

function logDriverByHometown(drivers, hometown) {
   drivers.forEach(driver => {
    if (driver.hometown === hometown){console.log(driver.name)};
  })
}
