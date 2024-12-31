document.addEventListener("DOMContentLoaded", () => {
  // const daysElement = document.getElementById("daysElement");
  const hourElement = document.getElementById("hourElement");
  const minsElement = document.getElementById("minsElement");
  const secsElement = document.getElementById("secsElement");

  let countdownActive = true; // Bandera para detener el cronómetro

  const updateCountdown = () => {
    const now = new Date();
    const newYear = new Date(2025, 0, 1, 0); // Fecha objetivo: 1 de enero de 2025
    //const newYear = new Date(2024, 11, 1, 0); // Fecha objetivo: 1 de enero de 2025

    const diff = newYear - now;

    if (diff <= 0) {
      // Detenemos el cronómetro si ya se alcanzó la fecha
      countdownActive = false;
      setToZero();
      return;
    }

    // const days = Math.floor(diff / (1000 * 60 * 60 * 24));
    const hours = Math.floor((diff / (1000 * 60 * 60)) % 24);
    const minutes = Math.floor((diff / (1000 * 60)) % 60);
    const seconds = Math.floor((diff / 1000) % 60);

    // animateChange(daysElement, days);
    animateChange(hourElement, hours);
    animateChange(minsElement, minutes);
    animateChange(secsElement, seconds);
  };

  const setToZero = () => {
    // Establece todos los valores en cero
    // animateChange(daysElement, 0);
    animateChange(hourElement, 0);
    animateChange(minsElement, 0);
    animateChange(secsElement, 0);
  };

  const animateChange = (element, newValue) => {
    if (element.textContent !== newValue.toString().padStart(2, "0")) {
      element.textContent = newValue.toString().padStart(2, "0");

      // Añadir clase de animación
      const parent = element.parentElement;
      parent.classList.remove("fade");
      void parent.offsetWidth; // Forzar reflow
      parent.classList.add("fade");
    }
  };

  // Llamar inicialmente al cronómetro
  updateCountdown();

  // Ejecutar el cronómetro en intervalos
  const interval = setInterval(() => {
    if (countdownActive) {
      updateCountdown();
    } else {
      clearInterval(interval); // Detener el intervalo cuando ya no sea necesario
      activateAnimation();
    }
  }, 1000);
});

// Función para mostrar el video como fondo con texto superpuesto
function activateAnimation() {
  // Crear un contenedor para la animación
  const animationContainer = document.createElement("div");
  animationContainer.id = "animationContainer";
  animationContainer.style.position = "fixed";
  animationContainer.style.top = "0";
  animationContainer.style.left = "0";
  animationContainer.style.width = "100%";
  animationContainer.style.height = "100%";
  animationContainer.style.zIndex = "9999";
  animationContainer.style.display = "flex";
  animationContainer.style.justifyContent = "center";
  animationContainer.style.alignItems = "center";
  animationContainer.style.overflow = "hidden";
  animationContainer.style.backgroundColor = "black"; // Fondo por defecto mientras carga

  // Crear el elemento de video como fondo
  const videoElement = document.createElement("video");
  videoElement.src = "./fireworksShow.mp4"; // Ruta del video
  videoElement.style.position = "absolute";
  videoElement.style.top = "0";
  videoElement.style.left = "0";
  videoElement.style.width = "100%";
  videoElement.style.height = "100%";
  videoElement.style.objectFit = "cover";
  videoElement.style.zIndex = "1"; // Colocar detrás de la imagen
  videoElement.controls = true; // No mostrar controles
  videoElement.autoplay = true;
  videoElement.muted = true; // Cambiar a `false` si se desea sonido
  videoElement.loop = true; // Hacer que se repita
  videoElement.playsInline = true;

  // Crear la imagen superpuesta con opacidad
  const overlayImage = document.createElement("img");
  overlayImage.src = "./NewYear-2025.jpg"; // Ruta de la imagen
  overlayImage.style.position = "relative";
  overlayImage.style.zIndex = "2"; // Frente al video
  overlayImage.style.opacity = "0.8"; // Opacidad ajustada
  overlayImage.style.width = "98%"; // Ajusta el tamaño según tu diseño
  overlayImage.style.height = "auto";
  overlayImage.style.animation = "fadeInOut 5s infinite"; // Animación suave de opacidad

  // Estilo para la animación de opacidad
  const style = document.createElement("style");
  style.innerHTML = `
    @keyframes fadeInOut {
      0%, 100% { opacity: 0.5; }
      50% { opacity: 1; }
    }
  `;
  document.head.appendChild(style);

  // Agregar el video y la imagen al contenedor
  animationContainer.appendChild(videoElement);
  animationContainer.appendChild(overlayImage);

  // Agregar el contenedor al cuerpo del documento
  document.body.appendChild(animationContainer);

  // Remover el contenedor al terminar el video
  videoElement.onended = () => {
    animationContainer.remove();
  };

  // Permitir cerrar el contenedor con un clic (opcional)
  animationContainer.addEventListener("click", () => {
    videoElement.muted = false; // Cambiar a `false` si se desea sonido
    // animationContainer.remove();
  });
}

// Función para mostrar un video en pantalla completa
function playFullScreenVideo() {
  // Crear el elemento de video
  const videoElement = document.createElement("video");
  videoElement.id = "fullScreenVideo";
  videoElement.src = "fireworksShow.mp4"; // Ruta del video (asegúrate de que sea válida)
  videoElement.style.position = "fixed";
  videoElement.style.top = "0";
  videoElement.style.left = "0";
  videoElement.style.width = "100%";
  videoElement.style.height = "100%";
  videoElement.style.objectFit = "cover";
  videoElement.style.zIndex = "10000";
  //   videoElement.autoplay = true;
  videoElement.loop = false; // Cambiar a true si deseas que el video se repita
  videoElement.controls = true; // Mostrar controles para controlar el video
  videoElement.muted = false; // Silenciado por defecto para permitir la reproducción automática en navegadores modernos
  videoElement.playsInline = true; // Evita que el video entre en pantalla completa automáticamente en dispositivos móviles

  // Añadir el video al cuerpo del documento
  document.body.appendChild(videoElement);

  // Eliminar el video al terminar
  videoElement.onended = () => {
    videoElement.remove(); // Eliminar el elemento de video del DOM
  };

  // Manejar errores de carga del video
  videoElement.onerror = () => {
    console.error("Error al cargar el video. Verifica la ruta y el formato.");
    videoElement.remove(); // Eliminar el video si ocurre un error
  };

  // Opción adicional: permitir salir del video con un clic (opcional)
  //   videoElement.addEventListener("click", () => {
  //     videoElement.remove();
  //   });
}
