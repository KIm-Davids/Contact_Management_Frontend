let form = document.getElementById('form')
form.addEventListener('submit', (event) => {
    event.preventDefault()

    const formData = new FormData(document.getElementById('form'))
    console.log(formData)
    try {
        fetch('http://localhost/login', {
            method: 'PATCH',
            body: formData
        })
            .then(response => response.json())
            .then(data => {
                console.log(data)
            })
    } catch (error) {
        console.log(`Error ${error} please try again`)
    }
})

// fetch("http://localhost/login")
//     .then(response => response.json())
//     .then(data => {
//         console.log(data)
//     })
