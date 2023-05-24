const priviousPage = document.getElementById("previousmain")

priviousPage.addEventListener("click" , (event) => {
    const confirmed = confirm("Are you sure you want to navigate to the Previous About PCS page ?")

    if (!confirmed){
        event.preventDefault()
    }
})


const nextPage = document.getElementById("nextcontact")

nextPage.addEventListener("click" , (event) => {
    const confirmed = confirm("Are you sure you want to navigate to the next Contact page ?")

    if (!confirmed){
        event.preventDefault()
    }
})


var active = document.getElementsByClassName("active")

active[0].textContent = ""
active[1].textContent = ""
active[2].textContent = ""
active[3].textContent = "Store Hours"
active[4].textContent = "Contact"