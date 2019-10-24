const vehicle = require('../vehicle');

describe('vehicle', () => {
  test('Vehiles without security device should Report with reason of “SDEV MISS”', () => {
    const response = vehicle({ "model": "Ford", "manufacturedDate": "2019-01-01", "colour": "Red", "hasSecurityDevice": false }, 500);
    expect(response.reason).toBe('SDEV MISS');
  });

  test('Vehicles over 10 years old increases premium by 5% for each year over 10', () => {
    const response = vehicle({ "model": "Ford", "manufacturedDate": "2008-10-24", "colour": "Red", "hasSecurityDevice": true }, 500);
    expect(response.premium).toBe(525);
  });
});