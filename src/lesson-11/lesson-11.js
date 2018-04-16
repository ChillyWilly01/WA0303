import './lesson-11.scss';

// function lighter(htmlElement) {
//     console.log(htmlElement);
//     const lighters = htmlElement.querySelectorAll('.light');
//
//
//     for (let light of lighters) {
//         light.onclick = function () {
//             toggleOff();
//             light.classList.add('active');
//         }
//     }
//
//     function toggleOff() {
//         for (let light of lighters) {
//             light.classList.remove('active');
//         }
//     }
// }
//
// lighter(document.querySelector('#lighterFirst'));
// lighter(document.querySelector('#lighterSecond'));
// lighter(document.querySelector('#lighterThird'));
//
// function alert(message) {
//     console.log('Your message: ' + message);
// }
//
// alert('xsefdxfg');


function box(htmlElement) {
    console.log(htmlElement);
    const light = htmlElement.querySelectorAll('.light');
    const btn = document.querySelector('.btn');


    for (let light of box) {
        btn.onclick = function () {
            toggleOff();
            light.classList.add('active');
        }
    }

    function toggleOff() {
        for (let light of box) {
            light.classList.remove('active');
        }
    }
}

box(document.querySelector('#lighterFirst'));
box(document.querySelector('#lighterSecond'));
box(document.querySelector('#lighterThird'));