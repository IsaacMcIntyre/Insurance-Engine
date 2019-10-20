const personal = require('../personal');

describe('Personal calculations', () => {

  test('Occupation of Stunt Driver adds £200 onto premium', () => {
    const response = personal({ "occupation": "SandwichArtist", "City": "Manchester"}, 
      {"Name": "Isaac", "Occupation": "Sandwich Artist", "City": "Manchester" });
    expect(response.premium).toBe(700);
  });

  test('Occupation of Sandwich Artist reduces premium by 10%', () => {
    const response = personal({ "occupation": "SandwichArtist", "City": "Manchester"}, 
      {"Name": "Isaac", "Occupation": "Sandwich Artist", "City": "Manchester" });
    expect(response.premium).toBe(500);  
  });

  // test('City of London must be declined with a reason of “LDN High Risk”', () => {
  //   //send in city of london as a risk and then get a decline 
  // });
});