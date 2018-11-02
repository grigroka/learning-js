'use strict';

document.getElementById('button').addEventListener('click', loadUsers);

// Load GitHub users
function loadUsers() {
    let xhr = new XMLHttpRequest();
    xhr.open('GET', 'http://api.github.com/users', true);

    xhr.onload = function () {
        if (this.status == 200) {
            let users = JSON.parse(this.responseText);

            let output = '';
            for (let i = 0; i < users.length; i++) {
                output += `
                <div class="user">
                <img src="${users[i].avatar_url}" width="70" height="70">
                <ul>
                    <li>ID: ${users[i].id}</li>
                    <li>Login: ${users[i].login}</li>
                </ul>
                </div>
                `;
            }

            document.getElementById('users').innerHTML = output;
        };
    };

    xhr.send();
};