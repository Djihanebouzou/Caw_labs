// Mock console.log so Jest can capture it
console.log = jest.fn();

// Import fileImport.js (this will run the code automatically)
require('./fileImport.js');

test("fileImport.js should calculate the correct average and print it", () => {
    // The scores in fileImport.js:
    // [12, 15, 18, 10, 20]
    // Sum = 75
    // Average = 75 / 5 = 15

    expect(console.log).toHaveBeenCalledWith("The average is: 15");
});
