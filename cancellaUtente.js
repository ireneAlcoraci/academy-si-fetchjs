async function userDelete(){
    const email = document.getElementById("exampleInputEmail1").value.trim();
    fetch(`http://localhost:8080/api/utente/delete/${email}`, {
        method: 'DELETE', 
        headers: {
            'Content-Type': 'application/json', 
        }
    })
        
        .then(data => {console.log(data)
            alert("utente eliminato")
        }) 
        .catch((error) => console.error('Errore cancellazione utente:', error)); // Gestisce eventuali errori
}