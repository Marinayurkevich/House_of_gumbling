document.getElementById('lang').onclick = function () {
    if (lang.innerHTML == "EN") {
        this.textContent = 'RU';
    } else {
        this.textContent = 'EN';
    }
}