document.getElementById('shareButton').addEventListener('click', async (e) => {
    e.preventDefault();

    if (navigator.share) {
        try {
            await navigator.share({
                title: document.title,
                text: 'Cuenta regresiva en tiempo real y celebra la llegada del "' + TARGET_YEAR + '".',
                url: window.location.href
            });
        } catch (error) {
            console.error('Error al compartir:', error);
        }
    } else {
        alert('La función de compartir no está disponible en este navegador.');
    }
});

function pad(n) {
    return n.toString().padStart(2, '0');
}

function setValue(id, value) {
    const numberEl = document.getElementById(id);
    const boxEl = document.getElementById(id + '-box');
    const newValue = pad(value);

    if (numberEl.textContent !== newValue) {
        numberEl.textContent = newValue;

        // Reiniciar animación SOLO del contenedor del número
        boxEl.classList.remove('animate-number-box');
        void boxEl.offsetWidth;
        boxEl.classList.add('animate-number-box');
    }
}

const DEBUG_MODE = false;

const target = DEBUG_MODE
    ? new Date(Date.now() + 3000) // solo una vez
    // ? new Date(Date.now() + 60000) // solo una vez
    : new Date(TARGET_YEAR, 0, 1);

/* Funcion para lanzar confetti */
function launchConfetti(amount = 30) {
    // Reducción de movimiento
    if (window.matchMedia && window.matchMedia('(prefers-reduced-motion: reduce)').matches) return;

    const colors = ['#ff4d4f', '#ffd666', '#73d13d', '#40a9ff', '#9254de', '#ff7a45'];
    for (let i = 0; i < amount; i++) {
        const el = document.createElement('span');
        el.className = 'confetti';
        const left = Math.random() * 100; // porcentaje
        const size = 6 + Math.round(Math.random() * 10); // px
        const color = colors[Math.floor(Math.random() * colors.length)];
        const delay = Math.random() * 300; // ms

        el.style.left = left + '%';
        el.style.width = size + 'px';
        el.style.height = Math.round(size * 1.6) + 'px';
        el.style.background = color;
        el.style.opacity = String(0.9 + Math.random() * 0.1);
        el.style.transform = `translateX(${(Math.random() - 0.5) * 200}px) rotate(${Math.random() * 360}deg)`;
        el.style.animationDelay = delay + 'ms';

        // eliminar DOM cuando termine la animación
        el.addEventListener('animationend', () => el.remove());
        document.body.appendChild(el);
    }
}

/* updateCountdown */
function updateCountdown() {
    const now = new Date();
    const diff = target - now;
    if (diff <= 0) {
        const container = document.querySelector(".container");

        container.innerHTML = `
    <h1 class="celebrate">¡Feliz Año Nuevo!</h1>
    <br>
<div class="celebrate-year" id="celebrateYear">${TARGET_YEAR}</div>
  `;

        // Coloca el fondo festivo
        const bg = document.querySelector(".background");
        if (bg) {
            bg.style.background = 'url("./img/fondoNewYear.gif") center / cover no-repeat';
        }

        // lanzar confetti
        if (typeof launchConfetti === 'function') {
            launchConfetti(60);
        }

        const yearEl = document.getElementById('celebrateYear');
        if (yearEl) {
            setTimeout(() => yearEl.classList.add('pulse'), 1100);
        }
        return;
    }


    // resto del cálculo como antes
    const days = Math.floor(diff / (1000 * 60 * 60 * 24));
    const hours = Math.floor((diff / (1000 * 60 * 60)) % 24);
    const minutes = Math.floor((diff / 1000 / 60) % 60);
    const seconds = Math.floor((diff / 1000) % 60);

    setValue('days', days);
    setValue('hours', hours);
    setValue('minutes', minutes);
    setValue('seconds', seconds);

    // visibilidades condicionales
    const daysContainer = document.getElementById('days-container');
    const hoursContainer = document.getElementById('hours-container');
    const minutesContainer = document.getElementById('minutes-container');
    const secondsContainer = document.getElementById('seconds-container');

    daysContainer.style.display = days > 0 ? 'block' : 'none';
    hoursContainer.style.display =
        days === 0 && hours === 0 ? 'none' : 'block';
    minutesContainer.style.display =
        days === 0 && hours === 0 && minutes === 0 ? 'none' : 'block';
    secondsContainer.style.display =
        days === 0 && hours === 0 && minutes === 0 && seconds === 0
            ? 'none'
            : 'block';
}

/* Inicio */
updateCountdown();
setInterval(updateCountdown, 1000);