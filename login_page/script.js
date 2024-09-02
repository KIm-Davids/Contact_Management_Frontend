let form = document.getElementById('form')
form.addEventListener('submit', async(event) => {
    event.preventDefault()

    const formData = new FormData(document.getElementById('form'))
    console.log(formData)
    try {
        const response = await fetch('http://localhost/login', {
            method: 'PATCH',
            body: formData
        })
        if(response.ok){
            alert("Logged in successfully")
            window.location.href = "../dashboard/index.html"
        }
    } catch (error) {
        console.log(`Error ${error} please try again`)
    }
})

// fetch("http://localhost/login")
//     .then(response => response.json())
//     .then(data => {
//         console.log(data)
//     })
