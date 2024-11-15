import OpenAI, { OpenAIError } from "openai";
import fs from 'fs';
import 'dotenv/config'

const openai = new OpenAI({ apiKey: process.env.API_KEY });

function loadDataFromFile(filePath){
    try{
        return fs.readFileSync(filePath, 'utf8');
    } catch (error){
        console.log("Loading data error: ", error)
        return;
    }
}

function saveResponseToFile(filePath, response){
    try{
        fs.writeFileSync(filePath, response, 'utf8')
    } catch (error){
        console.log("Saving to file error: ", error)
        return;
    }
}

const userContent = loadDataFromFile('./Zadanie dla JJunior AI Developera - tresc artykulu')

if(!userContent){
    console.log("No data to load.")
} else {
    try{
        const response = await openai.chat.completions.create({
        model: 'gpt-4o',
        messages: [
            { role: 'system', content: 
                `
                Na podstawie dostarczonego pliku tekstowego wygeneruj artykuł w postaci HTML.
                - Wygenerowany artykuł powienien być w tym samym języku co dostarczony plik tekstowy.
                - Nie używaj bloków kodu (backticków).
                - Użyj odpowiednich tagów HTML do struktyzacji treści.
                - W kodzie strony uwzględnij miejsce na grafiki (zdecyduj gdzie najlepiej je umieścić):
                    - oznacz je tagiem <img> z atrybutem src="image_placeholder.jpg",
                    - dodaj do każdego <img> atrybut alt, w którym umieścisz prompt za pomocą którego można wygenerować grafikę,
                    - do każdej grafiki umieść podpis pod samą grafiką używając tagu <figcaption>,
                    - obraz jak i podpis pod grafiką zawrzyj w znaczniku <figure>.
                - Nie generuj kodu CSS ani JavaScript.
                - Zwrócony kod ma zawierać jedynie zawartość <body> BEZ SAMEGO ZNACZNIKA <body>, tylko zawartość, która by się tam znalazła.
                - Nie dołączaj znaczników <html>, <head>.
                - Stopkę uwzględnij w znaczniku <footer>.
                - Całość uwzględnij w znaczniku <article>.
                `
            },
            { role: 'user', content: userContent }
        ]
        })
        saveResponseToFile('./artykul.html', response.choices[0].message.content)
        
    } catch (error) {
        if (error instanceof OpenAIError){
            console.log("Error status: ", error.status)
            console.log("Error name: ", error.name)
            console.log("Error headers: ", error.headers)
            console.log("Error message: ", error.message)
        } else {
            console.error("Unknown error: ", error)
        }
    }
}