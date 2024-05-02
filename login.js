
async function userLogin(){

    fetch('http://localhost:8080/api/utente/login', {
        method: 'POST', 
        headers: {
            'Content-Type': 'application/json', 
        },
        body: JSON.stringify({
            "email": document.getElementById("exampleInputEmail1").value,
            "password": document.getElementById("exampleInputPassword1").value
        }),
    })
        .then(async response => await response.json()) 
        .then(data => {console.log(data)
                      document.getElementById("tabellaUtenti").click() }) 
        .catch((error) => {console.error('Errore:', error)
                            alert("errore nell'inserimento dati")}); // Gestisce eventuali errori
}


