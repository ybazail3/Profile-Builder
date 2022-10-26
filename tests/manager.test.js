const Employee = require('../lib/Employee');
const Manager = require('../lib/Manager');

describe('Managers log', () => {
  describe('Testing to see in Managers information will be logged correctly', () => {
    it('Needs to log managers info', () => {
      const manager = new Manager('Manager box', [
        { name: 'Princess Peach', id: '12345', email: 'princesspeach2@gmail.com', officeNumber: '123' }
      ])
    })
    it('Needs to log managers name', () => {
      expect(manager.name).toBe('Princess Peach');
    });
    it('Needs to log manager ID', () => {
      expect(manager.id).toBe('12345')
    });
    it('Needs to log managers email', () => {
      expect(manager.email).toBe('princesspeach2@gmail.com')
    });
    it('Needs to log the  office number', () => {
      expect(manager.officeNumber).toBe('123')
    });
  });
});