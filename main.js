import OpenAI, { OpenAIError } from "openai";
import fs from 'fs';
const openai = new OpenAI({ apiKey: secret });
function loadDataFromFile(filePath){
    try{
        return fs.readFileSync(filePath, 'utf8');
    } catch (error){
        console.log(error)
    }
}

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
