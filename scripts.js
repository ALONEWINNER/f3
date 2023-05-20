// Array of users
let users = [
    {id: 1, name: "John", age: "18", profession: "developer"},
    {id: 2, name: "Jack", age: "20", profession: "developer"},
    {id: 3, name: "Karen", age: "19", profession: "admin"}
  ];
  
  // Function to render user cards
  function renderUserCards() {
    const userList = document.getElementById('user-list');
    userList.innerHTML = '';
  
    users.forEach(user => {
      const card = document.createElement('div');
      card.classList.add('user-card');
      card.innerHTML = `
        <h3>${user.name}</h3>
        <p>Profession: ${user.profession}</p>
        <p>Age: ${user.age}</p>
      `;
      userList.appendChild(card);
    });
  }
  
  // Function to filter user cards by profession
  function filterUsers() {
    const professionSelect = document.getElementById('profession');
    const selectedProfession = professionSelect.value;
  
    if (!selectedProfession) {
      alert('Please select a profession before clicking the button.');
      return;
    }
  
    const filteredUsers = users.filter(user => user.profession === selectedProfession);
    users = filteredUsers;
    renderUserCards();
  }
  
  // Function to add a new user
  function addUser() {
    const nameInput = document.getElementById('name');
    const professionInput = document.getElementById('profession-input');
    const ageInput = document.getElementById('age');
  
    const name = nameInput.value;
    const profession = professionInput.value;
    const age = ageInput.value;
  
    const newUser = {
      id: users.length + 1,
      name: name,
      profession: profession,
      age: age
    };
  
    users.push(newUser);
    renderUserCards();
  
    // Clear input fields
    nameInput.value = '';
    professionInput.value = '';
    ageInput.value = '';
  }
  
  // Event listeners
  document.getElementById('filter-btn').addEventListener('click', filterUsers);
  document.getElementById('add-user-btn').addEventListener('click', addUser);
  
  // Initial rendering of user cards
  renderUserCards();
  