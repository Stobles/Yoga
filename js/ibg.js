function ibg() {
    let ibg = document.querySelectorAll('.ibg')
    for (let i = 0; i < ibg.length; i++) {
        if(ibg[i].querySelector('img')){
            window.addEventListener('scroll', ()=>{
                ibg[i].style.backgroundImage = 'url('+ibg[i].querySelector('img').getAttribute('src')+')';
            })
        }
        
    }
    
}
ibg();