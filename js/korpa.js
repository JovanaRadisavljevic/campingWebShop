function popuniKorpu(){
    const korpa = JSON.parse(localStorage.getItem('korpa')) || [];
    const teloTabele = document.querySelector("tbody");

    teloTabele.innerHTML=``;
    korpa.forEach((proizvod, indeks) => {
        const red = document.createElement('tr');
        red.innerHTML = `
            <td class="proizvodslika"><img src="${proizvod.slika}" alt="${proizvod.naziv}">${proizvod.naziv}</td>
            <td>${proizvod.cena}</td>
            <td><input type="number" name="" id="" min="0" value="1"></td>
            <td>${proizvod.cena}</td>
            <td><button class="obrisi" type="button"><i class="fa fa-trash"></i></button></td>
        `;
        teloTabele.appendChild(red);
    });

}
//popuniKorpu();
window.addEventListener("DOMContentLoaded",popuniKorpu);
