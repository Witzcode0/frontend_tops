/* 

JavaScript Document Object Model (DOM):

The DOM is a representation of an HTML document in memory. It provides a structured way to interact with HTML elements and their attributes.
Think of it as a tree-like structure where the Document object is the root, and elements like html, head, body, and others are its children.
You can access and manipulate elements, attributes, and content within the DOM using JavaScript code.
Document Object:

The Document object is the top-level object in the DOM hierarchy. It represents the entire HTML document.
It provides various methods and properties to access and manipulate elements within the document.

Methods for Accessing Elements:

getElementById(id):
Returns a single element based on its unique ID attribute.
Example: var element = document.getElementById("myElement");

getElementsByName(name):
Returns an array of elements that share the same name attribute.
Example: var elements = document.getElementsByName("inputField");

getElementsByTagName(tagName):
Returns an array of elements based on their tag name.
Example: var elements = document.getElementsByTagName("p");

innerHTML Property:

The innerHTML property of an element represents its content as HTML code.
You can use it to get or set the content of an element.
Getting content: var content = element.innerHTML;
Setting content: element.innerHTML = "New content";

<!DOCTYPE html>
<html>
<head>
    <title>DOM Example</title>
</head>
<body>
    <h1 id="myHeading">Hello, World!</h1>
    <p id="myParagraph">This is a paragraph.</p>
    <input type="text" name="myInput" id="myInput">
    <button id="myButton">Click me</button>

    <script>
        // Get elements by ID
        var heading = document.getElementById("myHeading");
        var paragraph = document.getElementById("myParagraph");
        var input = document.getElementById("myInput");
        var button = document.getElementById("myButton");

        // Get elements by name
        var inputs = document.getElementsByName("myInput");

        // Get elements by tag name
        var paragraphs = document.getElementsByTagName("p");

        // Access and modify innerHTML
        heading.innerHTML = "Modified Heading";
        paragraph.innerHTML = "This is the modified paragraph.";
        input.value = "Initial value";

        // Add an event listener to the button
        button.addEventListener("click", function() {
            alert("Button clicked!");
        });
    </script>
</body>
</html>

*/