//Модальное окно сертификата
const modalSert = () => {
    const sertificateImages = document.querySelectorAll('.sertificate-document');
    const overlay = document.querySelector('.overlay');
    const hideImages = document.querySelector('.hide_sertificate');
    const closeServiceModal = document.querySelector('.sertificate-modal__close');

    sertificateImages.forEach(sertificateImage => sertificateImage.addEventListener('click', (e) => {
        e.preventDefault();
        hideImages.style.display = 'block';
        overlay.style.display = 'block';
        
    }))
    closeServiceModal.addEventListener('click', () => {
        hideImages.style.display = 'none';
        overlay.style.display = 'none';
    })
}

export default modalSert;