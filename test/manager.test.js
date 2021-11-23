const { expect } = require('@jest/globals');
const Manager = require('../assets/js/manager')


describe('Manager', () => {
  it("should return correct office number", () => {
    // Arrange
    const name = 'Dillan';
    const email = 'email@gmail.com'
    const office = '12c'
    // Act
    const obj = new Manager(name, email, office);

    // Assert
    expect(obj.officeNumber).toEqual(office);

  });
    describe('Employee', () => {
      // Positive test
      it("should return correct name", () => {
        // Arrange
        const name = 'Dillan';
        const email = 'email@gmail.com'
        const office = '12c'
        // Act
        const obj = new Manager(name, email, office);
  
        // Assert
        expect(obj.name).toEqual(name);

      });
      it("should return correct email", () => {
        // Arrange
        const name = 'Dillan';
        const email = 'email@gmail.com'
        const office = '12c'
        // Act
        const obj = new Manager(name, email, office);
  
        // Assert
        expect(obj.email).toEqual(email);

      });

  
    });
  });
  
