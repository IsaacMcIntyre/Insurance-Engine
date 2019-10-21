module.exports = (person, premium) => {
  let response = { result: null, reason: null, premium: premium };
  response = occupationCalculator(person.occupation, response);
  response = cityCalculator(person.city, response);
  return response;
}

const occupationCalculator = (occupation, response) => {
  switch (occupation) {
    case "Stunt Driver":
      response.premium += 200;
      break;
    case "Sandwich Artist":
      response.premium = response.premium*.9;
    default:
      //do nothing
      break;
  }

  return response;
}

const cityCalculator = (city, response) => {
  switch (city) {
    case "City of London":
      response.result = "Declined";
      response.reason = "LDN High Risk";
  }

  return response;
}