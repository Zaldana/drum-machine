

//Query Selectors=======================================================

const countDisplay = document.querySelector("#count");

//Instruments
const metronome = document.querySelector('#metronome')
const kick = document.querySelector('#kick-drum')
const hiHat = document.querySelector('#hi-hat')
const snare = document.querySelector('#snare')

//samples
const tick = new Audio('sounds/tick.mp3');
const tock = new Audio('sounds/tock.mp3');
const kickDrum = new Audio('sounds/kick-drum.mp3');
const snareDrum = new Audio('sounds/snare-drum.mp3');
const hiHats = new Audio('sounds/hi-hat.mp3');

//Helper functions
const hideMe = function (elem) { elem.style.visibility = 'hidden'; };
const showMe = function (elem) { elem.style.visibility = 'visible'; };

//count
let count = 0;

//Update functions========================================================


setInterval(kickUpdate, 600);
setInterval(hiUpdate, 600);
setInterval(snareUpdate, 600);


// This function sets up update() to be called every 600m
function setupUpdate() {

    if (metronome.checked) {
        setInterval(metronomeUpdate, 600);
    } 
}

// Call setupUpdate() once after 300ms
setTimeout(setupUpdate, 300);

//Instrument Functions======================================================

// This function is called every 600ms for the metronome
function metronomeUpdate() {

    if (metronome.checked) {

        if (count <= 3) {

            tick.play();


        } if (count > 3) {

            tock.play();

        } if (count >= 4) {

            count = 0;
        }
        
        count += 1;
        countDisplay.textContent = "Count: " + count;
    
    } else {

        count = 0;
        countDisplay.textContent = "Count: 0";

    }

};

// This function is called every 600ms for the kickdrum
function kickUpdate() {

    if (kick.checked) {

        kickDrum.play();
        console.log('kick playing')
        

    }

};

// This function is called every 600ms for the kickdrum
function hiUpdate() {

    if (hiHat.checked) {

        hiHats.play();
        console.log('hihat playing')

    }

};

// This function is called every 600ms for the kickdrum
function snareUpdate() {

    if (snare.checked) {

        snareDrum.play();
        console.log('snare playing')

    }

};


