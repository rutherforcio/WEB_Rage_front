async function registerFunc() {
    var name = document.getElementById("name").value
    var email = document.getElementById("email").value
    var pass =  document.getElementById("Contrasenya").value
    var passAgain =  document.getElementById("Repetir contrasenya").value

    if(pass !== passAgain) {
        alert("Las contraseñas no coinciden")
    }
    else {
        const headers = { 'Content-Type': 'application/json',  mode: "no-cors", withCredentials: true }
        const msg = JSON.stringify({ nombre: name, correo: email, password: pass });
    
        const res = await axios.post('http://localhost:5000/register', msg, {headers: headers})
            .catch(function (error) {
                if (error.response.status == 409) {
                    alert("Ya existe una cuetna con ese correo")
                }
            });
        
        if(res != null) {
            window.location.replace("index.html")
        }
    }
}