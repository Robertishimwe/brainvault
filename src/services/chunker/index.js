// // edit splitTex function to make it have overlap of 20 character

// // const { Configuration, OpenAIApi } = require('openai')


// // const configuration = new Configuration({
// //   apiKey: process.env.OPENAI_API_KEY,
// // })

// // const openai = new OpenAIApi(configuration)


// import OpenAI from 'openai';
// require('dotenv').config()

// const openai = new OpenAI({
//   apiKey: "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"// This is also the default, can be omitted
// });
// function splitText(text, chunkSize) {
//   const textChunks = [];
//   const textLength = text.length;
//   const overlap = 20;
//   let start = 0;

//   // Loop through the text, creating chunks of size chunkSize with overlap
//   while (start < textLength) {
//     const end = start + chunkSize;
//     const chunk = text.slice(start, end);
//     textChunks.push(chunk);
//     start = end - overlap;
//   }

//   return textChunks;
// }


// // function splitText(text, chunkSize) {
// //     const textChunks = [];
// //     const textLength = text.length;
// //     let start = 0;
  
// //     // Loop through the text, creating chunks of size chunkSize
// //     while (start < textLength) {
// //       const end = start + chunkSize;
// //       const chunk = text.slice(start, end);
// //       textChunks.push(chunk);
// //       start = end;
// //     }
// //     // console.log(textChunks)
  
// //     return textChunks;
// //   }
  
//   async function createEmbeddings(textChunks, model = "text-embedding-ada-002") {
//     const embeddings = [];
  
//     try {
//       // Prepare chunks by replacing new lines with spaces
//       const preparedChunks = textChunks.map(chunk => chunk.replace(/\n/g, " "));
  
//       // Use an API to create embeddings for each chunk

      
//       // const response = await openai.embedding.create({
//       //   input: preparedChunks,
//       //   model: model,
//       // });
//       const response = await openai.embeddings.create({
//         input: preparedChunks,
//         model: "text-embedding-ada-002"
//       })
      


//       if (response && response.data) {
//         for (const data of response.data.data) {
//           embeddings.push(data.embedding);
//         }
//       }
//       // console.log(embeddings)
//       return embeddings;
//     } catch (e) {
//       console.log(`Error creating embeddings: ${e}`);
//       return null;
//     }
//   }
  
//   module.exports  =  {splitText, createEmbeddings}

// import OpenAI from 'openai';
// require('dotenv').config();

// const openai = new OpenAI({
//   apiKey: "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" // This is also the default, can be omitted
// });

// function splitText(text, chunkSize) {
//   const textChunks = [];
//   const textLength = text.length;
//   const overlap = 20;
//   let start = 0;

//   while (start < textLength) {
//     const chunk = text.slice(start, start + chunkSize);
//     textChunks.push(chunk);
//     start += chunkSize - overlap;
//   }

//   return textChunks;
// }

// async function createEmbeddings(textChunks, model = "text-embedding-ada-002") {
//   const embeddings = [];

//   try {
//     const preparedChunks = textChunks.map(chunk => chunk.replace(/\n/g, " "));

//     const response = await openai.embeddings.create({
//       input: preparedChunks,
//       model: model,
//     });

//     if (response && response.data) {
//       for (const data of response.data.data) {
//         embeddings.push(data.embedding);
//       }
//     }

//     return embeddings;
//   } catch (e) {
//     console.log(`Error creating embeddings: ${e}`);
//     return null;
//   }
// }

// module.exports = { splitText, createEmbeddings };

const OpenAI = require('openai');
require('dotenv').config();

const openai = new OpenAI({
  apiKey: process.env.OPENAI_API_KEY // This is also the default, can be omitted
});

function splitText(text, chunkSize) {
  const textChunks = [];
  const textLength = text.length;
  const overlap = 20;
  let start = 0;

  while (start < textLength) {
    const chunk = text.slice(start, start + chunkSize);
    textChunks.push(chunk);
    start += chunkSize - overlap;
  }

  return textChunks;
}

async function createEmbeddings(textChunks, model = "text-embedding-ada-002") {
  const embeddings = [];

  try {
    const preparedChunks = textChunks.map(chunk => chunk.replace(/\n/g, " "));

    const response = await openai.embeddings.create({
      input: preparedChunks,
      model: model,
    });


    if (response && response.data) {
      
      for (const d of response.data) {
        embeddings.push(d.embedding);
      }
    }
   console.log(embeddings)
    return embeddings;
  } catch (e) {
    console.log(`Error creating embeddings: ${e}`);
    return null;
  }
}

module.exports = { splitText, createEmbeddings };

