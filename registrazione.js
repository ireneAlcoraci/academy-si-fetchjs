async function post(){

    fetch('http://localhost:8080/api/utente/registra', {
        method: 'POST', 
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify({
            "nome" : document.getElementById("nome").value,
            "cognome" : document.getElementById("cognome").value,
            "email" : document.getElementById("email").value,
            "password" : document.getElementById("pass").value
        }),
    })
        .then(response => response.json()) 
        .then(data => {
            console.log(data);
            alert("utente registrato con successo")}) 
        .catch((error) => console.error('Errore nella registrazione utente:', error)); // Gestisce eventuali errori
}