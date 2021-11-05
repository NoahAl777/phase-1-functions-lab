const hqStreet = 42;

function distanceFromHqInBlocks(pickupLocation) {
  if (hqStreet > pickupLocation) {
    return hqStreet - pickupLocation;
  }
  else {
    return pickupLocation - hqStreet;
  };
}

function distanceFromHqInFeet(pickupLocation) {
  return distanceFromHqInBlocks(pickupLocation) * 264;
}

function distanceTravelledInFeet(pickupLocation, dropoffLocation) {
  if (pickupLocation - dropoffLocation < 0) {
    return 264 * (pickupLocation - dropoffLocation) * -1;
  }
  else {
    return 264 * (pickupLocation - dropoffLocation);
  };
}

function calculatesFarePrice(start, destination) {
  let distance = distanceTravelledInFeet(start, destination);
  if (distance < 400) {
    return 0;
  }
  else if (distance <= 2000) {
    return (distance - 400) * 0.02;
  }
  else if (distance <= 2500) {
    return 25;
  }
  else {
    return 'cannot travel that far';
  }
}