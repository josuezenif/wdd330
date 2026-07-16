const button = document.querySelector('#userInfo');
const usersList = document.querySelector('#usersList');

async function getUsersInformation() {
    try {
        const url = 'https://jsonplaceholder.typicode.com/users';
        const response = await fetch(url);

        if (!response.ok) {
            throw new Error(`Their was an error retreiving the information! Status: ${response.status}`);
        }

        const users = await response.json();

        users.forEach((user) => {
            const li = document.createElement('li');
            li.textContent = `Name: ${user.name} || Email address: ${user.email}`;
            usersList.appendChild(li);
        });

    }

    catch (error) {
        console.log(error);
    }
}

button.addEventListener('click', getUsersInformation);

