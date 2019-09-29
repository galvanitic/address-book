let arrayOfUsers = [];

// wait on page to load
window.onload = function() {
  getUsers();
}

function iterate() {
  arrayOfUsers.forEach(element => {
    console.log(element);
  });
}

// Create a fetch request
const getUsers = () => {
  fetch('https://randomuser.me/api/?results=5')
  .then(res => res.json())
  .then(users =>  {
    arrayOfUsers = users.results;
  })
  .then(displayContacts)
}


const displayContacts = () => {
  const allContacts = document.getElementById('contacts');
  arrayOfUsers.map((contact, index) => {
    console.log(contact.name.first)
    const li = document.createElement('li');
    const img = document.createElement('img');
    img.src = contact.picture.large;

    const name = document.createElement("h2");
    name.innerHTML = `${contact.name.first} ${contact.name.last}`;

    const email  = document.createElement('p');
    email.innerHTML = `Email: ${contact.email}`;

    const phone = document.createElement('p');
    phone.innerHTML = `Phone: ${contact.phone}`;

    const address = document.createElement('p');
    address.innerHTML = 
    `Address: ${contact.location.street.number} ${contact.location.street.name}
    \n ${contact.location.city}, ${contact.location.state} 
    \n ${contact.location.country} 
    \n ${contact.location.postcode}`

    li.append(img, name, email, phone, address);
    allContacts.append(li);
  })
}