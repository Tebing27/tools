let mixerKerja = mixitup('.work__container', {
    selectors: {
        target: '.work__card'
    },
    animation: {
        duration: 300
    }
});


const linkKerja = document.querySelectorAll('.work__item')

function activeBaca(){
    linkKerja.forEach( l=> l.classList.remove('active-work'))
    this.classList.add('active-work')
}

linkKerja.forEach( l=> l.addEventListener('click', activeBaca))