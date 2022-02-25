//Модальное окно услуг (вызова замерщика)
const modalServices = () => {
    const modal = document.querySelector(".services-modal");
    const btns = document.querySelectorAll("a[href^='#application']");
    const modalContent = document.querySelector(".services-modal--opened");
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
    
    // Клик
    modal.addEventListener("click", (e) => {
        if (/* !e.target.closest(".overlay") ||*/ e.target.classList.contains("services-modal__close")) {
            modal.style.display = "none";
            overlay.style.display = "none";
        }
    });
};

export default modalServices;