let member = document.querySelectorAll('.character'),
    lightBox = document.querySelector('#lightbox');

function loadHeroData() {
    lightBox.querySelector('.name').textContent = character[this.dataset.member].name;
    lightBox.querySelector("h3").textContent = character[this.dataset.member].headline;
    lightBox.querySelector('p').textContent = character[this.dataset.member].bio;
}

member.forEach(hero => hero.addEventListener('click', loadHeroData));