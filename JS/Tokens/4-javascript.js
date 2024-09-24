/* 

JavaScript is a dynamically typed language, meaning the type of a variable is determined at runtime based on its value. Here are the primary data types in JavaScript:

1] Primitive Data Types
- Number: Represents numerical values, including integers and floating-point numbers.
- String: Represents sequences of characters.
- Boolean: Represents true or false values.
- null: Represents an empty value.   
- undefined: Represents a variable that has been declared but not yet assigned a value.
- Symbol: Represents a unique identifier.

2] Object Data Type
- Object: Represents a collection of key-value pairs. Objects can be used to store data in a structured way.


// Number
let age = 30;

// String
let name = "Alice";

// Boolean
let isStudent = true;

// null
let job = null;

// undefined
let hobby; // Declared but not assigned

// Object
let person = {
  firstName: "John",
  lastName: "Doe",
  age: 25
};

Type Conversion

Implicit Type Conversion
------------------------
Implicit type conversion, also known as type coercion, occurs automatically in JavaScript when values of different data types are combined in operations. This can sometimes lead to unexpected results if not handled carefully.

Examples:

Arithmetic Operations: When performing arithmetic operations (addition, subtraction, multiplication, division, modulus), JavaScript will convert operands to numbers if necessary. 

For example:
let num = 10;
let str = "20";
let result = num + str; // Result will be "1020" (string concatenation)


Comparison Operators: When using comparison operators (==, !=, ===, !==), JavaScript will convert operands to a common type for comparison. However, strict equality (===) requires operands to be of the same type.

Boolean Context: In boolean contexts (e.g., if statements, while loops), values are converted to boolean. Any non-zero number, non-empty string, or object is considered true, while 0, empty string, null, undefined, and NaN are considered false.

Explicit Type Conversion
------------------------
Explicit type conversion allows you to intentionally change the data type of a value using specific functions. This provides more control over the conversion process.

Examples:
Number(): Converts a value to a number.
let str = "10";
let num = Number(str); // num will be 10

String(): Converts a value to a string.
let num = 20;
let str = String(num); // str will be "20"

Boolean(): Converts a value to a boolean.
let bool = Boolean(0); // bool will be false

Key Differences

Implicit: Occurs automatically based on the context of the operation.
Explicit: Requires the use of specific functions to convert the data type.
*/