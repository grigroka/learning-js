'use strict';
// Create an event listener
document.getElementById('button').addEventListener('click', loadText);

function loadText() {
    // Create XHR Object
    let xhr = new XMLHttpRequest();
    // OPEN - type, url/filename, async
    xhr.open('GET', 'sample.txt', true);

    // OPTIONAL - used for loaders
    // xhr.onprogress = function () {
    //     console.log('READYSTATE: ', xhr.readyState);
    // };

    xhr.onload = function () {
        if (this.status == 200) {
            // console.log('READYSTATE: ', xhr.readyState);
            // console.log(this.responseText);
            document.getElementById('text').innerHTML = this.responseText;
        } else if(this.status == 404) {
            document.getElementById('text').innerHTML = 'Not Found';
        };
    };

    xhr.onerror = function () {
        console.log('Request Error..');
    };

    // Old method using 'onreadystatechange', have to check readyState.
    // xhr.onreadystatechange = function () {
    //     if (this.readyState == 4 && this.status == 200) {
    //         console.log(this.responseText);            
    //     };
    // };

    // Send request
    xhr.send();
};