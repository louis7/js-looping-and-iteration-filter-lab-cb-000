// Code your solution in this file
function findMatching (drivers, string) {
  const newDrivers = [];

  for (const driver of drivers) {
    if ( driver == string || driver.toLowerCase() == string.toLowerCase() ) {
      newDrivers.push(driver);
    }
  }

  return newDrivers;
}
<<<<<<< HEAD


function fuzzyMatch(drivers, string) {
  const newDrivers = [];

  for (const driver of drivers) {
    if ( driver[0] == string[0]) {
      newDrivers.push(driver);
    }
  }

  return newDrivers;
}


function matchName (list, name) {
  return list.filter(function (driver) {
    return driver.name.toLowerCase() === name.toLowerCase();
  });
}
=======
>>>>>>> 7ad54143a7de900c7f5d8fd6dd0064f3b327ce78
