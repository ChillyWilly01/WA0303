import './lesson-12.scss';

const widgets = document.querySelectorAll('.lighter');
const lighter = (htmlElement) => {
    const lighters = htmlElement.querySelector('.light');
    const btnToggle = htmlElement.querySelector('btn-toggle');
    let isEnabled = btnToggle.classList.contains('active');

    btnToggle.onclick = () => {
        btnToggle.classList.toggle('active');
        isEnabled = !isEnabled;
        if (isEnabled === false) {
            toggleOff();
            btnToggle.textContent = 'OFF';
        } else {
            btnToggle.textContent = 'ON';
        }
    };

    for (let light of lighters) {
        light.onclick = function () {
            if (isEnabled === true) {
            toggleOff();
            light.classList.add('active');
            }
        }
    }
};