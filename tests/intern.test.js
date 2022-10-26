
const Employee = require('../lib/Employee');
const Intern = require('../lib/Intern');

describe('Intern', () => {
    describe('testing to see if Interns information will be logged correctly', () => {
        it('Needs to log Interns info', () => {
            const intern = new Intern('Interns box', [
                { name: 'Princess Daisy', id: '23415', email: 'princessdaisy@icloud.com.com', school: 'Nintendo University' }
            ]);
        })
        it('Should log Engineers name', () => {
            expect(intern.name).toBe('Princess Daisy');
        });
        it('Should log engineers ID', () => {
            expect(intern.id).toBe('23415');
        });
        it('Should log engineers email', () => {
            expect(intern.email).toBe('princessdaisy@icloud.com')
        });
        it('Gives you an option to input GitHub username', () => {
            expect(intern.school).toBe('Nintendo University');
        });
    });
});