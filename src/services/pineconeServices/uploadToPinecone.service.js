// const { v4: uuidv4 } = require('uuid');

// const { splitText, createEmbeddings } = require('../chunker/index');
// const { uploadToPinecone } = require('../pineconeServices/pinecone.service');



// let finalVector;

// const uploadVector = async (newDataToUpload) => {
//   const chunks = splitText(`${newDataToUpload}`, 350);
//   console.log(chunks)
//   const vectors = await createEmbeddings(chunks);

//   finalVector = chunks.map((chunk, i) => {
//     return {
//       id: uuidv4(),
//       metadata: {
//         text: chunks[i],
//       },
//       values: vectors[i],
//     };
//   });

//   while (finalVector.length) {
//     let batchedVector = finalVector.splice(0, 250);
//     const doneUploeading = await uploadToPinecone(batchedVector);
//     if (doneUploeading)
//       return { message: "uploaded successful", doneUploeading };
//   }
// };

// module.exports = { uploadVector };

const { v4: uuidv4 } = require('uuid');
const { splitText, createEmbeddings } = require('../chunker/index');
const { uploadToPinecone } = require('../pineconeServices/pinecone.service');

let finalVector;

const uploadVector = async (newDataToUpload) => {
  try {
    const chunks = splitText(`${newDataToUpload}`, 450);
    console.log('Chunks:', chunks);

    if (!Array.isArray(chunks)) {
      throw new Error('Chunks is not a valid array');
    }

    const vectors = await createEmbeddings(chunks);
    console.log('Vectors:', vectors);

    if (!Array.isArray(vectors)) {
      throw new Error('Vectors is not a valid array');
    }

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
      let batchedVector = finalVector.splice(0, 350);
      const doneUploading = await uploadToPinecone(batchedVector);

      if (doneUploading) {
        console.log('Uploaded successful');
        return { message: 'Uploaded successful', doneUploading };
      }
    }

    console.log('No vectors to upload.');
    return { message: 'No vectors to upload.' };
  } catch (error) {
    console.error('An error occurred:', error);
    return { message: 'Error uploading data', error: error.message };
  }
};

module.exports = { uploadVector };
