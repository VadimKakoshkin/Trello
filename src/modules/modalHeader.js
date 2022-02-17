//Модальное окно в шапке сайта
const modalHeader = () => {
    const modal = document.querySelector(".header-modal");
    const btns = document.querySelectorAll("a[href^='#callback']");
    const modalContent = document.querySelector(".header-modal--opened");
    const overlay = document.querySelector(".overlay");
    
    //Условие
    btns.forEach((btn) => {
        btn.addEventListener("click", () => {
            if (window.outerWidth > 768) {
                modal.style.display = "block";
                overlay.style.display = "block";
                modalContent.animate(
                    [
                        {
                            opacity: 0,
                            transform: "translate3D(0, -300px, 0)",
                        },
                        {
                            opacity: 1,
                        },
                    ],
                    {
                        duration: 500,
                    }
                );
            } else {
                modal.style.display = "block";
            }
        });
    });
    
    // Событие по клику
    modal.addEventListener("click", (e) => {
        if (/* !e.target.closest(".overlay") ||*/ e.target.classList.contains("header-modal__close")) {
            modal.style.display = "none";
            overlay.style.display = "none";
        }
    });
};

export default modalHeader;