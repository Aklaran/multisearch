const inputBox = document.querySelector('input');

function multisearch(e) {
    if (e.keyCode === 13) {
        window.open(`https://www.forvo.com/word/${this.value}/#it`, '_blank');
        window.open(`https://www.linguee.com/english-italian/search?query=${this.value}`, '_blank');
        window.open(`https://www.google.com/search?tbm=isch&q=${this.value}&cr=countryIT`)
    }
}

inputBox.addEventListener('keydown', multisearch);