

function privioushours(){
    alert("Click Ok to navigate to the previous page")
}

var action = document.getElementsByClassName("active")
console.log(action)

action[0].textContent = ""
action[1].textContent = ""
action[2].textContent = ""
action[3].textContent = "Store Hours"
action[4].textContent = "Contact"


$(function(){
    $("#Registration").validate({
        rules:{
            fname :{ 
                required :true,
            }, 
            email :{
                required :true,
                email : true
            },
            phone :{
                required:true,
                number : true,
                minlength : 10,
                maxlength : 10,
            },
            subject :{
                required : true,
            },
            area :{
                required : true,
            }
        },
        messages : {
            fname : {
                required : "Please Enter Your Full Name"
            },
            email :{
                required : "Please Enter Your Email Address",
                email : "Pleas Enter A Valid Email Address"
            },
            phone:{
                required:"Please Provide A Password",
                number : "Please enter the number",
                minlength : "invalid",
                maxlength : "invalid"
            },
            subject:{
                required : "Please Provide A Subject",
            },
            area:{
                required : "Give the message"
            }
        }
    })
})
