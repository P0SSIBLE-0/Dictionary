// let url = config.dict_api;

let word = document.querySelector("#word");

let searchBtn = document.querySelector("#search-btn");
let content = document.querySelector(".content");
const options = {
    method: 'GET',
    headers: {
        // 'X-RapidAPI-Key': '5170787d60mshf2cea08429a827ap17fc18jsnae3773a2c813',
        // 'X-RapidAPI-Host': 'mashape-community-urban-dictionary.p.rapidapi.com'
    }
};
searchBtn.addEventListener('click', () => {
    let url = `https://api.dictionaryapi.dev/api/v2/entries/en/${word.value}`;
    fetch(url)
        .then(response => response.json())
        .then(response => {
            // console.log(response);
            let example = response[0].meanings[0].definitions[0].example;
            // console.log(response[0].meanings[0].definitions[0].definition);
            let htmlstr = `<h2>${capitalizeFirstLetter(response[0].word)}</h2><br>`;
            htmlstr += `<p> here are the Meanings </p><br>
        <p> <b>DEFINITION</b>: ${response[0].meanings[0].definitions[0].definition}</p><br>
        <p> <b>EXAMPLE</b>:${example}</p><br>
        <p><b>SYNONYMS:</b></p>`
            for (let i = 0; i < response[0].meanings[0].synonyms.length; i++) {
                htmlstr += `<li>${response[0].meanings[0].synonyms[i]}</li>`

            }
            content.innerHTML = htmlstr;

        })
        .catch(err => console.error(err));

});
function capitalizeFirstLetter(string) {
    return string.charAt(0).toUpperCase() + string.slice(1);
}