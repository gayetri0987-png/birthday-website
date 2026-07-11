// =========================================
// HAPPY BIRTHDAY WEBSITE
// script.js
// =========================================

// Friend's Name
const friendName = "Happy Birthday, Bitch ❤️";

// =========================================
// Typing Effect
// =========================================

const typing = document.getElementById("typing");

if (typing) {
    let index = 0;

    function typeWriter() {
        if (index < friendName.length) {
            typing.textContent += friendName.charAt(index);
            index++;
            setTimeout(typeWriter, 120);
        }
    }

    typeWriter();
}

// =========================================
// Loader
// =========================================

window.addEventListener("load", () => {

    const loader = document.getElementById("loader");

    setTimeout(() => {

        if (loader) {

            loader.style.transition = "opacity 1s";

            loader.style.opacity = "0";

            setTimeout(() => {
                loader.style.display = "none";
            }, 1000);

        }

    }, 2500);

});

// =========================================
// Background Music
// =========================================

const music = document.getElementById("birthdayMusic");

document.body.addEventListener("click", () => {

    if (music) {

        music.play().catch(() => {
            // Ignore autoplay errors
        });

    }

}, { once: true });

// =========================================
// Surprise Button
// =========================================

const surpriseBtn = document.getElementById("surpriseBtn");

if (surpriseBtn) {

    surpriseBtn.addEventListener("click", () => {

        const messageSection = document.getElementById("message");

        if (messageSection) {

            messageSection.scrollIntoView({
                behavior: "smooth"
            });

        }

    });

}

// =========================================
// Gift Box
// =========================================

const giftBox = document.getElementById("giftBox");
const giftMessage = document.getElementById("giftMessage");
const giftReveal = document.getElementById("giftReveal");

if (giftBox) {

    giftBox.addEventListener("click", () => {

        giftBox.classList.add("opened");

        giftBox.style.transform = "scale(1.15)";

        if (giftMessage) {

            giftMessage.innerHTML =
                "🎉 Happy Birthday Ruhi ❤️<br>You deserve all the happiness in the world!";

        }

        if (giftReveal) {

            giftReveal.classList.add("show");

        }

        launchFireworks();

    });

}

// =========================================
// Cake
// =========================================

const cakeBtn = document.getElementById("cakeBtn");

if (cakeBtn) {

    cakeBtn.addEventListener("click", () => {

        const cake = document.querySelector(".cakeEmoji");

        if (cake) {

            cake.innerHTML = "🎂✨";

        }

        launchFireworks();

        alert("🎉 Happy Birthday Ruhi! ❤️");

    });

}

// =========================================
// Love Letter
// =========================================

const envelope = document.getElementById("envelope");

if (envelope) {

    envelope.addEventListener("click", () => {

        envelope.classList.toggle("open");

    });

}

// =========================================
// Scroll Animation
// =========================================

const sections = document.querySelectorAll("section");

const observer = new IntersectionObserver((entries) => {

    entries.forEach(entry => {

        if (entry.isIntersecting) {

            entry.target.style.opacity = "1";

            entry.target.style.transform = "translateY(0)";

        }

    });

}, {

    threshold: 0.2

});

sections.forEach(section => {

    section.style.opacity = "0";

    section.style.transform = "translateY(60px)";
    section.style.transition = "all .8s ease";

    observer.observe(section);

});

// =========================================
// Floating Hearts
// =========================================

document.addEventListener("click", (e) => {

    const heart = document.createElement("div");

    heart.innerHTML = "❤️";

    heart.style.position = "fixed";
    heart.style.left = e.clientX + "px";
    heart.style.top = e.clientY + "px";
    heart.style.fontSize = "25px";
    heart.style.pointerEvents = "none";
    heart.style.zIndex = "9999";
    heart.style.animation = "heartFly 2s linear forwards";

    document.body.appendChild(heart);

    setTimeout(() => {

        heart.remove();

    }, 2000);

});

// =========================================
// Heart Animation
// =========================================

const style = document.createElement("style");

style.innerHTML = `

@keyframes heartFly{

0%{

transform:translateY(0) scale(1);
opacity:1;

}

100%{

transform:translateY(-180px) scale(2);
opacity:0;

}

}

`;

document.head.appendChild(style);

// =========================================
// Photo Lightbox
// =========================================

const photos = document.querySelectorAll(".photo-card img");
const lightbox = document.getElementById("lightbox");
const lightboxImg = document.getElementById("lightboxImg");
const close = document.getElementById("close");

photos.forEach(photo => {

    photo.addEventListener("click", () => {

        if (lightbox && lightboxImg) {

            lightbox.style.display = "flex";

            lightboxImg.src = photo.src;

        }

    });

});

if (close) {

    close.onclick = () => {

        lightbox.style.display = "none";

    };

}

if (lightbox) {

    lightbox.onclick = (e) => {

        if (e.target === lightbox) {

            lightbox.style.display = "none";

        }

    };

}

// =========================================
// Fireworks
// =========================================

function launchFireworks() {

    if (typeof confetti === "undefined") return;

    const duration = 5000;

    const end = Date.now() + duration;

    (function frame() {

        confetti({

            particleCount: 6,
            angle: 60,
            spread: 70,
            origin: { x: 0 }

        });

        confetti({

            particleCount: 6,
            angle: 120,
            spread: 70,
            origin: { x: 1 }

        });

        if (Date.now() < end) {

            requestAnimationFrame(frame);

        }

    })();

}