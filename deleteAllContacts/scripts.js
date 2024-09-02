form = document.querySelector('form')

form.addEventListener('submit', async (e) => {
    e.preventDefault()

    const formData = new FormData(document.getElementById('form'))

    try{
        const response = await fetch('http://localhost/delete-all',{
            method:'DELETE',
            body:formData
        })
           if(response.ok){
               alert("Deleted all contacts successfully")
               window.location.href = "../dashboard/index.html"
           }

    }catch(error){
        alert(error)
        console.log(error)
    }
})