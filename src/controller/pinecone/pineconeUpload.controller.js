const { v4: uuidv4 } = require('uuid');
const path = require('path');
// const { splitText, createEmbeddings } = require('@brainvault/brainvault-chuncker')
const { splitText, createEmbeddings } = require('../../services/chunker')
const { extractTextFromPDF } = require('../../services/pdfExtractor')
const { uploadToPinecone } = require('../../services/pineconeServices/pinecone.service');


const publicDirectory = path.join(__dirname, '..', 'files');

const pdfPath = `${publicDirectory}/Install_Windows.pdf`;

let newDataToUpload;

let finalVector;

class uploadControllers {
  static uploadVector = async (req, res) => {
    await extractTextFromPDF(pdfPath)
      .then((text) => {
        newDataToUpload = text;
      })
      .catch((error) => {
        console.log(error);
      });

    const chunks = splitText(`${newDataToUpload}`, 350);
    const vectors = await createEmbeddings(chunks);
    console.log(vectors)

    finalVector = chunks.map((chunk, i) => {
      return {
        id: uuidv4(),
        metadata: {
          text: chunks[i],
        },
        values: vectors[i],
      };
    });

    while (finalVector.length) {
      let batchedVector = finalVector.splice(0, 250);
      const doneUploeading = await uploadToPinecone(batchedVector);
      if (doneUploeading)
        return res
          .status(200)
          .send({ message: "uploaded successful", doneUploeading });
    }
  };
}

module.exports = { uploadControllers };
