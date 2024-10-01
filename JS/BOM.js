
// JavaScript BOM (Browser Object Model) provides access to the browser's components like the window, history, location, navigator, and screen objects. Unlike the DOM, which deals with the document content, the BOM interacts with the browser environment itself.

// Key BOM Objects:
// - Window Object
// - History Object
// - Navigator Object
// - Screen Object


// 1. Window Object
// The window object represents the browser window and is the global object for JavaScript. All global JavaScript objects, functions, and variables automatically become members of the window object.

// Common Properties/Methods:
// - window.alert() – Displays an alert box.
// - window.confirm() – Displays a dialog with an OK and Cancel button.
// - window.prompt() – Displays a dialog with a text input.
// - window.location – Represents the current URL.
// - window.open() – Opens a new browser window.


// 2. History Object
// The history object provides access to the browser's session history (i.e., the pages visited in the current tab or window).

// Common Properties/Methods:
// - history.back() – Loads the previous URL in the history list (equivalent to clicking the back button).
// - history.forward() – Loads the next URL in the history list (equivalent to clicking the forward button).
// - history.go(n) – Loads a specific page in the session history, where n can be positive or negative.
// - history.length – Returns the number of entries in the history list.


// 3. Navigator Object
// The navigator object contains information about the browser and the user's environment.

// Common Properties:
// - navigator.userAgent – Returns the user agent string for the browser.
// - navigator.platform – Returns the platform on which the browser is running.
// - navigator.language – Returns the language of the browser.
// - navigator.onLine – Returns a boolean indicating if the browser is online.

// 4. Screen Object
// The screen object contains information about the user's display screen, such as its size, width, and height.

// Common Properties:
// - screen.width – Returns the width of the screen in pixels.
// - screen.height – Returns the height of the screen in pixels.
// - screen.availWidth – Returns the width of the screen, excluding interface features like taskbars.
// - screen.availHeight – Returns the height of the screen, excluding interface features.