function submitForm(){
    var name = document.getElementById("name").value;
    var email = document.getElementById("email").value;
    var phone = document.getElementById("phone").value;
   if(name && email && phone){
    document.getElementById("confirmation").innerText = "Thank you for registering, " + name + "! We will contact you at " + email + " or " + phone + ".";
   comsole.log("Registration Details:",{ Name :name,Email:email,Phone:phone

   });
   } else{
    alert("Please fill all the fields");
   }
   }
