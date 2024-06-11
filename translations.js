const translations = {
    es: {
        heroTitle: "SESION DE FOTOS DIVERTIDA EN BUENOS AIRES LLEVATE TU RECUERDO",
        heroSubtitle: "Agenda tu sesion de fotografía profesional mientras paseas por lugares emblematicos de la ciudad.",
        galleryButton: "VER GALERIA",
        agendaButton: "AGENDA"
    },
    en: {
        heroTitle: "FUN PHOTO SESSION IN BUENOS AIRES TAKE YOUR MEMORY",
        heroSubtitle: "Schedule your professional photo session while touring iconic places in the city.",
        galleryButton: "VIEW GALLERY",
        agendaButton: "SCHEDULE"
    }
};

function changeLanguage(lang) {
    document.getElementById('hero-title').textContent = translations[lang].heroTitle;
    document.getElementById('hero-subtitle').textContent = translations[lang].heroSubtitle;
    document.getElementById('gallery-button').textContent = translations[lang].galleryButton;
    document.getElementById('agenda-button').textContent = translations[lang].agendaButton;
}

// Set default language to Spanish
changeLanguage('es');
