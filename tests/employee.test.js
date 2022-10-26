const Employee = require('../lib/Employee');

// need to have Class of "employee" and have following properties
// of name, id, email
describe('Employee', () => {
    describe('Testing to see in Employees information will be logged correctly', () => {
        it('Should have a first and last name', () => {
            const employee = new Employee('Employees box', [
                { name: 'Mario', id: '0987', email: 'mario@yahoo.com'}
            ])
            it('Needs to log employees name', () => {
                expect(employee.name).toBe('Mario');
            });
            it('Needs to log employee ID', () => {
                expect(employee.id).toBe('0987')
            });
            it('Needs to log employee email', () => {
                expect(employee.email).toBe('mario@yahoo.com')
            });
        })
    })
});