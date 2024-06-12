document.addEventListener("DOMContentLoaded", function() {
    const mapButtons = document.querySelectorAll('.map-button');
    const mapPopup = document.getElementById('map-popup');
    const mapPopupImage = document.getElementById('map-popup-image');
    const closePopup = document.querySelector('.close');

    mapButtons.forEach(button => {
        button.addEventListener('click', function() {
            const imageUrl = this.getAttribute('data-image');
            mapPopupImage.src = imageUrl;
            mapPopup.style.display = 'block';
        });
    });

    closePopup.addEventListener('click', function() {
        mapPopup.style.display = 'none';
    });

    window.addEventListener('click', function(event) {
        if (event.target === mapPopup) {
            mapPopup.style.display = 'none';
        }
    });
});
