function playSound(event) {
    const audio = document.querySelector(`audio[data-key="${event.keyCode}"]`);
    const key = document.querySelector(`.key[data-key="${event.keyCode}"]`);
    
    if (!audio) return; // stop func from running all together
    
    audio.play();
    audio.currentTime = 0; // rewind to the start
    key.classList.add('playing');
}

function removeTransition(event) { 
    if (event.propertyName !== 'transform') return; //skip if not 'transform' propertyName
    this.classList.remove('playing');
}
const keys = document.querySelectorAll('.key');
keys.forEach(key => {
    key.addEventListener('transitionend', removeTransition);
});

addEventListener('keydown', playSound);