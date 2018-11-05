'use strict';

document.getElementById('button').addEventListener('click', loadUsers);

function loadUsers() {
    let xhr = new XMLHttpRequest();
    xhr.open('GET', 'users.php', true);

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
            </ul>`;
            };
            // Put output into element
            document.getElementById('users').innerHTML = output;
        };
    };

    xhr.send();
};