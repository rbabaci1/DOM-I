let secTens = document.getElementById("secondTens");
let secOnes = document.getElementById("secondOnes");

let msTens = document.getElementById('msHundreds');
let msOnes = document.getElementById('msTens');

let clock = [secTens, secOnes, msTens, msOnes];

// Manipulates the seconds
function countUpSec() {
    let num = 0;
    clock.forEach(elm => elm.textContent = 0);

    let time = setInterval(() => {
        num++;
        if (num >= 10) {
            secTens.textContent = 1;
            secOnes.textContent = 0;

            clock.forEach(elem => elem.classList.add('redDigit'));
            document.body.style.background = '#447dc9';
            clearInterval(time);
        } else {
            secOnes.textContent = num;
        }
    }, 1000);
}

// Manipulates the milliseconds
function countUpMs() {
    let num = 0;
    let reset = 0;

    let timing = setInterval(() => {
        num++;
        msTens.innerText = 0;

        if (reset >= 10) {
            msOnes.innerText = 0;
            clearInterval(timing);
        } else {
            if (num == 10) {
                msTens.innerText = 1;
                num = 0;
                reset++;
            }
            msOnes.innerText = num;
        }
    }, 100);
}

// Buttons Event listeners and handlers
const buttons = document.getElementById('buttons');
buttons.addEventListener('click', (event) => {
    if (event.target.id == 'start') {
        countUpSec();
        countUpMs();
    } else if (event.target.id == 'reset'){
        countUpSec();
    }
});