import OpenAI, { OpenAIError } from "openai";
const openai = new OpenAI({ apiKey: process.env.API_KEY });
try{
const response = await openai.chat.completions.create({
    model: 'gpt-4o-mini',
    messages: [
        { role: 'system', content: 'You are normal chatGPT bot.'},
        { role: 'user', content: 'Say this is a test.' }
    ]
})
console.log(response.choices[0].message.content);
} catch (error) {
    if (error instanceof OpenAIError){
        console.log("Error status: ", error.status);
        console.log("Error name: ", error.name);
        console.log("Error headers: ", error.headers);
        console.log("Error message: ", error.message);
    }else{
        console.error("Error: ", error)
    }
}
