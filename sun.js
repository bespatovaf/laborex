/**
 * Calculates the sum of x-coordinates using a custom accessor function.
 * @param {function(object): number} getX - The x-coordinate accessor function.
 * @param {Array<object>} objects - An array of objects containing x-coordinates.
 * @returns {number} The sum of x-coordinates.
 */
function sumXCoordinates(getX, objects) {
    let sum = 0;
    objects.forEach(obj => {
        sum += getX(obj); // Call getX to retrieve x-coordinate from each object
    });
    return sum;
}

// Example usage:
const objects = [
    { x: 10, y: 20 },
    { x: 5, y: 15 },
    { x: 8, y: 12 }
];

// Define the accessor function for x-coordinate
function getXCoordinate(obj) {
    return obj.x;
}

// Calculate the sum of x-coordinates
const totalX = sumXCoordinates(getXCoordinate, objects);
console.log('Total x-coordinate sum:', totalX); // Output: Total x-coordinate sum: 23 (10 + 5 + 8)
