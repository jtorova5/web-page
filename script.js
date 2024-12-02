document.addEventListener('DOMContentLoaded', () => {
    const champions = [
        "Ahri", "Ashe", "Garen", "Lux", "Darius", "Yasuo", "Jinx", "Thresh", "Lee Sin", "Teemo",
        "Zed", "Vayne", "Caitlyn", "Ezreal", "Katarina", "Master Yi", "Riven", "Jhin", "Ekko", "Akali"
    ];

    const randomChampionBtn = document.getElementById('randomChampionBtn');
    const championCard = document.getElementById('championCard');
    const championImage = document.getElementById('championImage');
    const championName = document.getElementById('championName');
    const snowCanvas = document.getElementById('snowCanvas');
    const ctx = snowCanvas.getContext('2d');

    // Set up snow canvas
    function resizeCanvas() {
        snowCanvas.width = window.innerWidth;
        snowCanvas.height = window.innerHeight;
    }
    resizeCanvas();

    // Snow particles
    const particles = [];
    const particleCount = 200;

    function createSnowParticles() {
        particles.length = 0; // Clear existing particles
        for (let i = 0; i < particleCount; i++) {
            particles.push({
                x: Math.random() * snowCanvas.width,
                y: Math.random() * snowCanvas.height,
                radius: Math.random() * 4 + 1,
                speed: Math.random() * 3 + 1
            });
        }
    }
    createSnowParticles();

    function drawSnow() {
        ctx.clearRect(0, 0, snowCanvas.width, snowCanvas.height);
        ctx.fillStyle = "rgba(255, 255, 255, 0.8)";
        ctx.beginPath();
        for (let i = 0; i < particleCount; i++) {
            const p = particles[i];
            ctx.moveTo(p.x, p.y);
            ctx.arc(p.x, p.y, p.radius, 0, Math.PI * 2, true);
        }
        ctx.fill();
        moveSnow();
    }

    function moveSnow() {
        for (let i = 0; i < particleCount; i++) {
            const p = particles[i];
            p.y += p.speed;
            if (p.y > snowCanvas.height) {
                p.y = -10;
                p.x = Math.random() * snowCanvas.width;
            }
        }
    }

    function animateSnow() {
        drawSnow();
        requestAnimationFrame(animateSnow);
    }

    // Start snow animation
    animateSnow();

    // Champion selection
    randomChampionBtn.addEventListener('click', () => {
        const randomChampion = champions[Math.floor(Math.random() * champions.length)];
        championImage.src = `https://ddragon.leagueoflegends.com/cdn/img/champion/splash/${randomChampion}_0.jpg`;
        championName.textContent = randomChampion;
        championCard.classList.remove('hidden');
    });

    // Resize handler
    window.addEventListener('resize', () => {
        resizeCanvas();
        createSnowParticles();
    });
});