function changeImage(imageSrc) {
    const mainImage = document.getElementById('current-image');
    const thumbnails = document.querySelectorAll('.thumbnail');

    mainImage.style.opacity = '0.4'; // Slide out
    setTimeout(() => {
        mainImage.src = imageSrc;
        mainImage.style.opacity = '1'; // Slide in
    }, 500);

    thumbnails.forEach(thumbnail => {
        thumbnail.classList.remove('selected');
        if (thumbnail.src === imageSrc) {
            thumbnail.classList.add('selected');
        }
    });
}

// Initialize the first thumbnail as selected
document.querySelector('.thumbnail').classList.add('selected');

// Handle file upload
document.getElementById('file-input').addEventListener('change', function(event) {
    const file = event.target.files[0];
    if (file) {
        const reader = new FileReader();
        reader.onload = function(e) {
            const newImageSrc = e.target.result;
            const thumbnailContainer = document.querySelector('.thumbnails');
            const plusIcon = document.getElementById('plus-icon');

            const newThumbnail = document.createElement('img');
            newThumbnail.src = newImageSrc;
            newThumbnail.alt = 'User Image';
            newThumbnail.className = 'thumbnail';
            newThumbnail.onclick = function() {
                changeImage(newImageSrc);
            };

            thumbnailContainer.insertBefore(newThumbnail, plusIcon);
            plusIcon.style.display = 'none';
            changeImage(newImageSrc);
        };
        reader.readAsDataURL(file);
    }
});
