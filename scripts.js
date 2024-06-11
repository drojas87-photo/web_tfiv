const flagsElement = document.getElementById("flags");

const textsToChange = document.querySelectorAll('[data-section]')

const changeLanguage = async language => {
    
    const requestJson = await fetch (`translations/${language}.json`)
    const texts = await requestJson.json()

    for (const textToChange of textsToChange) {
        const section = textToChange.dataset.section;
        const value = textToChange.dataset.value;

        textToChange.innerHTML = texts[section][value];
    }
}

flagsElement.addEventListener("click" , (e) => {
    console.log(e.target.parentElement.dataset.language);
    changeLanguage(e.target.parentElement.dataset.language)
});