require('dotenv').config()
// const { Configuration, OpenAIApi } = require('openai')


// const configuration = new Configuration({
//   apiKey: process.env.OPENAI_API_KEY,
// })

// const openai = new OpenAIApi(configuration)
import OpenAI from 'openai';

const openai = new OpenAI({
  apiKey: process.env.OPENAI_API_KEY // This is also the default, can be omitted
});

const createChatCompletion = async (prompt, answer) => {
    console.log(prompt,answer)
  const response = await openai.chat.completions.create({
    model: "gpt-3.5-turbo",
    messages: [
      {role: "user", content: `answer this. ${answer}. basing on information provided, ${prompt} `},
      // {role: "system", content: "your name is ishimwe"}
    ], 
  })

  return response.choices[0].message
}

module.exports = { createChatCompletion }
