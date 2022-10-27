const Employee = require('../lib/Employee');
const Engineer = require('../lib/Engineer');

// github and the type of role should be overriden and returned to 'Engineer'

describe('Engineer', () => {
    describe('testing to see if Engineers information will be logged correctly', () => {
        it('Needs to log engineers info', () => {
            const engineer = new Engineer('Toadette', '54321', 'toadette14@outlook.com', 'toadettecoder')
                expect(engineer.name).toBe('Toadette');
                expect(engineer.id).toBe('54321');
                expect(engineer.email).toBe('toadette14@outlook.com');
                expect(engineer.github).toBe('toadettecoder');
        })
    });
});