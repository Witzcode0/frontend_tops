/*
---------
JS Class:
---------
A class is a blueprint for creating objects. It defines the properties and methods that objects of that class will have.

syntax:
class MyClass {
  constructor(property1, property2) {
    this.property1 = property1;
    this.property2 = property2;
  }

  method1() {
    // Method implementation
  }

  static staticMethod() {
    // Static method implementation
  }
}

----------
JS Object:
----------
An object is an instance of a class. It represents a specific entity with its own values for the properties defined in the class.

syntax:
let object = new MyClass(value1, value2);

----------------------
JS Constructor Method:
----------------------
The constructor method is a special method called automatically when you create a new object using the new keyword.

syntax:
  constructor(property1, property2) {
    this.property1 = property1;
    this.property2 = property2;
  }

-------------
JS Prototype:
-------------
The prototype is a special object associated with a class that provides a way to share properties and methods among all objects of that class.

syntax:
MyClass.prototype.newMethod = function() {
  // Method implementation
};
*/

class Regiser{
    constructor(firstName, lastName, email, mobile, password, confirmPassword) {
        this.fn = firstName;
        this.ln = lastName;
        this.e = email;
        this.m = mobile;
        this.p = password;
        this.cp = confirmPassword;
    }

    validateEmail() {
        const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        return re.test(this.e);
    }

    validatePassword() {
        const re = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[!@#$%^&*])[A-Za-z\d!@#$%^&*]{8,}$/;
        return re.test(this.p);
    }

    comparePasswords() {
        return this.p === this.cp;
    }

    isValid() {
        return this.validateEmail() && this.validatePassword() && this.comparePasswords();
    }

    getFullName() {
        return `${this.fn} ${this.ln}`;
    }

    // userRegister() {
    //     if(this.isValid()){
    //         console.log(`User registered successfully: ${this.getFullName()}`);
    //     } else {
    //         console.log('Registration failed! Please check the entered data.');
    //     }
    // }
}

let brijesh = new Regiser("brijesh", "Gondaliya", "brijesh@gmail.com", "8980145007", "Test@123", "Test@123");

// brijesh.userRegister();

Regiser.prototype.userRegister = function(){
    if(this.isValid()){
        console.log(`User registered successfully: ${this.getFullName()}`);
    } else {
        console.log('Registration failed! Please check the entered data.');
    }
}

brijesh.userRegister();

// JS Prototype:

