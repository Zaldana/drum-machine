

//Query Selectors=======================================================

//Count
const countDisplay = document.querySelector("#count");

//Instruments
const metronome = document.querySelector('#metronome');
const kick = document.querySelector('#kick-drum');
const hiHat = document.querySelector('#hi-hat');
const snare = document.querySelector('#snare');

//Beat Numbers
const snareNumber = document.querySelector('#snare-number');
const kickNumber = document.querySelector('#kick-number');
const hatNumber = document.querySelector('#hihat-number');

//Samples ========================================================

//Click track
const tick = new Audio('sounds/tick.mp3');
const tock = new Audio('sounds/tock.mp3');

//Instruments
const kickDrum = new Audio('sounds/kick-drum.mp3');
const snareDrum = new Audio('sounds/snare-drum.mp3');
const hiHats = new Audio('sounds/hi-hat.mp3');

//CSS functions====================================================

const hideMe = function (elem) { elem.style.visibility = 'hidden'; };
const showMe = function (elem) { elem.style.visibility = 'visible'; };

//Variables ============================================================

//Count
let count = 0;

//Interval functions========================================================

//Metronome intervals
function setupUpdate() {

    if (metronome.checked) {
        setInterval(metronomeUpdate, 600);
    } 
}

// Call setupUpdate() once after 300ms
setTimeout(setupUpdate, 300);

//Instrument intervals
setInterval(kickUpdate, 600);
setInterval(hiUpdate, 600);
setInterval(snareUpdate, 600);

//Metronome Functions======================================================

// This function is called every 600ms for the metronome
function metronomeUpdate() {
   
    //Click track
    if (metronome.checked) {

        if (count <= 3) {

            tick.play();


        } if (count > 3) {

            tock.play();

        } 
    
    } 

    if (count >= 4) {

        count = 0;
    };
    
     //Metronome display
    count += 1;

    //Metronome display
    countDisplay.textContent = "Count: " + count;

  
};

//Functions for Samples=======================================================

//Kick Drum
function kickUpdate() {

    if (kick.checked && kickNumber.value < 1) {

        kickDrum.play();

    } if (kick.checked && kickNumber.value == 1 && count == 1) {

        kickDrum.play();

    } if (kick.checked && kickNumber.value == 2 && count == 2) {

        kickDrum.play();

    } if (kick.checked && kickNumber.value == 3 && count == 3) {

        kickDrum.play();

    } if (kick.checked && kickNumber.value == 4 && count == 4) {

        kickDrum.play();

    }
}

//Hi-hat
function hiUpdate() {

    if (hiHat.checked && hatNumber.value < 1) {

        hiHats.play();

    } if (hiHat.checked && hatNumber.value == 1 && count == 1) {

        hiHats.play();

    } if (hiHat.checked && hatNumber.value == 2 && count == 2) {

        hiHats.play();

    } if (hiHat.checked && hatNumber.value == 3 && count == 3) {

        hiHats.play();

    } if (hiHat.checked && hatNumber.value == 4 && count == 4) {

        hiHats.play();

    }

};

//Snare
function snareUpdate() {

    if (snare.checked && snareNumber.value < 1) {

        snareDrum.play();

    } if (snare.checked && snareNumber.value == 1 && count == 1) {

        snareDrum.play();

    } if (snare.checked && snareNumber.value == 2 && count == 2) {

        snareDrum.play();

    } if (snare.checked && snareNumber.value == 3 && count == 3) {

        snareDrum.play();

    } if (snare.checked && snareNumber.value == 4 && count == 4) {

        snareDrum.play();

    }

};


