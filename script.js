function playSound(event) {
    const audio = document.querySelector(`audio[data-key="${event}"]`);
    const key = document.querySelector(`.key[data-key="${event}"]`);
    
    if (!audio) return; // stop func from running all together
    
    audio.play();
    audio.currentTime = 0; // rewind to the start
    key.classList.add('playing');
}

function checkDevice() {
    if (brow) return;
}

function removeTransition(event) { 
    if (event.type !== 'transitionend') return; //skip if not 'transform' propertyName
    this.classList.remove('playing');
}
const keys = document.querySelectorAll('.key');
keys.forEach(key => {
    key.addEventListener('transitionend', removeTransition);
    ['click', 'ontouchstart'].forEach(e => key.addEventListener(e, function () { 
        console.log(this.dataset.key);
        
        playSound(this.dataset.key);
     }, false));
});

addEventListener('keydown', e => playSound(e.which));
