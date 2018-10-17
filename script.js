function playSound(event) {
    const audio = document.querySelector(`audio[data-key="${event}"]`);
    const key = document.querySelector(`.key[data-key="${event}"]`);
    
    if (!audio) return; // stop func from running all together
    
    audio.play();
    audio.currentTime = 0; // rewind to the start
    key.classList.add('playing');
}

function removeTransition(event) { 
    if (event.type !== 'transitionend') return; //skip if not 'transform' propertyName
    this.classList.remove('playing');
}
const keys = document.querySelectorAll('.key');
keys.forEach(key => {
    key.addEventListener('transitionend', removeTransition);
    ['click', 'ontouchstart', 'keydown'].forEach(e =>  {
        key.addEventListener(e, function () {
            if (e.which) { playSound(e.which) }
            playSound(this.dataset.key);
         }, false)
    });
});

window.addEventListener('keydown', e => playSound(e.which));
