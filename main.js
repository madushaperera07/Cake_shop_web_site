


const nextPage = document.querySelector("#nexthour")

nextPage.addEventListener("click" , (event) => {
    const confirmed = confirm("Are you sure you want to navigate to the next page ?")

    if (!confirmed){
        event.preventDefault()
    }
})

function topup(){
    alert("Click Ok to navigate to the top of the page")
}
