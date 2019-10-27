const personal = require('./personal');
const vehicle = require('./vehicle');

const INITIAL_PREMIUM = 500

const calculate = (risks) => {
    let premium = INITIAL_PREMIUM;
    let response = personal(risks.person, premium);
    if (response.result === 'Declined') {
        return response;
    }
    response = vehicle(risks.vehicle, response);
    return response;
}

module.exports = calculate;