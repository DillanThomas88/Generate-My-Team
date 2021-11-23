const Intern = require('../assets/js/intern')


describe('Intern', () => {
  it("should return correct education", () => {
    // Arrange
    const name = 'Dillan';
    const email = 'email@gmail.com'
    const school = 'ucsd' 
    // Act
    const obj = new Intern(name, email, school);

    // Assert
    expect(obj.school).toEqual(school);

  });
    describe('Employee', () => {
      // Positive test
      it("should return correct name", () => {
        // Arrange
        const name = 'Dillan';
        const email = 'email@gmail.com'
        const school = '12c'
        // Act
        const obj = new Intern(name, email, school);
  
        // Assert
        expect(obj.name).toEqual(name);

      });
      it("should return correct email", () => {
        // Arrange
        const name = 'Dillan';
        const email = 'email@gmail.com'
        const school = '12c'
        // Act
        const obj = new Intern(name, email, school);
  
        // Assert
        expect(obj.email).toEqual(email);

      });

  
    });
  });