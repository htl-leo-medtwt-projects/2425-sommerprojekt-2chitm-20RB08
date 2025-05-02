/***********************************
 * Backgrouns Music
 ***********************************/
// Erstellen des backgroundAudio-Elements
backgroundAudio.loop = true; // Automatisches Wiederholen aktivieren
backgroundAudio.volume = 0.5; // Anfangslautstärke (50%)

// backgroundAudio erst nach Benutzerinteraktion starten
document.body.addEventListener('click', () => {
    backgroundAudio.play().catch(error => console.error('backgroundAudio konnte nicht abgespielt werden:', error));
}, { once: true }); // Nur einmal ausführen


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
document.addEventListener('click', ()=>{
    clickSound.pause();
    clickSound.currentTime = 0;
    clickSound.play();
})