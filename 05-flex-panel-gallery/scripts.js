const panels = document.querySelectorAll('.panel');
let sound = false;

function toggleOpen() {
    this.classList.toggle('open');
}

function toggleActive(e) {
    if (e.propertyName.includes('flex')) {
        if (e.target.className.includes('panel5'))
            playSound();

        this.classList.toggle('open-active');
    }
}

panels.forEach(panel => panel.addEventListener('click', toggleOpen));
panels.forEach(panel => panel.addEventListener('transitionend', toggleActive));

function playSound() {
    sound = !sound;

    if (sound){
        let audio = document.querySelector('#eo');
        audio.currentTime = 0;
        audio.play();
    }
}