let heroButtons = document.querySelectorAll('.characters a'),
    lightBox = document.querySelector('#lightbox');

function loadHeroData() {
    lightBox.querySelector('h3').textContent = members[this.dataset.member].headline;
    lightBox.querySelector('p').textContent = members[this.dataset.member].bio;
}

heroButtons.forEach(hero => hero.addEventListener('click', loadHeroData));