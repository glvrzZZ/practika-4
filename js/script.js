document.addEventListener('DOMContentLoaded', () => {
    const users = [
        { name: 'Даниил Елесин', avatar: 'avatar1.png' },
        { name: 'Артём Хачатурьян', avatar: 'avatar2.png' },
        { name: 'Дарья Маркова', avatar: 'avatar3.png' },
        { name: 'Пётр Петров', avatar: 'avatar4.png' },
        { name: 'Иван Иванов', avatar: 'avatar5.png' },
    ];

    const searchInput = document.getElementById('search');
    const userList = document.getElementById('user-list');

    function renderUsers(filteredUsers) {
        userList.innerHTML = '';
        filteredUsers.forEach(user => {
            const userItem = document.createElement('li');
            userItem.className = 'user-item';

            const userAvatar = document.createElement('img');
            userAvatar.src = user.avatar;
            userAvatar.className = 'user-avatar';

            const userName = document.createElement('span');
            userName.className = 'user-name';
            userName.textContent = user.name;

            userItem.appendChild(userAvatar);
            userItem.appendChild(userName);
            userList.appendChild(userItem);
        });
    }

    function filterUsers(query) {
        const filteredUsers = users.filter(user => user.name.toLowerCase().includes(query.toLowerCase()));
        renderUsers(filteredUsers);
    }

    searchInput.addEventListener('input', () => {
        filterUsers(searchInput.value);
    });

    renderUsers(users);
});


