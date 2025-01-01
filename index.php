<?php

/**
 * Cronometro para año nuevo
 *
 * Cronometro para año nuevo con animaciones y videos para el año nuevo 2025 con HTML, CSS y JavaScript.
 *
 * @package     CronometroAñoNuevo
 * @subpackage  Pages
 * @category    Pages
 * @author      Alb3rtsonTL
 * @version     1.0.1
 */
?>
<!DOCTYPE html>
<html lang="es">

<head>
    <!-- Meta-etiquetas -->
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <meta name="description" content="Cronometro para año nuevo con animaciones y videos">
    <meta name="keywords" content="año nuevo, cronometro para año nuevo, cronometro, año nuevo 2025">
    <link rel="shortcut icon" href="./Logo.png" type="image/x-icon">

    <!-- Etiqueta de título -->
    <title>Cronometro Año Nuevo</title>

    <!-- Metadatos opcionales -->
    <meta name="author" content="Albe3rtsonTL">
    <meta name="robots" content="index, follow">
    <meta name="og:title" content="Cronometro para año nuevo">
    <meta name="og:description" content="Cronometro para año nuevo con animaciones y videos">
    <meta name="og:image" content="./Logo.png">

    <link rel="stylesheet" href="./final/cronometro.css">
    <script src="./final/cronometro.js" defer></script>
</head>

<body>
    <div class="contenedor">
        <!-- Video como fondo -->
        <video autoplay muted loop playsinline class="background-video">
            <source src="./media/harmony-in-the-wild.1920x1080.mp4" type="video/mp4">
            Tu navegador no soporta la reproducción de videos.
        </video>

        <!-- Contenido principal -->
        <h1>Cuenta Regresiva</h1>
        <div class="cronometroCaja">
            <div>
                <div class="block">
                    <div class="number" id="hourElement">00</div>
                </div>
                <div class="label">Horas</div>
            </div>
            <div>
                <div class="block">
                    <div class="number" id="minsElement">00</div>
                </div>
                <div class="label">Minutos</div>
            </div>
            <div>
                <div class="block">
                    <div class="number" id="secsElement">00</div>
                </div>
                <div class="label">Segundos</div>
            </div>
        </div>
    </div>
</body>

</html>