/* 
Variables are containers for storing data values in a programming language. They allow you to assign a specific value to a name, which you can then use later in your code.

var, let, and const Keywords

JavaScript provides three keywords to declare variables: var, let, and const.

1] var
Scope: Function scope or global scope.   
Redeclaration: Can be redeclared within the same scope.   
Reassignment: Can be reassigned to a different value.1

var x = 10;
var x = 20; // Redeclaration allowed

2] let
Scope: Block scope (within curly braces).   
Redeclaration: Cannot be redeclared within the same scope.   
Reassignment: Can be reassigned to a different value.   

let y = 30;
let y = 40; // Redeclaration not allowed

3] const
Scope: Block scope (within curly braces).   
Redeclaration: Cannot be redeclared within the same scope.   
Reassignment: Cannot be reassigned to a different value.   

const z = 50;
30 = z; // Reassignment not allowed


Feature	        var	                let	        const
Scope	        Function or global	Block	    Block
Redeclaration	Allowed	            Not allowed	Not allowed
Reassignment	Allowed	            Allowed	    Not allowed
*/