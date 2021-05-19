//88db32c93b4b4f8bb526e75aca024c75
//https://v2.jokeapi.dev/joke/Programming?blacklistFlags=religious,political,racist,sexist,explicit


const button = document.getElementById('button')
const audioElement = document.getElementById('audio')


function test(joke) {
    VoiceRSS.speech({
        key: '88db32c93b4b4f8bb526e75aca024c75',
        src: joke,
        hl: 'en-us',
        r: 0,
        c: 'mp3',
        f: '44khz_16bit_stereo',
        ssml: false
    });
}

function ToggleButton() {
    button.disabled = !button.disabled
}

async function getJokes() {
    let joke = ''
    const apiUrl = 'https://v2.jokeapi.dev/joke/Any?blacklistFlags=nsfw,religious,political,racist,sexist,explicit'
    
    try {
        const response = await fetch(apiUrl)
        const data = await response.json()
        if (data.setup) {
            joke = `${data.setup}...${data.delivery}`
            test(joke)
        }
        else {
            joke = data.joke;
            test(joke)
        }//disable
        ToggleButton()
    } catch (err) {
        console.log('fetch failed', err)
    }

}

button.addEventListener('click', getJokes)
audioElement.addEventListener('ended', toggleButton)