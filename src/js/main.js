import '../scss/styles.scss'

import * as bootstrap from 'bootstrap'


const rangeInput = document.getElementById('myRange');

rangeInput.addEventListener('mousedown', function() {
    rangeInput.style.color = 'white';
    // rangeInput.value = 'A';
});

rangeInput.addEventListener('mouseup', function() {
    rangeInput.style.color = 'black';
    // rangeInput.value = 'A';
});