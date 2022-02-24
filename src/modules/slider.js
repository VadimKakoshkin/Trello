//Слайдер
const slider = () => {
    const sliderBlocks = document.querySelectorAll('.slider-block');

    const getToSlide = (sliderBlock) => {
        const allSlides = document.querySelectorAll(`.${sliderBlock.id}__item`);
        let slides = [];
        let slide1 = [];
        let slide2 = [];
  
        allSlides.forEach(slide => {
            if (slide.classList.contains('not-active')) {
                slide2.push(slide);
            } else slide1.push(slide)
        })
        slides.push(slide1);
        slides.push(slide2);
        return {slides};
    };
  
    const prevSlide = (slides, index, strClass) => {
        slides[index].forEach(slide => {
            slide.classList.add(strClass);
        })
    };
  
    const nextSlide = (slides, index, strClass) => {
        slides[index].forEach(slide => {
            slide.classList.remove(strClass);
        });
    };
  
    sliderBlocks.forEach(sliderBlock => sliderBlock.addEventListener('click', (e) => {
        e.preventDefault();
  
        let slides = getToSlide(sliderBlock).slides; 
        let currentSlide = 0;
  
        if (!e.target.closest('.arrows')) {
            return;
        }
           
        prevSlide(slides, currentSlide, 'not-active');
  
        if (e.target.closest('.benefits__arrow--right') || e.target.closest('.services__arrow--right')) {
            currentSlide++;
        } else if (e.target.closest('.benefits__arrow--left') || e.target.closest('.services__arrow--left')) {
            currentSlide--;
        }
        if (currentSlide >= slides.length) {
            currentSlide = 0;
        }
        if (currentSlide < 0) {
            currentSlide = slides.length - 1;
        }        
            
        nextSlide(slides, currentSlide, 'not-active');
    }))
};

export default slider;