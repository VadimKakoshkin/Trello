//Модальное окно сертификата
const modalSert = () => {
    const btns = document.querySelectorAll(".sertificate-document");
    const overlay = document.querySelector(".overlay");

    const modalImg = document.createElement('div');
    modalImg.classList.add('header-modal', 'header-modal--opened');
    modalImg.style.cssText='max-width: 42%;'
    document.body.append(modalImg);

    const btnClose = document.querySelector('.header-modal__close')
    const btnImg = btnClose.cloneNode(true);
    btnImg.style.cssText='background: #4f686e; padding: 8px; border-radius: 50%; color: #fff;'
    modalImg.append(btnImg);

    const docResource = document.querySelector('.sertificate-document .img-responsive')
    const docImg = docResource.cloneNode(true);
    docImg.src = "images/documents/original/document4.jpg";
    modalImg.append(docImg);

    //Условие
    btns.forEach((btn) => {
        btn.addEventListener("click", (e) => {
            e.preventDefault();
            modalImg.style.display = 'flex';
            overlay.style.display = "block";
        });
    });
  
    //Клик
    btnImg.addEventListener('mouseenter', function (e) { 
        e.target.style.transition = '1s';
        e.target.style.background = '#5d5d5d';
    });
    
    btnImg.addEventListener('mouseleave', function (e) {
        e.target.style.transition = '1s';
        e.target.style.background = '#4f686e'; 
    });

    btnImg.addEventListener("click", () => {
        modalImg.style.display = 'none';
        overlay.style.display = "none";
    });

    overlay.addEventListener("click", () => {
        modalImg.style.display = 'none';
        overlay.style.display = "none";
    });
};
  
export default modalSert;