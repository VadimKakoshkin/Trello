//Валидация
const validation = () => {
    const formNames = document.querySelectorAll('.form-fio');
    const formPhones = document.querySelectorAll('.form-phone');

    formNames.forEach(formName => formName.addEventListener('input', (e) => {
        e.target.value = e.target.value.replace(/[^а-яА-Яa-zA-Z ]/, "");
    }));

    formPhones.forEach(formPhone => formPhone.addEventListener('input', (e) => {
        formPhone.value = formPhone.value.substring(0, 16);
        e.target.value = e.target.value.replace(/[^0-9+]/, "");
        
    }));
};

export default validation;