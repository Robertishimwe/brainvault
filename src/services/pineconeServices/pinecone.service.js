const { PineconeClient } = require("@pinecone-database/pinecone");

const uploadToPinecone = async (finalVector) => {
  const pinecone = new PineconeClient();
  await pinecone.init({
    environment: "us-east4-gcp",
    apiKey: process.env.PINCONE_API_KEY,
  });

  try {
    const index = pinecone.Index("brainvault");
    const upsertRequest = {
      vectors: finalVector,
      namespace: "brainvault",
    };
    const upsertResponse = await index.upsert({ upsertRequest });
    return upsertResponse;
  } catch (error) {
    console.log(error);
  }
};

const queryFromPinecone = async (queryVector) => {
  const pinecone = new PineconeClient();
  await pinecone.init({
    environment: "us-east4-gcp",
    apiKey: process.env.PINCONE_API_KEY,
  });
  try {
    const index = pinecone.Index("brainvault");
    const queryRequest = {
      vector: queryVector,
      topK: 4,
      includeValues: false,
      includeMetadata: true,
      namespace: "brainvault",
    };
    const queryResponse = await index.query({ queryRequest });
    return queryResponse;
  } catch (error) {
    console.log(error);
  }
};
module.exports = { uploadToPinecone, queryFromPinecone };
