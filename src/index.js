import timer from './modules/timer';
import scrollUp from './modules/scrollUp';
import modalHeader from './modules/modalHeader';
import modalServices from './modules/modalServices';
import modalSert from './modules/modalSert';
import calculator from './modules/calculator';
import formSend from './modules/formSend';

timer('23 february 2022');
scrollUp();
modalHeader();
modalServices();
modalSert();
calculator();
formSend({ formId, someElem = [] });