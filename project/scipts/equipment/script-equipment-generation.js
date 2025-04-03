/*************************
 * Close Selectcard
 *************************/
function closeSelectplate() {
    document.getElementById('selectplate').style.animation = 'none';
    document.getElementById('selectplate').offsetHeight;
    document.getElementById('selectplate').style.animation = 'selectplateDisapear 1s';

    setTimeout(()=>{
        document.getElementById('selectplate').style.bottom = '-150%';
    }, 1000)
}

/**********************
 * OpenSelectcard
 **********************/