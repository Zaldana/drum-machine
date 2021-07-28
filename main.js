//Samples =============================================================

//Instruments
const kickDrum = new Audio('sounds/kick-drum.mp3');
const snareDrum = new Audio('sounds/snare-drum.mp3');
const hiHats = new Audio('sounds/hi-hat.mp3');

// //Click track
const tick = new Audio('sounds/tick.mp3');
const tock = new Audio('sounds/tock.mp3');

//Helper Functions ====================================================

//Interval function
const startInt = function () { setInterval(metronomeUpdate, 300); }

//count variable
let count = 0;

// CSS edits ==========================================================

// Pad highlight
$('body').click(function () {

    $('body').
        find('.instrument:checked').
            closest('.pad').
                css({ 'background-color': 'rgb(0, 255, 106)'});

    $('body').
        find($("input:checkbox:not(:checked)")).
            closest('.pad').
                css({ 'background-color': 'rgb(70, 70, 70)' });

});


//Start Button =======================================================

$('input[name=start]').change(function () {
    
    if (this.checked) {
       startInt();
    } else {
        location.reload();
    }
});

// Audio functions ===================================================

//Metronome
function metronomeUpdate() {

    //Click track
    if ($('#metronome').prop('checked')) {
        if (count == 1 ||
            count == 2 || 
            count == 3 || 
            count == 5 || 
            count == 6 || 
            count == 7) {
            tick.play();
        } if (count == 4 || count == 8) {
            tock.play();
        } 
    };

    //Count reset
    if (count >= 8) {
        count = 0;
    };

     //Count Update
    count += 1;

    //Count display
    $("#display-text").text("Count: " + count);

};

//Kick Drum
setInterval(kickUpdate, 300);

function kickUpdate() {

    if ($('#kick-1').prop('checked') && count == 1) {
        kickDrum.load();
        kickDrum.play();
    } if ($('#kick-2').prop('checked') && count == 2) {
        kickDrum.load();
        kickDrum.play();
    } if ($('#kick-3').prop('checked') && count == 3) {
        kickDrum.load();
        kickDrum.play();
    } if ($('#kick-4').prop('checked') && count == 4) {
        kickDrum.load();
        kickDrum.play();
    } if ($('#kick-5').prop('checked') && count == 5) {
        kickDrum.load();
        kickDrum.play();
    } if ($('#kick-6').prop('checked') && count == 6) {
        kickDrum.load();
        kickDrum.play();
    } if ($('#kick-7').prop('checked') && count == 7) {
        kickDrum.load();
        kickDrum.play();
    } if ($('#kick-8').prop('checked') && count == 8) {
        kickDrum.load();
        kickDrum.play();
    }

};

//Snare Drum
setInterval(snareUpdate, 300);

function snareUpdate() {

    if ($('#snare-1').prop('checked') && count == 1) {
        snareDrum.load();
        snareDrum.play();
    } if ($('#snare-2').prop('checked') && count == 2) {
        snareDrum.load();
        snareDrum.play();
    } if ($('#snare-3').prop('checked') && count == 3) {
        snareDrum.load();
        snareDrum.play();
    } if ($('#snare-4').prop('checked') && count == 4) {
        snareDrum.load();
        snareDrum.play();
    } if ($('#snare-5').prop('checked') && count == 5) {
        snareDrum.load();
        snareDrum.play();
    } if ($('#snare-6').prop('checked') && count == 6) {
        snareDrum.load();
        snareDrum.play();
    } if ($('#snare-7').prop('checked') && count == 7) {
        snareDrum.load();
        snareDrum.play();
    } if ($('#snare-8').prop('checked') && count == 8) {
        snareDrum.load();
        snareDrum.play();
    }

};

//HiHats
setInterval(hiUpdate, 300);

function hiUpdate() {

    if ($('#hat-1').prop('checked') && count == 1) {
        hiHats.load();
        hiHats.play();
    } if ($('#hat-2').prop('checked') && count == 2) {
        hiHats.load();
        hiHats.play();
    } if ($('#hat-3').prop('checked') && count == 3) {
        hiHats.load();
        hiHats.play();
    } if ($('#hat-4').prop('checked') && count == 4) {
        hiHats.load();
        hiHats.play();
    } if ($('#hat-5').prop('checked') && count == 5) {
        hiHats.load();
        hiHats.play();
    } if ($('#hat-6').prop('checked') && count == 6) {
        hiHats.load();
        hiHats.play();
    } if ($('#hat-7').prop('checked') && count == 7) {
        hiHats.load();
        hiHats.play();
    } if ($('#hat-8').prop('checked') && count == 8) {
        hiHats.load();
        hiHats.play();
    }

};


//Query Selectors=======================================================

// //Count
// const countDisplay = $("#count");

// //Instruments
// const metronome = $('#metronome');
// const kick = $('#kick-drum');
// const hiHat = $('#hi-hat');
// const snare = $('#snare');

// //Beat Numbers
// const snareNumber = $('#snare-number');
// const kickNumber = $('#kick-number');
// const hatNumber = $('#hihat-number');

// //Samples ========================================================

// //Click track
// const tick = new Audio('sounds/tick.mp3');
// const tock = new Audio('sounds/tock.mp3');


// const hiHats = new Audio('sounds/hi-hat.mp3');

// //CSS functions====================================================

// const hideMe = function (elem) { elem.style.visibility = 'hidden'; };
// const showMe = function (elem) { elem.style.visibility = 'visible'; };

// //Variables ============================================================

// //Count
// let count = 0;

// //Interval functions========================================================

// //Metronome intervals
// function setupUpdate() {

//     if (metronome.checked) {
//         setInterval(metronomeUpdate, 600);
//     } 
// }

// // Call setupUpdate() once after 300ms
// setTimeout(setupUpdate, 300);

// //Instrument intervals
// setInterval(kickUpdate, 600);
// setInterval(hiUpdate, 600);
// setInterval(snareUpdate, 600);

// //Metronome Functions======================================================

// // This function is called every 600ms for the metronome
// function metronomeUpdate() {
   
//     //Click track
//     if (metronome.checked) {

//         if (count == 1 || count == 2 || count == 3 || count == 5 || count == 6 || count == 7) {

//             tick.play();


//         } if (count == 4 || count == 8) {

//             tock.play();

//         } 
    
//     } 

//     if (count >= 8) {

//         count = 0;
//     };
    
//      //Metronome display
//     count += 1;

//     //Metronome display
//     countDisplay.textContent = "Count: " + count;

  
// };

// //Functions for Samples=======================================================

// //Kick Drum
// function kickUpdate() {

//     if (kick.checked && kickNumber.value < 1) {

//         kickDrum.play();

//     } if (kick.checked && kickNumber.value == 1 && count == 1) {

//         kickDrum.play();

//     } if (kick.checked && kickNumber.value == 2 && count == 2) {

//         kickDrum.play();

//     } if (kick.checked && kickNumber.value == 3 && count == 3) {

//         kickDrum.play();

//     } if (kick.checked && kickNumber.value == 4 && count == 4) {

//         kickDrum.play();

//     }
// }

// //Hi-hat
// function hiUpdate() {

//     if (hiHat.checked && hatNumber.value < 1) {

//         hiHats.play();

//     } if (hiHat.checked && hatNumber.value == 1 && count == 1) {

//         hiHats.play();

//     } if (hiHat.checked && hatNumber.value == 2 && count == 2) {

//         hiHats.play();

//     } if (hiHat.checked && hatNumber.value == 3 && count == 3) {

//         hiHats.play();

//     } if (hiHat.checked && hatNumber.value == 4 && count == 4) {

//         hiHats.play();

//     }

// };

// //Snare
// function snareUpdate() {

//     if (snare.checked && snareNumber.value < 1) {

//         snareDrum.play();

//     } if (snare.checked && snareNumber.value == 1 && count == 1) {

//         snareDrum.play();

//     } if (snare.checked && snareNumber.value == 2 && count == 2) {

//         snareDrum.play();

//     } if (snare.checked && snareNumber.value == 3 && count == 3) {

//         snareDrum.play();

//     } if (snare.checked && snareNumber.value == 4 && count == 4) {

//         snareDrum.play();

//     }

// };


