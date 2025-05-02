/***********************************
 * Backgrouns Music
 ***********************************/
// Erstellen des backgroundAudio-Elements
let backgroundAudio = new Audio('../sounds/backgroundMusic/shopMusic.mp3');
backgroundAudio.loop = true; // Automatisches Wiederholen aktivieren
backgroundAudio.volume = 0.5; // Anfangslautstärke (50%)

// backgroundAudio erst nach Benutzerinteraktion starten
document.body.addEventListener('click', () => {
    backgroundAudio.play().catch(error => console.error('backgroundAudio konnte nicht abgespielt werden:', error));
}, { once: true }); // Nur einmal ausführen

// Zugriff auf den Mute-Button
const muteButton = document.getElementById('muteButton');

// Sicherstellen, dass die Musik erneut abgespielt wird, falls die Schleifenfunktion deaktiviert ist
function setBackgroundAudio(audio){
    backgroundAudio.pause();
    backgroundAudio = new Audio(audio);
    backgroundAudio.play();

    backgroundAudio.addEventListener('ended', () => {
        backgroundAudio.play();
    });
}

/******************************
 * Click sound
 *****************************/
const clickSound = new Audio('../sounds/effects/click.wav')
document.addEventListener('click', ()=>{
    clickSound.pause();
    clickSound.currentTime = 0;
    clickSound.play();
})