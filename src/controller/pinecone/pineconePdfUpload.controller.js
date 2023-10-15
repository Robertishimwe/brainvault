const path = require('path');
// const { extractTextFromPDF } = require('@brainvault/brainvault-pdfextractor')
const { extractTextFromPDF } = require('../../services/pdfExtractor')
// const { uploadVector } = require('../../services/uploadToPinecone.service')
const { uploadVector } = require('../../services/pineconeServices/uploadToPinecone.service')


const publicDirectory = path.join(__dirname, '..', 'files');

const pdfPath = `${publicDirectory}/ALM_Octane_Installation_Guide_for_Windows.pdf`;

let newDataToUpload;


class uploadPDFControllers {
  static uploadVectorToPinecone = async (req, res) => {
    await extractTextFromPDF(pdfPath)
      .then(async(text) => {
        newDataToUpload = await uploadVector(text);
        res.status(200).send({newDataToUpload})
      })
      .catch((error) => {
        console.log(error);
      });

  }
}

module.exports = { uploadPDFControllers  };
