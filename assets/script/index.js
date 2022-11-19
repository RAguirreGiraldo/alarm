'use strict';

// Add event listener
function onEvent(event, selector, callback) {
    return selector.addEventListener(event, callback);
}

// Get HTML element by id
function getElement(selector, parent = document) {
    return parent.getElementById(selector);
}

// Select HTML element by selector
function select(selector, parent = document) {
    return parent.querySelector(selector);
}

const $currenthour = document.querySelector('.currenthour');

function digitalClock() {
    let hour = new Date();
    let timeString = hour.toLocaleTimeString();
    $currenthour.innerHTML = timeString;
}

setInterval ( () => {
    digitalClock()
}, 1000); 

const form = select('form');
const numberOne = select('.number-one');
const btnConvert = select('.get-result');
const output = select('.output p');


onEvent('click', btnConvert, function() {
    output.innerText = '';
    let initialNumber = numberOne.value.trim();
    if(!initialNumber) {
        output.innerText = 'Please input Valid Hour.';
        return;
    }

    let selectedinput = select("input[name='convert']:checked");
    if(!selectedinput)  {
        output.innerText = 'Please Enter a Valid Hour';
        return;
    }

    let result;
    if(selectedinput.value !== true)  {
            
    }    
});

