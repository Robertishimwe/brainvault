const fs = require('fs');
const pdfjs = require('pdfjs-dist');

// Function to extract text from a PDF file
async function extractTextFromPDF(pdfPath) {
  // Load the PDF file
  const data = new Uint8Array(fs.readFileSync(pdfPath));

  // Load the PDF document using pdfjs
  const pdf = await pdfjs.getDocument(data).promise;

  // Create an empty string to store the extracted text
  let text = '';

  // Loop through each page in the PDF document
  for (let i = 1; i <= pdf.numPages; i++) {
    // Get the page object
    const page = await pdf.getPage(i);

    // Extract the text content from the page using pdfjs
    const content = await page.getTextContent();

    // Concatenate the extracted text to the overall string
    text += content.items.map(item => item.str).join('');
  }

  // Return the extracted text
  return text;
}

module.exports  =  { extractTextFromPDF }
// Example usage: extract text from a sample PDF file

// const pdfPath = '/path/to/sample.pdf';
// extractTextFromPDF(pdfPath).then(text => {
//   console.log(text);
// }).catch(error => {
//   console.error(error);
// });
