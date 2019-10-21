const personal = require('../personal');

describe('Personal calculations', () => {
  test('Occupation of Stunt Driver adds £200 onto premium', () => {
    const response = personal({"name": "Isaac", "occupation": "Stunt Driver", "city": "Manchester" }, 500);
    expect(response.premium).toBe(700);
  });

  test('Occupation of Sandwich Artist reduces premium by 10%', () => {
    const response = personal({"name": "Isaac", "occupation": "Sandwich Artist", "city": "Manchester" }, 500);
    expect(response.premium).toBe(450);  
  });

  test('City of London must be declined with a reason of “LDN High Risk”', () => {
    const response = personal({"name": "Isaac", "occupation": "Sandwich Artist", "city": "City of London" }, 500);
    expect(response.result).toBe("Declined");  
    expect(response.reason).toBe("LDN High Risk");
  });
});