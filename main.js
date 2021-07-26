let count = 0;

// Setup 'tick' sound
const tick = new Audio('sounds/tick.mp3');
const tock = new Audio('sounds/tock.mp3');

// This function is called every 600ms
function update() {

    // Play the 'tick' sound
    
    count += 1;
    
    console.log(count);

    if (count === 4) {

    tock.play();
    

    } if (count <= 3)  {

        tick.play();

    } if (count >= 4) {

        count = 0;
    }

}

// This function sets up update() to be called every 600ms
function setupUpdate() {
    setInterval(update, 600);
}

// Call setupUpdate() once after 300ms
setTimeout(setupUpdate, 300);
