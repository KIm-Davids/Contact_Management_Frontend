form = document.querySelector('form')

form.addEventListener('click', (e) => {
    e.preventDefault()

    const formData = new FormData(document.getElementById('form'))
    try {
        fetch('http://localhost/update-contact', {
            method: 'PATCH',
            body: formData
        })
            .then(response => response.json())
            .then(data => {
                console.log(data)
            })
    }catch(error){
        console.log(error)
    }
})