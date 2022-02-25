import timer from './modules/timer';
import scrollUp from './modules/scrollUp';
import modalHeader from './modules/modalHeader';
import modalServices from './modules/modalServices';
import modalSert from './modules/modalSert';
import calculator from './modules/calculator';
import formSend from './modules/formSend';
import validation from './modules/validation';
import slider from './modules/slider';

timer('28 february 2022');
scrollUp();
modalHeader();
modalServices();
modalSert();
calculator();
slider();
formSend({
    idForm: ('#actionForm1, #actionForm2, #actionFormModal1, #actionFormModal2'),
    someElem: [
        {
            type: 'input',
            id: 'calc-total'
        }
    ]
});
validation();
