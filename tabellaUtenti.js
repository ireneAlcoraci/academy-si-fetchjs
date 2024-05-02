async function getDatiDalServer() {
    try {
        const response = await fetch('http://localhost:8080/api/utente/getAll');

        if (!response.ok) {
            throw new Error(`HTTP error! status: ${response.status}`);
        }

        const dati = await response.json();
        // Stampa i dati nella console
        console.log(dati);
        //aggiorna tabella con i dati
        const table = document.getElementById("idTabella");
        dati.forEach((obj)=>{
            createRow(obj)
        })

        function createRow(obj){
   
            const row = document.createElement("tr");
            const linkDelete = document.createElement("a");
            linkDelete.className = "btn btn-primary";
            linkDelete.textContent = "cancella";
            linkDelete.href = "cancellaUtente.html"
            const linkUpdate = document.createElement("a");
            linkUpdate.className = "btn btn-primary";
            linkUpdate.textContent = "aggiorna";
            linkUpdate.href = "aggiornaUtente.html"
            
                    
            Object.keys(obj).forEach(key=>{
                
                const column = document.createElement("td");
                const text = document.createTextNode(obj[key]);
                column.appendChild(text);
                column.appendChild(linkDelete);
                column.appendChild(linkUpdate);
                row.appendChild(column);
            })
            
            
            table.appendChild(row);
            
        }
        

    }
    catch (error) {
        console.error('Errore nella richiesta della lista utenti:', error);
    }
}










