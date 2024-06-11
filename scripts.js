const flagsElement = document.getElementById("flags")


const changeLanguage = async language => {
    const requestJson = await fetch (`./translationes/${language}.json`)
    const texts = await requestJson.json()
}

flagsElement.addEventListener("click" , (e) => {
    changeLanguage(e.target.parentElement.dataset.language)
});