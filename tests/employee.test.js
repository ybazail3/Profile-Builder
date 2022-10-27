const Employee = require('../lib/Employee');

// need to have Class of "employee" and have following properties
// of name, id, email
describe('Employee', () => {
    describe('Testing to see in Employees information will be logged correctly', () => {
        it('Should have a first and last name', () => {
            const employee = new Employee('Mario', '0987','mario@yahoo.com');
                expect(employee.name).toBe('Mario');
                expect(employee.id).toBe('0987');
                expect(employee.email).toBe('mario@yahoo.com');
        });
    });
});