// Define an object 'op' with an 'id' property
let op = {
  id: 12345
};

// Define an object 'ref'
let ref = {};

// Assign the 'id' property of 'op' to the '$ref' property of 'ref'
ref.$ref = op.id;

// Output the 'ref' object to verify the assignment
console.log(ref); // { $ref: 12345 }
