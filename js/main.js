document.addEventListener('click', (e) => {
    let ClickTarget = e.target
    if(ClickTarget.closest('.burger')){
        document.querySelector('.burger').classList.toggle('active')
        if(document.querySelector('.burger').classList.contains('active')){
            document.querySelector('.header__navigation').style.transform = 'translateX(0%)'
        }
        else{
            document.querySelector('.header__navigation').style.transform = ''
        }
    }

    if(ClickTarget.closest('.preteachers__slide--btn') || ClickTarget.classList.contains('preteachers__slide--btn')){
        
    }
})