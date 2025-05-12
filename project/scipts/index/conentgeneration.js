/*********************
 * Show Playerselection
 ********************/
function showPlayerselection(){
    // give away playbutton
    document.getElementById('play').style.top = '-1000%';
    // show every playestat
    document.getElementById('playerSelect').style.marginTop = '35%';
    document.getElementById('playerSelect').style.animation = 'none';
    document.getElementById('playerSelect').offsetHeight;
    document.getElementById('playerSelect').style.animation = 'appear 1s ';

    // create player select
    let s = '';
    for (let i = 0; i < playerData.players.length; i++){
        if (playerData.players[i] == null){
            s += `<div id="option${i}" class="scroll" onclick="select(${i})"><p>New</p></div>`
        } else {
            s += `<div id="option${i}" class="scroll" onclick="select(${i})"><p>Lv.${playerData.players[i].level + 1}</p></div>`
        }
    }
    document.getElementById('playerSelect').innerHTML = s;
}

/******************
 * Select
 ********************/
function select(pos) {
    // show every playestat
    document.getElementById('playOrDelet').style.top = '80%';
    document.getElementById('playOrDelet').style.animation = 'none';
    document.getElementById('playOrDelet').offsetHeight;
    document.getElementById('playOrDelet').style.animation = 'appear 1s ';

    // einsetzen
    let s = `<div class="plate" onclick="playHero(${pos})"><p>Play</p></div>`;
    if (playerData.players[pos] != null){
        s += ` <div class="plate" onclick="deletePos(${pos})"><p>Delete</p></div>`
    }
    document.getElementById('playOrDelet').innerHTML = s

    // style
    for (let i = 0; i < playerData.players.length; i++){
        document.getElementById(`option${i}`).style.opacity = '0.8';
    }
    document.getElementById(`option${pos}`).style.opacity = '1';
}