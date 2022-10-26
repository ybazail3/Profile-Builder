const Employee = require('../lib/Employee');
const Engineer = require('../lib/Engineer');

// github and the type of role should be overriden and returned to 'Engineer'

describe('Engineer', () => {
    describe('testing to see if Engineers information will be logged correctly', () => {
        it('Needs to log engineers info', () => {
            const engineer = new Engineer('Engingeers box', [
                { name: 'Toadette', id: '54321', email: 'toadette14@outlook.com', github: 'toadettecoder' }
            ]);
        })
        it('Should log Engineers name', () => {
            expect(engineer.name).toBe('Toadette');
        });
        it('Should log engineers ID', () => {
            expect(engineer.id).toBe('54321');
        });
        it('Should log engineers email', () => {
            expect(engineer.email).toBe('toadette14@outlook.com')
        });
        it('Gives you an option to input GitHub username', () => {
            expect(engineer.github).toBe('toadettecoder');
        });
    });
});