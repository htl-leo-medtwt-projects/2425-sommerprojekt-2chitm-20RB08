/*****************
 * Schow end
 ***************/
function showEnd(){
    console.log('***** Schluss *****');
    
    doAnimation('#end-screen', 'fromBottomToTheTop', 55, 'linear');
    setTimeout(()=>{
        document.getElementById('end-screen').style.bottom = '0%';
    }, 55000)

    // music
    setBackgroundAudio('../sounds/backgroundMusic/endMusic.mp3');
}

document.getElementById('end-screen').addEventListener('click', () => {
    const endScreen = document.getElementById('end-screen');

    // Animation stoppen
    endScreen.style.animation = 'none';

    // Direkt den `bottom`-Wert setzen
    endScreen.style.bottom = '0%';
});

/*****************
 * Restart game
 *****************/
function restartGame(){
    player = new Player(player.name);
    console.log('===== Spiel wird neugestarter ======')
    safePlayer();
}

/********************
 * Continue the Game
 ********************/
function continueGame(){
    console.log('===== Spiel geht weiter ======');
    doAnimation('#end-screen', 'goUp', 2, 'linear');
    setTimeout(()=>{
        document.getElementById('end-screen').style.bottom = '100%';
    }, 2000)
    createCave();
    safePlayer();
    document.getElementById('backScroll').innerHTML = '<a href="navigation.html">Back</a>';
}