function afiseazaUrare() {
    var nume = document.getElementById("numeInput").value;
    var mesaj = "La mulți ani, " + nume + "!";
    document.getElementById("mesajUrare").textContent = mesaj.toUpperCase();
}

function handleKeyPress(event) {
    if (event.key === 'Enter') {
        afiseazaUrare();
    }
}

document.getElementById('numeInput').addEventListener('keypress', handleKeyPress);

document.addEventListener("DOMContentLoaded", function () {
    const container = document.getElementById("firework-container");

    function createFirework() {
        const firework = document.createElement("div");
        firework.className = "firework";
        container.appendChild(firework);

        const posX = Math.random() * window.innerWidth;
        const posY = Math.random() * window.innerHeight;

        firework.style.left = `${posX}px`;
        firework.style.top = `${posY}px`;

        setTimeout(() => {
            firework.remove();
        }, 1000);
    }

    function launchFireworks() {
        for (let i = 0; i < 10; i++) {
            createFirework();
        }

        setInterval(createFirework, 400);
    }

    launchFireworks();

});
