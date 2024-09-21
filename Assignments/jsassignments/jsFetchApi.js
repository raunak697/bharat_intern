// Function to fetch user data and display it
async function fetchAndDisplayUsers() {
    try {
        const response = await fetch('https://jsonplaceholder.typicode.com/users');
        if (!response.ok) {
            throw new Error('Network response was not ok');
        }
        const users = await response.json();
        displayUsers(users);
    } catch (error) {
        console.error('There has been a problem with your fetch operation:', error);
    }
}

// Function to display user details
function displayUsers(users) {
    const userList = document.getElementById('user-list');

    users.forEach(user => {
        const listItem = document.createElement('li');
        listItem.innerHTML = `
            <strong>Name:</strong> ${user.name}<br>
            <strong>Email:</strong> ${user.email}<br>
            <strong>Address:</strong> ${user.address.street}, ${user.address.city}
        `;
        userList.appendChild(listItem);
    });
}

// Call the function to fetch and display users
fetchAndDisplayUsers();
