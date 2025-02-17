document.addEventListener('DOMContentLoaded', () => {
    // 🎶 Gestion des musiques
    const musicSection = document.querySelector('.music-section');
    const allAudios = document.querySelectorAll('audio');

    allAudios.forEach(audio => {
        audio.addEventListener('play', () => {
            const parent = audio.closest('.music-container');
            if (parent.querySelector('h3').innerText.includes('Tom')) {
                musicSection.classList.add('playing-tom');
                generateHearts(musicSection, '💚');
            } else {
                musicSection.classList.add('playing-angele');
                generateHearts(musicSection, '💙');
            }
        });

        audio.addEventListener('pause', () => {
            musicSection.classList.remove('playing-tom', 'playing-angele');
            removeHearts();
        });

        audio.addEventListener('ended', () => {
            musicSection.classList.remove('playing-tom', 'playing-angele');
            removeHearts();
        });
    });

    // 🪄 Fonction pour générer des cœurs animés
    function generateHearts(container, heartEmoji) {
        for (let i = 0; i < 15; i++) {
            const heart = document.createElement('div');
            heart.classList.add('heart');
            heart.textContent = heartEmoji;
            heart.style.left = `${Math.random() * 100}%`;
            heart.style.top = `${Math.random() * 100}%`;
            heart.style.fontSize = `${Math.random() * 1.5 + 1}em`;
            heart.style.animationDuration = `${Math.random() * 3 + 2}s`;
            container.appendChild(heart);

            setTimeout(() => heart.remove(), 5000);
        }
    }

    function removeHearts() {
        document.querySelectorAll('.heart').forEach(heart => heart.remove());
    }

    // 🎥 Gestion de la galerie
    const images = document.querySelectorAll('.gallery-grid img');
    const videos = document.querySelectorAll('.video-thumb');
    const lightbox = document.getElementById('lightbox');
    const lightboxImg = document.getElementById('lightbox-img');
    const lightboxVideo = document.getElementById('lightbox-video');

    images.forEach(img => {
        img.addEventListener('click', () => {
            lightboxImg.src = img.src;
            lightboxImg.style.display = 'block';
            lightboxVideo.style.display = 'none';
            lightbox.style.display = 'flex';
        });
    });

    videos.forEach(video => {
        video.addEventListener('click', () => {
            const videoSrc = video.getAttribute('data-video');
            lightboxVideo.src = videoSrc;
            lightboxVideo.style.display = 'block';
            lightboxImg.style.display = 'none';
            lightbox.style.display = 'flex';
            lightboxVideo.play();
        });
    });

    if (lightbox) {
        lightbox.addEventListener('click', (e) => {
            if (e.target.id === 'lightbox' || e.target.classList.contains('close-btn')) {
                lightbox.style.display = 'none';
                lightboxImg.src = '';
                lightboxVideo.pause();
                lightboxVideo.src = '';
            }
        });
    }

    // 🖼️ Gestion du carrousel d'images
    let currentSlide = 0;
    const carousel = document.querySelector('.carousel-images');
    const totalSlides = document.querySelectorAll('.carousel-image').length;

    function changeSlide(direction) {
        currentSlide = (currentSlide + direction + totalSlides) % totalSlides;
        const translateX = -currentSlide * 100;
        carousel.style.transform = `translateX(${translateX}%)`;
    }

    document.querySelector('.prev').addEventListener('click', () => changeSlide(-1));
    document.querySelector('.next').addEventListener('click', () => changeSlide(1));
});
