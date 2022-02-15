// Таймер
const timer = (deadline) => {
    // Объявление переменных таймера
    let timerDays = document.querySelectorAll(".count_1 span");
    let timerHours = document.querySelectorAll(".count_2 span");
    let timerMinutes = document.querySelectorAll(".count_3 span");
    let timerSeconds = document.querySelectorAll(".count_4 span");

    // Отсчёт таймера
    const getTimeRemaining = () => {
        let dateStop = new Date(deadline).getTime();
        let dateNow = new Date().getTime();
        let timeRemaining = (dateStop - dateNow) / 1000;
        let days = Math.floor(timeRemaining / 60 / 60 / 24);
        let hours = Math.floor((timeRemaining / 60 / 60) % 24);
        let minutes = Math.floor((timeRemaining / 60) % 60);
        let seconds = Math.floor(timeRemaining % 60);
            
        return { timeRemaining, days, hours, minutes, seconds };
    };
        
    // Подстановка нуля для таймера
    const addZero = (elem) => {
        if (String(elem).length === 1) { return '0' + elem; } else { return String(elem); }
    };
        
    // Присвоение значений элементам для каждого таймера
    const updateClock = () => {
        let getTime = getTimeRemaining();
        timerDays.forEach(item => {item.textContent = addZero(getTime.days)});
        timerHours.forEach(item => {item.textContent = addZero(getTime.hours)});
        timerMinutes.forEach(item => {item.textContent = addZero(getTime.minutes)});
        timerSeconds.forEach(item => {item.textContent = addZero(getTime.seconds)});
    };

    // Время вышло
    setTimeout(() => {
        let getTime = getTimeRemaining();
        if (getTime.timeRemaining > 0) {
            updateClock();
        } else if (getTime.timeRemaining === 0) {
            clearTimeout(updateClock);
        }
    });

    // Обновление интервала
    setInterval(() => {
        let getTime = getTimeRemaining();
        if (getTime.timeRemaining > 0) {
            updateClock();
        } else if (getTime.timeRemaining === 0) {
            clearInterval(updateClock);
        }
    }, 1000);
};

export default timer;