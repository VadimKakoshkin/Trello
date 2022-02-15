//Кнопка "Наверх"
const scrollUp = () => {
    const btnScroll = document.querySelector('.smooth-scroll');
    const hiddenScroll = () => {
        btnScroll.style.display = 'none';
    }
    
    hiddenScroll();
    
    window.onscroll = () => {
        if (window.pageYOffset > 600) {
            btnScroll.style.display = 'block'
        } else {
            btnScroll.style.display = 'none'
        }
    };
    

    
    btnScroll.addEventListener('click', function (e) {
        e.preventDefault();
        const id = btnScroll.getAttribute('href');
        
        document.querySelector(id).scrollIntoView({
            behavior: 'smooth',
            block: 'start'
        });
        
        return id;
    });
}

export default scrollUp;