const flagsElement = document.getElementById("flags");


const changeLanguage = async language => {
    
    const requestJson = await fetch (`translations/${language}.json`)
    const texts = await requestJson.json()
}

flagsElement.addEventListener("click" , (e) => {
    console.log(e.target.parentElement.dataset.language);
    changeLanguage(e.target.parentElement.dataset.language)
});