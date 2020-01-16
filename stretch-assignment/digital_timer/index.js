let secTens = document.getElementById("secondTens");
let secOnes = document.getElementById("secondOnes");

let msTens = document.getElementById('msHundreds');
let msOnes = document.getElementById('msTens');

let clock = [secTens, secOnes, msTens, msOnes];

function countUpSec() {
    let num = 0;
    clock.forEach(elm => elm.textContent = 0);

    let time = setInterval(() => {
        num++;
        if (num >= 10) {
            secTens.textContent = 1;
            secOnes.textContent = 0;

            clock.forEach(elem => elem.classList.add('redDigit'));
            clearInterval(time);
            console.log('Done');
        } else {
            secOnes.textContent = num;
        }
    }, 1000);
}

// countUpSec();

const buttons = document.getElementById('buttons');
buttons.addEventListener('click', (event) => {
    if (event.target.id == 'start') {
        countUpSec();
    } else {
        countUpSec();
        event.preventDefault();
    }
})