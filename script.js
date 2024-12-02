const champions = [
    "Ahri", "Ashe", "Garen", "Lux", "Darius", "Yasuo", "Jinx", "Thresh", "Lee Sin", "Teemo",
    "Zed", "Vayne", "Caitlyn", "Ezreal", "Katarina", "Master Yi", "Riven", "Jhin", "Ekko", "Akali"
];

const backgrounds = [
    "https://images.contentstack.io/v3/assets/blt731acb42bb3d1659/blt1a1b36acd2f3b6a0/5e9b6b6b8691eb0907e1d0d0/01_Banner.jpg",
    "https://images.contentstack.io/v3/assets/blt731acb42bb3d1659/blt3d2d4b9d5c7ed1b3/5e9b6b6c1d2d0f7c6a8c8b9c/02_Banner.jpg",
    "https://images.contentstack.io/v3/assets/blt731acb42bb3d1659/blt9a3a7e7f0d4d4a4c/5e9b6b6c1d2d0f7c6a8c8b9e/03_Banner.jpg",
    "https://images.contentstack.io/v3/assets/blt731acb42bb3d1659/blt7f1f1b1b1b1b1b1b/5e9b6b6c1d2d0f7c6a8c8ba0/04_Banner.jpg"
];

document.addEventListener('DOMContentLoaded', () => {
    const randomChampionButton = document.getElementById('random-champion');
    const championNameDisplay = document.getElementById('champion-name');
    const backgroundElement = document.getElementById('background');

    function changeBackground() {
        const randomIndex = Math.floor(Math.random() * backgrounds.length);
        backgroundElement.style.backgroundImage = `url('${backgrounds[randomIndex]}')`;
    }

    function displayRandomChampion() {
        const randomIndex = Math.floor(Math.random() * champions.length);
        const randomChampion = champions[randomIndex];
        championNameDisplay.textContent = randomChampion;
    }

    randomChampionButton.addEventListener('click', displayRandomChampion);

    // Cambiar el fondo cada 10 segundos
    setInterval(changeBackground, 10000);

    // Iniciar con un fondo aleatorio
    changeBackground();
});