<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Cronómetro Moderno</title>
    <link rel="stylesheet" href="./final/cronometro.css">
    <script src="./final/cronometro.js" defer></script>
</head>

<body>
    <div class="contenedor">
        <!-- Video como fondo -->
        <video autoplay muted loop playsinline class="background-video">
            <source src="harmony-in-the-wild.1920x1080.mp4" type="video/mp4">
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