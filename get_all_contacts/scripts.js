createContactButton = document.querySelector('.createContactButton')
contactsContainer = document.querySelector('.contactsContainer')
createContactButton.addEventListener('click', async (e) => {
    e.preventDefault()

    try {
        const response = await fetch('http://localhost/get-all-contacts', {
            method: 'GET'
        })
        if (response.ok) {
            alert("Retrieved all contacts")
            const data = await response.json()
            const contacts = data.contacts;
            displayContacts(contacts)
        }
    }catch(error){
        console.log(error)
    }
})

function displayContacts(contacts){
    contactsContainer.innerHTML = '' ;

    contacts.forEach(contact => {
        const [firstName, lastName, email, phoneNumber] = contact
        const contactElement = document.createElement('div');
        contactElement.classList.add('contact');

        contactElement.innerHTML = `
        <p>First Name: ${firstName}</p>
        <p>Last Name: ${lastName}</p>
        <p>Email: ${email}</p>
        <p>Phone Number: ${phoneNumber}</p>
        `
        contactsContainer.appendChild(contactElement)
    })
}