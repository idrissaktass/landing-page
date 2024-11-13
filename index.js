// JavaScript to toggle the mobile menu and change the background and texts
const hamburger = document.querySelector('.hamburger');
const navbarAlt = document.querySelector('.navbar-alt');

hamburger.addEventListener('click', () => {
    hamburger.classList.toggle('active');
    navbarAlt.classList.toggle('active');
});
window.onload = function() {
    const videos = document.querySelectorAll('.video-background video');
    const textElement = document.getElementById('video-text');
    const buttonElement = document.getElementById('see-more-button');
    
    const randomIndex = Math.floor(Math.random() * videos.length);

    videos.forEach((video, index) => {
        if (index === randomIndex) {
            video.style.display = "block";
            
            if (video.id === "video1") {
                textElement.innerHTML = "<h2>The photographer shows us a world that needs to be discovered</h2>";
                buttonElement.style.display = "block";
            } else if (video.id === "video2") {
                textElement.innerHTML = "<h2>The famous professor explains life in the office</h2>";
                buttonElement.style.display = "block";
            } else if (video.id === "video3") {
                textElement.innerHTML = "<h2>Dive into the animal world</h2>";
                buttonElement.style.display = "block";
            }
        } else {
            video.style.display = "none";
        }
    });
};