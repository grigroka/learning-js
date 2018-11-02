'use strict';

document.getElementById('button1').addEventListener('click', loadUser);
document.getElementById('button2').addEventListener('click', loadUsers);


function loadUser() {
    let xhr = new XMLHttpRequest();
    xhr.open('GET', 'user.json', true);

    xhr.onload = function () {
        if (this.status == 200) {
            // Parse json before appending to output
            let user = JSON.parse(this.responseText);
            // Append to output
            let output = '';
            output += `<ul>
            <li>${user.id}</li>
            <li>${user.name}</li>
            <li>${user.email}</li>
            </ul>`;
            // Put output into element
            document.getElementById('user').innerHTML = output;
        };
    };

    xhr.send();
};

function loadUsers() {
    let xhr = new XMLHttpRequest();
    xhr.open('GET', 'users.json', true);

    xhr.onload = function () {
        if (this.status == 200) {
            // Parse json before appending to output
            let users = JSON.parse(this.responseText);
            // Append to output
            let output = '';
            for (const i in users) {
                output += `<ul>
            <li>${users[i].id}</li>
            <li>${users[i].name}</li>
            <li>${users[i].email}</li>
            </ul>`;
            };
            // Put output into element
            document.getElementById('users').innerHTML = output;
        };
    };

    xhr.send();
};