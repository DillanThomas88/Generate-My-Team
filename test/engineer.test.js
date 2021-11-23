const Engineer = require('../assets/js/engineer')
describe('Engineer', () => {
  it("should return correct github username", () => {
    // Arrange
    const name = 'Dillan';
    const email = 'email@gmail.com'
    const username = 'github' 
    // Act
    const obj = new Engineer(name, email, username);

    // Assert
    expect(obj.githubUsername).toEqual(username);

  });
    describe('Employee', () => {
      // Positive test
      it("should return correct name", () => {
        // Arrange
        const name = 'Dillan';
        const email = 'email@gmail.com'
        const username = '12c'
        // Act
        const obj = new Engineer(name, email, username);
  
        // Assert
        expect(obj.name).toEqual(name);

      });
      it("should return correct email", () => {
        // Arrange
        const name = 'Dillan';
        const email = 'email@gmail.com'
        const username = '12c'
        // Act
        const obj = new Engineer(name, email, username);
  
        // Assert
        expect(obj.email).toEqual(email);

      });

  
    });
  });