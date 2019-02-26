console.log('The calculator is loaded and ready.');

// Things we need to figure out:
  // fuelToOffload:
    // The amount we will offload to get below the weight limit, but still be able to fly home.
    // fuelToOffload = tankCapacity - requiredFuel
  // tankCapacity: Maximum capacity of the shuttle's tank.
  // requiredFuel:
    // Minimum fuel needed to get back to Earth.
    // requiredFuel = totalDistanceToTravel * (averageLitersOverHundred / 100)

function calculateFuelToOffload(totalDistanceToTravel, averageLitersOverHundred, tankCapacity) {
  // Step 1: Calculate required fuel.
  var requiredFuel = totalDistanceToTravel * (averageLitersOverHundred / 100);
  console.log("Required fuel: " + requiredFuel + ' L');
  // Step 2: Calculate fuel to offload.
  var fuelToOffload = tankCapacity - requiredFuel;
  console.log("Fuel to offload: " + fuelToOffload + ' L');
}