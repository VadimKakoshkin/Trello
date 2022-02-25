//Отправка формы
const formSend = ({ idForm , someElem = [] }) => {
    const forms = document.querySelectorAll(idForm);

    //Валидация
    const validate = (list) => {
        let success = true;

        list.forEach(input => {
            if (input.value === "") {
                success = false;
                
            }
        });
        
        return success;
    }

    //Отправка данных
    const sendData = (data) => {
        return fetch('https://jsonplaceholder.typicode.com/posts', {
            method: 'POST',
            body: JSON.stringify(data),
            headers: {
                "Content-Type": "application/json"
            }
        }).then(res => res.json());
    }
    
    forms.forEach(form => form.addEventListener('submit', (event) => {
        event.preventDefault();

        const formElements = form.querySelectorAll('input');
        const formData = new FormData(form);
        const formBody = {};

        formData.forEach((val, key) => {
            formBody[key] = val;
        })

        try {
            someElem.forEach(elem => {
                const element = document.getElementById(elem.id);
    
                if(elem.type === 'input') {
                    formBody[elem.id] = element.placeholder;
                }
            })
        } catch (error) {};

        if(validate(formElements)) {
            sendData(formBody);
        } else {
            alert('Данные не валидны');
        }
    
    }))
}

export default formSend;