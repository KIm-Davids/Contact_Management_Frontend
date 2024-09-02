form = document.querySelector('form')

form.addEventListener('submit', async (e) => {
    e.preventDefault()

    const formData = new FormData(document.getElementById('form'))
    console.log(formData)

    try{
        const response = await fetch('http://localhost/create-contact', {
            method: 'PATCH',
            body: formData
        })
           // if(response.ok){
           //     alert(`Successfully added a contact`)
           //     console.log(response)
           //     window.location.href = "../dashboard/index.html"
           // }
        if(!response.ok){
            alert(`something happened, pls ensure the phone_number or email have not been added before ${await response.text()}`)
            window.location.href = "index.html"
        }
    }catch(error){
        alert(`${error} Please try again `)
        // console.log(error)
    }
})
