/* 
Polymorphism via Interfaces (Common Methods)

JavaScript doesn’t have formal interfaces like Java or C#, but you can achieve polymorphism by ensuring different classes share common methods. This allows you to treat objects of different types similarly, as long as they implement the same method.

*/

class Printer {
    print(document) {
        console.log("Printing document: " + document);
    }
}

class PDFPrinter extends Printer {
    print(document) {
        console.log("Printing PDF document: " + document);
    }
}

class WordPrinter extends Printer {
    print(document) {
        console.log("Printing Word document: " + document);
    }
}

function printDocument(printer, document) {
    printer.print(document);
}

let pdfPrinter = new PDFPrinter();
let wordPrinter = new WordPrinter();

printDocument(pdfPrinter, "file.pdf");  
printDocument(wordPrinter, "file.doc");
