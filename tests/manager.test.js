const Employee = require('../lib/Employee');
const Manager = require('../lib/Manager');

describe('Managers log', () => {
  describe('Testing to see in Managers information will be logged correctly', () => {
    it('Needs to log managers info', () => {
      const manager = new Manager('Princess Peach', '12345', 'princesspeach2@gmail.com', '123')
        expect(manager.name).toBe('Princess Peach');
        expect(manager.id).toBe('12345');
        expect(manager.email).toBe('princesspeach2@gmail.com');
        expect(manager.officeNumber).toBe('123');
    });
  });
});