//document.getElementById("cerca").addEventListener("click", getUtente());

async function getUtente() {
    try {
        const email = document.getElementById("exampleInputEmail1").value.trim();
        const response = await fetch(`http://localhost:8080/api/utente/find?email=${email}`);

        if (!response.ok) {
            throw new Error(`HTTP error! status: ${response.status}`);
        }

        // Estrae il JSON dalla risposta
        const dati = await response.json();
        // Stampa i dati nella console
        console.log(dati);

        const table = document.getElementById("idTabella");   
        const thead = document.getElementById("testa");      
            createField();
            createRow(dati)
    

            function createField(){
                const row = document.createElement("tr");
                const fields = ["id", "nome", "cognome", "email", "ruoli"];
            
                fields.forEach(f =>{
                    const column = document.createElement("th");
                    const text = document.createTextNode(f);
                    column.appendChild(text);
                    row.appendChild(column);
                })
            
                thead.appendChild(row);
            }

        function createRow(obj){
   
            const row = document.createElement("tr");
                        
        
            Object.keys(obj).forEach(key=>{
                const column = document.createElement("td");
                const text = document.createTextNode(obj[key]);
                column.appendChild(text);
                row.appendChild(column);
            })
        
            table.appendChild(row);
            
        }

    }
    catch (error) {
        // Gestisce eventuali errori
        console.error('Errore nella richiesta utente:', error);
    }
}

