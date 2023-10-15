const { createEmbeddings } = require('../../services/chunker')
const { queryFromPinecone } = require('../../services/pineconeServices/pinecone.service')
const { createChatCompletion } = require('../../services/pineconeServices/openai.service')



class retrieveControllers {
  static retrieveVector = async (req, res) => {
    const { query } = req.body;
    const embeddedData = await createEmbeddings([query]);
    const relatedData = await queryFromPinecone(embeddedData[0]);
    
    if (relatedData){
        if(relatedData.matches.length >= 2){
            const answerFound = `${relatedData.matches[0]?.metadata?.text}, ${relatedData.matches[1]?.metadata?.text}`
            const finalAnswer = await createChatCompletion(query, answerFound)
        return res
        .status(200)
        .send({ message: "related data", data: finalAnswer, findings: answerFound })

        }


    };

  };
}

module.exports = { retrieveControllers };















// const retrive=async()=>{

//     const rawResult = await createEmbeddings([query])
//     const relatedData = await queryFromPinecone(rawResult[0])
//     console.log("related", relatedData.matches)


// }
