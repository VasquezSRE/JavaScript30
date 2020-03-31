function removeTransition(e) {
    if (e.propertyName !== 'transform') return;
    e.target.classList.remove('playing');
}

function playSound(e) {
    const audio = document.querySelector(`audio[data-key="${e.keyCode}"]`);
    const instrument = document.querySelector(`g[data-key="${e.keyCode}"]`);
    const key = document.querySelector(`div[data-key="${e.keyCode}"]`);

    console.log(key);
    if (!audio) return;

    instrument.classList.add('playing');
    key.classList.add('playing');
    audio.currentTime = 0;
    audio.play();
}

const instrument = Array.from(document.querySelectorAll('.instrument'));
instrument.forEach(key => key.addEventListener('transitionend', removeTransition));

const keys = Array.from(document.querySelectorAll('.key'));
keys.forEach(key => key.addEventListener('transitionend', removeTransition));
window.addEventListener('keydown', playSound);