// Write a JavaScript program to get the current date. Expected Output : mm-dd-yyyy, mm/dd/yyyy or dd-mm-yyyy, dd/mm/yyyy?

function getCurrentDate() {
    let today = new Date();
    
    // Get day, month, and year
    let day = String(today.getDate()).padStart(2, '0'); 
    let month = String(today.getMonth() + 1).padStart(2, '0'); 
    let year = today.getFullYear();
    
    let format1 = `${month}-${day}-${year}`; 
    let format2 = `${month}/${day}/${year}`;
    let format3 = `${day}-${month}-${year}`; 
    let format4 = `${day}/${month}/${year}`; 
    
    return { format1, format2, format3, format4 };
}

let currentDate = getCurrentDate();
console.log("mm-dd-yyyy:", currentDate.format1);
console.log("mm/dd/yyyy:", currentDate.format2);
console.log("dd-mm-yyyy:", currentDate.format3);
console.log("dd/mm/yyyy:", currentDate.format4);
