
const Employee = require('../lib/Employee');
const Intern = require('../lib/Intern');

describe('Intern', () => {
    describe('testing to see if Interns information will be logged correctly', () => {
        it('Needs to log Interns info', () => {
            const intern = new Intern('Princess Daisy', '23415', 'princessdaisy@icloud.com', 'Nintendo University')
            expect(intern.name).toBe('Princess Daisy');
            expect(intern.id).toBe('23415');
            expect(intern.email).toBe('princessdaisy@icloud.com');
            expect(intern.school).toBe('Nintendo University');
        });
    });
});