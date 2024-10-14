document.addEventListener('DOMContentLoaded', () => {
    // Lógica de las pestañas
    const tabs = document.querySelectorAll('.tablink');
    const contents = document.querySelectorAll('.tabcontent');

    tabs.forEach(tab => {
        tab.addEventListener('click', () => {
            contents.forEach(content => content.style.display = 'none'); // Oculta todo el contenido
            document.getElementById(tab.dataset.tab).style.display = 'block'; // Muestra el contenido de la pestaña activa
        });
    });

    // Lógica del juego Slot Machine
    const spinButton = document.getElementById('spinButton');
    const resultMessage = document.getElementById('resultMessage');
    const reel1 = document.getElementById('reel1');
    const reel2 = document.getElementById('reel2');
    const reel3 = document.getElementById('reel3');

    const symbols = ['🍒', '🍋', '🍊', '🍉', '⭐', '🍇', '🔔']; // Símbolos de la máquina

    spinButton.addEventListener('click', () => {
        // Obtener los elementos de los carretes
        const reels = document.querySelectorAll(".reel");
        
        reels.forEach((reel) => {
            // Aplicar la animación de giro
            reel.style.animation = "spin 0.5s forwards";
            
            // Restablecer la animación después de que termine
            setTimeout(() => {
                reel.style.animation = "none"; // Eliminar la animación para reiniciarla
            }, 500); // El tiempo debe coincidir con la duración de la animación
        });

        const result1 = getRandomSymbol();
        const result2 = getRandomSymbol();
        const result3 = getRandomSymbol();

        reel1.textContent = result1;
        reel2.textContent = result2;
        reel3.textContent = result3;

        checkWin(result1, result2, result3); // Llama a la función checkWin
    });

    function getRandomSymbol() {
        return symbols[Math.floor(Math.random() * symbols.length)];
    }

    function checkWin(symbol1, symbol2, symbol3) {
        if (symbol1 === symbol2 && symbol2 === symbol3) {
            resultMessage.textContent = `¡Felicidades! Ganaste con ${symbol1}!`;
            resultMessage.style.fontSize = "2em"; // Ajusta este valor según tus preferencias
        } else {
            resultMessage.textContent = 'Intenta de nuevo.';
            resultMessage.style.fontSize = "2em"; // Mantener un tamaño adecuado
        }
    }

    // Modo desarrollador
    const loginForm = document.getElementById('loginForm');
    const developerContent = document.getElementById('developerContent');
    const logoutBtn = document.getElementById('logoutBtn');

    loginForm.addEventListener('submit', (e) => {
        e.preventDefault();
        const username = document.getElementById('username').value;
        const password = document.getElementById('password').value;

        if (username === 'admin' && password === 'admin123') {
            developerContent.style.display = 'block'; // Muestra el contenido del editor
            loginForm.style.display = 'none'; // Oculta el formulario de login
        } else {
            alert('Usuario o contraseña incorrectos');
        }
    });

    logoutBtn.addEventListener('click', () => {
        developerContent.style.display = 'none'; // Oculta el contenido del editor
        loginForm.style.display = 'block'; // Muestra el formulario de login
        document.getElementById('username').value = '';
        document.getElementById('password').value = '';
    });
});
