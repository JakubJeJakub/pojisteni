let pojisteni = [];  
let showTable = false;  

function vytvorPojisteneho() {  
    let jmeno = document.getElementById('jmeno').value;  
    let prijmeni = document.getElementById('prijmeni').value;  
    let vek = document.getElementById('vek').value;  
    let pohlavi = document.getElementById('pohlavi').value;  
    let telefon = document.getElementById('telefon').value;  
    let email = document.getElementById('email').value;  
    let druhPojistky = document.getElementById('moznosti').value;  

    pojisteni.push({ jmeno, prijmeni, vek, pohlavi, telefon, email, druhPojistky });  

    aktualizujSeznam();  
    resetForm();  
}  

function aktualizujSeznam() {  
    let tabulkaTelo = document.getElementById('tabulkaTelo');  
    tabulkaTelo.innerHTML = '';  

    pojisteni.forEach((osoba, index) => {  
        tabulkaTelo.innerHTML += `  
            <tr>  
                <td>${osoba.jmeno}</td>  
                <td>${osoba.prijmeni}</td>  
                <td>${osoba.vek}</td>  
                <td>${osoba.pohlavi}</td>  
                <td>${osoba.telefon}</td>  
                <td>${osoba.email}</td>  
                <td>${osoba.druhPojistky}</td>  
                <td><button onclick="zobrazDetail(${index})">Detail</button></td>  
                <td><button onclick="deleteRow(${index})">Smazat</button></td>  
            </tr>  
        `;  
    });  
}  

function zobrazTabulku() {  
    const tabulka = document.getElementById("myTable");  
    if (!showTable) {  
        tabulka.style.display = "table";  
        showTable = true;  
        document.getElementById('buttonShowTable').innerHTML = 'Skryj tabulku';  
    } else {  
        tabulka.style.display = "none";  
        showTable = false;  
        document.getElementById('buttonShowTable').innerHTML = 'Ukaž tabulku';  
    }  
}  

function resetForm() {  
    document.getElementById('jmeno').value = '';  
    document.getElementById('prijmeni').value = '';  
    document.getElementById('vek').value = '';  
    document.getElementById('pohlavi').value = '';  
    document.getElementById('telefon').value = '';  
    document.getElementById('email').value = '';  
    document.getElementById('moznosti').selectedIndex = 0;  
}  

function deleteRow(index) {  
    const password = prompt("Zadejte heslo pro smazání řádku:");  
    if (password === "tajneheslo") {  
        pojisteni.splice(index, 1);  
        aktualizujSeznam();  
    } else {  
        alert("Nesprávné heslo!");  
    }  
}  

function zobrazDetail(index) {  
    const osoba = pojisteni[index];  
    localStorage.setItem('osoba', JSON.stringify(osoba));  
    window.open("detail.html", "_blank");  
}