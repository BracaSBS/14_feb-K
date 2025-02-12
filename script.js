// Cambiar entre pestañas
document.querySelectorAll('.tab-button').forEach(button => {
    button.addEventListener('click', function() {
        // Remover la clase 'active' de todos los botones y contenidos
        document.querySelectorAll('.tab-button').forEach(btn => btn.classList.remove('active'));
        document.querySelectorAll('.tab-content').forEach(content => content.classList.remove('active'));

        // Añadir la clase 'active' al botón y contenido seleccionado
        this.classList.add('active');
        document.getElementById(this.getAttribute('data-tab')).classList.add('active');
    });
});

// Carta de amor animada
document.getElementById('reveal-button').addEventListener('click', function() {
    document.getElementById('hidden-message').classList.remove('hidden');
    this.style.display = 'none'; // Oculta el botón después de hacer clic
});

// Animación de la carta
document.getElementById('reveal-button').addEventListener('click', function() {
    const sobre = document.getElementById('sobre');
    const hoja = document.getElementById('hoja');
    const hiddenMessage = document.getElementById('hidden-message');

    // Abrir el sobre
    sobre.classList.add('abierto');

    // Mostrar la hoja y el mensaje oculto
    hoja.style.opacity = 1;
    hiddenMessage.style.opacity = 1;

    // Ocultar el botón después de hacer clic
    this.style.display = 'none';
});

// Animación de los regalos
document.querySelectorAll('.regalo').forEach(regalo => {
    regalo.addEventListener('click', function() {
        // Cerrar todos los regalos abiertos
        document.querySelectorAll('.regalo').forEach(r => {
            if (r !== this && r.classList.contains('abierto')) {
                r.classList.remove('abierto');
                r.querySelector('.hoja-regalo').classList.add('hidden');
            }
        });

        // Abrir o cerrar el regalo actual
        this.classList.toggle('abierto');
        const hoja = this.querySelector('.hoja-regalo');
        hoja.classList.toggle('hidden');
    });
});

