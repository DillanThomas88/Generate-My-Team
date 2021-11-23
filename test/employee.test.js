const Employee = require('../assets/js/employee')

describe('Employee', () => {
  // Positive test
  it("should return correct name", () => {
    // Arrange
    const name = 'Dillan';
    const email = 'email@gmail.com'
    // Act
    const obj = new Employee(name, email);

    // Assert
    expect(obj.name).toEqual(name);

  });
  it("should return correct email", () => {
    // Arrange
    const name = 'Dillan';
    const email = 'email@gmail.com'
    // Act
    const obj = new Employee(name, email);

    // Assert
    expect(obj.email).toEqual(email);

  });


});