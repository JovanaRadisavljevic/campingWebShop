function popuniKorpu(){
    const korpa = JSON.parse(localStorage.getItem("korpa")) || [];
    const teloTabele = document.querySelector('tbody');
    teloTabele.innerHTML = "";  
    //POPUNJAVANJE FORME
    korpa.forEach((proizvod, index) => {
        const red = document.createElement('tr');
        red.innerHTML = `            
            <td class="proizvodslika"><img src="${proizvod.slika}" alt="${proizvod.naziv}">${proizvod.naziv}</td>
            <td>${proizvod.trenutna} RSD</td>
            <td><input data-index="${index}" class="kolicina" type="number" name="" id="" min="0" value="1"></td>
            <td class="ukupnaCena">${proizvod.trenutna} RSD</td>
            <td><button data-index="${index}" class="obrisi" type="button"><i class="fa fa-trash"></i></button></td>
        `;
        teloTabele.appendChild(red);
    });
    //BRISANJE ELEMENTA
    document.querySelectorAll(".obrisi").forEach((dugme) => {
        dugme.addEventListener("click", ()=>{
            const index = dugme.getAttribute("data-index");
            obrisiIzKorpe(index);
        });
    });
    //PROMENA KOLICINE + UKUPNA CENA
    document.querySelectorAll(".kolicina").forEach((input) => {
        input.addEventListener("click", ()=>{
            const index = input.getAttribute("data-index");
            const kolicina = parseInt(input.value) || 0;
            izracunajUkupnuCenu(index,kolicina);
        });
    });

}

function izracunajUkupnuCenu(index,kolicina){
    //prvo nadji proizvod ciju cenu azuriram
    const korpa = JSON.parse(localStorage.getItem("korpa")) || [];
    const proizvod = korpa[index];
    const ukupnaCena = proizvod.trenutna * kolicina;
    //izvuci sve elemente sa klasom ukupnaCena pa nadji ovaj proizvod
    const ukupneCeneElement = document.querySelectorAll(".ukupnaCena");
    const celijaProizvoda = ukupneCeneElement[index];
    celijaProizvoda.textContent= `${ukupnaCena} RSD`;
}

function obrisiIzKorpe(index){
    if(!confirm("Da li ste sigurni da želite da obrišete proizvod iz korpe?")) {
        return;  
    }
    const korpa = JSON.parse(localStorage.getItem("korpa")) || [];
    korpa.splice(index,1);//kreni od index i ukloni naredni 1 element
    localStorage.setItem("korpa",JSON.stringify(korpa));
    popuniKorpu();
}
window.addEventListener("DOMContentLoaded",popuniKorpu);
