const razones = [
    "1. Eres mi Blanquitaaa",
    "2. Me haces reír todos los días.",
    "3. Tienes un corazón increíble.",
    "4. Eres mi inspiración.",
    "5. Me apoyas en todo lo que hago.",
    "6. Tu sonrisa ilumina mi día.",
    "7. Eres increíblemente inteligente.",
    "8. Me haces sentir especial.",
    "9. Tu amor me hace mejor persona.",
    "10. Eres mi lugar seguro.",
    "11. Me encanta cómo me miras.",
    "12. Eres mi confidente.",
    "13. Tu voz me tranquiliza.",
    "14. Eres mi razón para sonreír.",
    "15. Me haces sentir amado.",
    "16. Eres mi compañera de vida.",
    "17. Me encanta tu sentido del humor.",
    "18. Eres mi mayor motivación.",
    "19. Me haces sentir completo.",
    "20. Eres mi sueño hecho realidad.",
    "21. Me encanta tu creatividad.",
    "22. Eres mi refugio en los días difíciles.",
    "23. Me haces sentir valioso.",
    "24. Eres mi razón para esforzarme.",
    "25. Me encanta tu pasión por la vida.",
    "26. Eres mi mejor consejera.",
    "27. Me haces sentir en casa.",
    "28. Eres mi luz en la oscuridad.",
    "29. Me encanta tu forma de ser.",
    "30. Eres mi mayor alegría.",
    "31. Me haces sentir orgulloso.",
    "32. Eres mi razón para creer en el amor.",
    "33. Me encanta tu bondad.",
    "34. Eres mi mayor fortaleza.",
    "35. Me haces sentir único.",
    "36. Eres mi razón para despertar feliz.",
    "37. Me encanta tu determinación.",
    "38. Eres mi mayor tesoro.",
    "39. Me haces sentir vivo.",
    "40. Eres mi razón para ser mejor.",
    "41. Me encanta tu sinceridad.",
    "42. Eres mi mayor apoyo.",
    "43. Me haces sentir en paz.",
    "44. Eres mi razón para soñar.",
    "45. Me encanta tu valentía.",
    "46. Eres mi mayor inspiración.",
    "47. Me haces sentir afortunado.",
    "48. Eres mi razón para sonreír cada día.",
    "49. Me encanta tu generosidad.",
    "50. Eres mi mayor felicidad.",
    "51. Me haces sentir amado incondicionalmente.",
    "52. Eres mi razón para creer en el futuro.",
    "53. Me encanta tu forma de cuidarme.",
    "54. Eres mi mayor regalo.",
    "55. Me haces sentir importante.",
    "56. Eres mi razón para luchar.",
    "57. Me encanta tu forma de escucharme.",
    "58. Eres mi mayor sueño.",
    "59. Me haces sentir protegido.",
    "60. Eres mi razón para ser feliz.",
    "61. Me encanta tu forma de amarme.",
    "62. Eres mi mayor orgullo.",
    "63. Me haces sentir en armonía.",
    "64. Eres mi razón para creer en mí.",
    "65. Me encanta tu forma de sorprenderme.",
    "66. Eres mi mayor alegría.",
    "67. Me haces sentir en paz conmigo mismo.",
    "68. Eres mi razón para ser agradecido.",
    "69. Me encanta tu forma de entender.",
    "70. Eres mi mayor fortuna.",
    "71. Me haces sentir en casa donde sea que estemos.",
    "72. Eres mi razón para creer en la magia.",
    "73. Me encanta tu forma de abrazarme.",
    "74. Eres mi mayor bendición.",
    "75. Me haces sentir en el lugar correcto.",
    "76. Eres mi razón para sonreír sin motivo.",
    "77. Me encanta tu forma de hacerme sentir especial.",
    "78. Eres mi mayor regalo de la vida.",
    "79. Me haces sentir en paz con el mundo.",
    "80. Eres mi razón para creer en el amor eterno.",
    "81. Me encanta tu forma de hacerme reír.",
    "82. Eres mi mayor inspiración diaria.",
    "83. Me haces sentir en el cielo.",
    "84. Eres mi razón para ser feliz todos los días.",
    "85. Me encanta tu forma de cuidar de mí.",
    "86. Eres mi mayor alegría en la vida.",
    "87. Me haces sentir en armonía con todo.",
    "88. Eres mi razón para creer en la bondad.",
    "89. Me encanta tu forma de hacerme sentir amado.",
    "90. Eres mi mayor sueño hecho realidad.",
    "91. Me haces sentir en paz conmigo mismo.",
    "92. Eres mi razón para creer en el destino.",
    "93. Me encanta tu forma de hacerme sentir completo.",
    "94. Eres mi mayor regalo del universo.",
    "95. Me haces sentir en el lugar correcto en el momento correcto.",
    "96. Eres mi razón para creer en la felicidad.",
    "97. Me encanta tu forma de hacerme sentir único.",
    "98. Eres mi mayor alegría en cada momento.",
    "99. Me haces sentir en paz con todo lo que soy.",
    "100. Eres mi razón para vivir y amar."
];
// Seleccionar la lista
const lista = document.querySelector('.razones-lista');

// Función para agregar las razones a la lista con un retraso
razones.forEach((razon, index) => {
    setTimeout(() => {
        const li = document.createElement('li');
        li.textContent = razon;
        lista.appendChild(li);
    }, index * 100); // Retraso de 100ms entre cada razón
});

// Seleccionar el reproductor de música y el botón
const audio = document.getElementById('background-music');
const musicButton = document.getElementById('music-button');

// Controlar la reproducción de la música
musicButton.addEventListener('click', () => {
    if (audio.paused) {
        audio.play();
        musicButton.textContent = '🎵 Pausar Música';
    } else {
        audio.pause();
        musicButton.textContent = '🎵 Reproducir Música';
    }
});