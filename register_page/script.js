let form = document.getElementById('form')

form.addEventListener('submit', (e) => {
    e.preventDefault()

    const formData = new FormData(document.getElementById('form'))
    const firstName = document.getElementById('firstNameInputBox').value
    const lastName = document.getElementById('phoneNumberInputBox').value
    const email = document.getElementById('emailInputBox').value
    const phoneNumber = document.getElementById('phoneNumberInputBox').value
    const emailError = document.getElementById('emailError')
    const phoneNumberError = document.getElementById('phoneNumberError')


    if(!firstName || !lastName || !email || !phoneNumber ){
        console.error("Empty fields, Please fill them in !")
    }

    emailError.textContent = "";
    if(!email.includes('@') | !email.includes('.com')){
        emailError.textContent = 'Invalid email format, Please include "@" and "."';
    }

    if(email === " "){
        emailError.textContent ="Please fill out this field"
    }

    phoneNumberError.textContent = "";
    if(phoneNumber.length < 11 || phoneNumberError.length > 11){
        phoneNumberError.textContent = "Incorrect Phone number"
    }

    try {
        fetch('http://localhost/register', {
            method: 'POST',
            body: formData
        })
            .then(response => response.json())
            .then(data => {
                console.log(data)
            })


    } catch (error) {
        console.log(error)
    }
})