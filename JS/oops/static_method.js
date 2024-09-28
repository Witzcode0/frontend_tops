/*
---------------
Static Methods:
---------------
Static methods are methods that belong to the class itself, rather than individual objects. They are defined directly on the class and can be accessed without creating an instance of the class.

Key Characteristics:

- Belong to the Class: Static methods are associated with the class definition, not with specific objects.
- No this Keyword: They don't have access to the this keyword, which refers to the current object instance.
- Direct Access: You can call static methods directly on the class name, without needing to create an object.

syntax:
class MyClass {
  static staticMethod() {
    // Static method implementation
  }
}
*/

class MathUtils {
    static add(a, b) {
        return a + b;
    }

    static subtract(a, b) {
        return a - b;
    }
}

let resultAdd = MathUtils.add(3, 5); 
console.log(resultAdd);
let resultSub = MathUtils.subtract(10, 2);
console.log(resultSub);