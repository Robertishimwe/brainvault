const { v4: uuidv4 } = require('uuid');
const path = require('path');
// const { splitText, createEmbeddings } = require('@brainvault/brainvault-chuncker')
const { splitText, createEmbeddings } = require('../../services/chunker')
const { extractTextFromPDF } = require('../../services/pdfExtractor')
const { uploadToPinecone } = require('../../services/pineconeServices/pinecone.service');


// const publicDirectory = path.join(__dirname, '..', 'files');

// const pdfPath = `${publicDirectory}/ALM_Octane_Installation_Guide_for_Windows.pdf`;

let newDataToUpload;

let finalVector;

class uploadtxtControllers {
  static uploadVector = async (req, res) => {

    const chunks = splitText(`${req.body.newContent}`, 350);
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

module.exports = { uploadtxtControllers };
