import '../scss/styles.scss'

import * as bootstrap from 'bootstrap'


const rangeInput = document.getElementById('myRange');

// rangeInput.addEventListener('mousedown', function() {
//     rangeInput.style.color = 'white';
//     // rangeInput.value = 'A';
// });

// rangeInput.addEventListener('mouseup', function() {
//     rangeInput.style.color = 'black';
//     // rangeInput.value = 'A';
// });
let splitstr
let strtest = "MAGNETIC FIELD"
let MFspan = []
let div = document.getElementById("mf")


function init() {
    splitstr = strtest.split('');

    for (let i = 0; i < splitstr.length; i++) {
        let ic = document.createElement("span");
        ic.classList.add("ics");
        ic.innerHTML = splitstr[i];
        MFspan.push(ic)
        div.append(MFspan[i]);
    }
}

init()