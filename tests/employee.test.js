const Index = require('./employee');

// need to have Class of "employee" and have following properties
// of name, id, email
describe('Employee', () => {
    it('Should have a first and last name', () => {
        expect(fName + lName).toBe('First and last name');
    });

    it('Should have employees ID', () => {
        expect(ID).toBe('employees ID');
    });

    it('Be able to input email address', () => {
        expect(email).toBe('...@...com');
    });
})