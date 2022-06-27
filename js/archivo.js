

  const $form =  document.querySelector('#my-form-button')
  const $buttonMailto = document.getElementById("meilexpo");
     
  
  $form.addEventListener('submit', handleSubmit)
 
 function handleSubmit(event){
    let nombrex = document.getElementById("name").value;
    let emailx = document.getElementById("email").value;
    let messagex =  document.getElementById("message").value;
    console.log(nombrex)
    console.log(emailx)
    console.log(messagex)

 event.prevetDefault()
 const form = new FormData(this)
 console.log(form.get('name'))
 console.log(form.get('email'))
 console.log(form.get('message'))
 $buttonMailto.setAttribute('href',`mailto: expocomex@hotmail.com?subject=${form.get('name')}{form.get('email')}&body=${form.get('message')}`)
 $buttonMailto.click()


 
       }
 
 
 
       var form = document.getElementById("my-form");
       let nombrex = document.getElementById("name").value;
       let emailx = document.getElementById("email").value;
       let messagex =  document.getElementById("message").value;
       
       async function handleSubmit(event) {
       
        let nombrex = document.getElementById("name").value;
        let emailx = document.getElementById("email").value;
        let messagex =  document.getElementById("message").value;
        console.log(nombrex)
        console.log(emailx)
        console.log(messagex)


         event.preventDefault();
         var status = document.getElementById("my-form-status");
         var data = new FormData(event.target);
         fetch(event.target.action, {
           method: form.method,
           body: data,
           headers: {
               'Accept': 'application/json'
           }
         }).then(response => {
           if (response.ok) {
            if(nombrex != "" && emailx != "" && messagex != ""){
             alert("Gracias por tu mensaje, Pronto te responderemos");
             status.innerHTML = "<br> Mensaje Enviado! <br> ";
             form.reset()
            } else {alert("Completa todos los campos")}
           } else {
             response.json().then(data => {
               if (Object.hasOwn(data, 'errors')) {
                 status.innerHTML = data["errors"].map(error => error["message"]).join(", ")
               } else {
                 status.innerHTML = "Oops! Hubo un inconveniente en el formulario"
               }
             })
           }
         }).catch(error => {
           status.innerHTML = "Oops! Hubo un inconveniente en el formulario"
           
         });
      
    }
       form.addEventListener("submit", handleSubmit)


 
 
