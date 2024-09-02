createContactBtn = document.querySelector('.createContactButton')
updateContactButton = document.querySelector('.updateContactButton')
deleteContactButton = document.querySelector('.deleteContactButton')
deleteAllContactsButton = document.querySelector('.deleteAllContactsButton')
getAllContacts = document.querySelector('.getAllContacts')
log_out = document.querySelector('.log_out')

createContactBtn.addEventListener('click', (e) => {
    e.preventDefault()
    window.location.href = "../create_contact_page/index.html"
})

updateContactButton.addEventListener('click', (e) => {
    e.preventDefault()
    window.location.href = "../update_contact_page/index.html"
})

deleteContactButton.addEventListener('click', (e) =>{
    e.preventDefault()
    window.location.href = "../delete_a_contact_page/index.html"
})

deleteAllContactsButton.addEventListener('click', (e) => {
    e.preventDefault()
    window.location.href = "../deleteAllContacts/index.html"
})

getAllContacts.addEventListener('click', (e) => {
    e.preventDefault()
    window.location.href = "../get_all_contacts/index.html"
})

log_out.addEventListener('click', async (e) => {
    e.preventDefault()

    try {
        const response = await fetch('http://localhost/logout-user', {
            method:'PATCH'
        })
        if(response.ok) {
            window.location.href = "../login_page/index.html"
        }
    }catch(error){
        console.log(error)
    }
})

