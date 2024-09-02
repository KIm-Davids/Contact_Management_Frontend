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
            console.log(response.text())
            const contacts = await response.json()
            displayContacts(contacts)
        }
    }catch(error){
        console.log(error)
    }
})

function displayContacts(contacts){
    contactsContainer.innerHmtl = '' ;

    contacts.forEach(contact => {
        const contactElement = document.createElement('div')
        contactElement.classList.add('contact');

        contactElement.innerHTML = `
        <p>First Name: ${contact.first_name}</p>
        <p>Last Name: ${contact.last_name}</p>
        <p>Email: ${contact.email}</p>
        <p>Phone Number: ${contact.phone_number}</p>
        `

        contactsContainer.append(contactElement)
    })
}