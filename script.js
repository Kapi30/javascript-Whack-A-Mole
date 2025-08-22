/*
window.onload = () => {
    console.log('hello')
    showMole()
}*/

let points = 0;


function showMole(timer, timeLeft) {
    points = 0;
    document.querySelector('.headStart').style.display = 'none';

    const showTime = setInterval(() => {

        let num = Math.ceil(Math.random() * 6);

        const mole = document.querySelector(`.mole${num}`);
        mole.classList.add('up');
        clickMole(mole);
        hideMole(mole, timer);

        timeLeft--;
        document.querySelector('.timeLeft').textContent = `Time Left:${timeLeft}`;

        //console.log(timeLeft)
        if (timeLeft == 0) {
            clearInterval(showTime)
            document.querySelector('.timeLeft').textContent = ``;
            document.querySelector('.points').textContent = ``;
            const points = clickMole(mole);
            document.querySelector('.result').textContent = `TIME IS UP!!! TOTAL POINTS: ${points}`;

            document.querySelector('.headStart').style.display = 'flex';
        }

    }, 1500);

}


function hideMole(mole, timer) {
    setTimeout(() => {
        mole.classList.remove('up')
    }, timer);
}

function clickMole(mole) {
    mole.addEventListener('click', () => {
        if (mole.classList.contains('up')) {
            mole.classList.remove('up');
            points += 20;
            console.log(points);
            document.querySelector('.points').textContent = `Points:${points}`;
        }

    }, { once: true })
    return points;
}


