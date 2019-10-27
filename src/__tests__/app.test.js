const engine = require('../app');

describe('App', () => {
  test('No specific known data should return accept', () => {
    let risk = {
      "person": {
        "name": "John Doe",
        "occupation": "An unknown occupation which will definitely not be known to this insurance company.",
        "city": "Llanfairpwllgwyngyllgogerychwyrndrobwllllantysiliogogogoch"
      },
      "vehicle": {
        "model": "Gilbern GT",
        "manufacturedDate": "2010-01-01",
        "colour": "Greenish Purple",
        "hasSecurityDevice": true
      }
    };
    const response = engine(risk);
    expect(response.result).toBe('Accept');
  });

  test('If person calculations detect a decline then do not execute vehicle calculations', () => {
    let risk = {
      "person": {
        "name": "John Doe",
        "occupation": "An unknown occupation which will definitely not be known to this insurance company.",
        "city": "Llanfairpwllgwyngyllgogerychwyrndrobwllllantysiliogogogoch"
      },
      "vehicle": {
        "model": "Gilbern GT",
        "manufacturedDate": "2010-01-01",
        "colour": "Greenish Purple",
        "hasSecurityDevice": true
      }
    };
    risk.person.city = 'City of London'; //will cause decline before vehicle calculations
    risk.vehicle.hasSecurityDevice = false; //should have result of report in vehicle calculations
    const response = engine(risk);
    expect(response.result).toBe('Declined'); //Declined and not reported
  });

  test('No security device should return report', () => {
    let risk = {
      "person": {
        "name": "John Doe",
        "occupation": "An unknown occupation which will definitely not be known to this insurance company.",
        "city": "Llanfairpwllgwyngyllgogerychwyrndrobwllllantysiliogogogoch"
      },
      "vehicle": {
        "model": "Gilbern GT",
        "manufacturedDate": "2010-01-01",
        "colour": "Greenish Purple",
        "hasSecurityDevice": true
      }
    };
    risk.vehicle.hasSecurityDevice = false;
    const response = engine(risk);
    expect(response.result).toBe('Report');
  });
});