module.exports = (vehicle, response) => {
  response = securityDevice(vehicle.hasSecurityDevice, response);
  age(vehicle.manufacturedDate, response)
  return response;
}

const securityDevice = (hasSecurityDevice, response) => {
  if (!hasSecurityDevice) {
    response.result = 'Report';
    response.reason = 'SDEV MISS';
  }
  return response;
}

const age = (manufacturedDate, response) => {
  const today = new Date();
  const carDate = new Date(manufacturedDate);
  const timeDifference = Math.abs(carDate.getTime() - today.getTime());
  const dateDifference = Math.ceil(timeDifference / (1000 * 3600 * 24));
  const yearDifference = Math.floor(dateDifference / 365)
  if ((yearDifference - 10) >= 1) {
    response.premium = response.premium + (response.premium*0.05*(yearDifference-10));
  }
  return response;
}
