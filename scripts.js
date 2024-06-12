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


const images = document.querySelectorAll('.hero-image');
let currentIndex = 0;

images[currentIndex].classList.add('active');

    function showNextImage() {
        images[currentIndex].classList.remove('active');
        currentIndex = (currentIndex + 1) % images.length;
        images[currentIndex].classList.add('active');
    }

    setInterval(showNextImage, 10000); // 

flagsElement.addEventListener("click" , (e) => {
    console.log(e.target.parentElement.dataset.language);
    changeLanguage(e.target.parentElement.dataset.language)
});


