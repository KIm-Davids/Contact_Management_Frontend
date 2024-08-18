const form = document.querySelector("#form")

form.addEventListener('submit', async (e) => {
    e.preventDefault();

    const email = document.getElementById("emailInput")
    const password = document.getElementById("passwordInput")

    try{
        console.log("one")
        const response  = await fetch("http://localhost:8089/login/notepad/login-user",
            {
                method: "PATCH",
                headers: {
                    "content-type" : "application/json"
                },
                body:JSON.stringify({email:email, password:password})
            })
        console.log("Two")
        if(response.ok){
            const result = await response.text();
            alert('success')
            console.log(result)
        }else{
            const err = await response.text();
            alert(err)
            console.log(err)
        }
    }catch(error){
        alert(error.message)
    }

})
