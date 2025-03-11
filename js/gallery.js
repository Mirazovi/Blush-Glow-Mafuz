let currentImageIndex = 0;
const images = document.querySelectorAll('.img'); // Get all images

function openModal(index) {
    currentImageIndex = index;
    document.getElementById('imageModal').style.display = "flex";
    document.getElementById('modalImage').src = images[currentImageIndex].src;
}

function closeModal() {
    document.getElementById('imageModal').style.display = "none";
}

function changeImage(direction) {
    currentImageIndex += direction;
    
    // Loop through images if at the beginning or end
    if (currentImageIndex < 0) {
        currentImageIndex = images.length - 1;
    } else if (currentImageIndex >= images.length) {
        currentImageIndex = 0;
    }

    document.getElementById('modalImage').src = images[currentImageIndex].src;
}

// Close modal when clicking outside the image
document.getElementById('imageModal').addEventListener('click', function(event) {
    if (event.target === this) {
        closeModal();
    }
});
