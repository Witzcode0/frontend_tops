// Write a JavaScript exercise to get the extension of a filename.?

let file_name = "data.js";

if (file_name.includes(".")) {
  let ext = file_name.split(".").pop();
  console.log(ext);
} else {
  console.log("No extension found.");
}
