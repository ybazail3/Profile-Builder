const engineer = require('./engineer.js');

// github and the type of role should be overriden and returned to 'Engineer'

describe('Engineer', () => {
    it('Should change employees role to Engineer', () => {
        expect(role).toBe('Engineer');
    });

    it('Gives you an option to input GitHub username', () => {
        expect(gitHub).toBe(true);
    });
})