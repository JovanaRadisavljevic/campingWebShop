const proizvodi = [
    {
        id: 1,
        slika: "/images/ranac.jpg",
        naziv: "Expedition ranac",
        bred: "Mammut",
        staracena: "12500",
        trenutna: "9999",
    },
    {
        id: 2,
        slika: "/images/ranac.jpg",
        naziv: "Futura Pro ranac",
        bred: "Deuter",
        staracena: "",
        trenutna: "8450",
    },
    {
        id: 3,
        slika: "/images/ranac.jpg",
        naziv: "Trekking 500 ranac",
        bred: "Forclaz",
        staracena: "",
        trenutna: "11200",
    },
    {
        id: 4,
        slika: "/images/ranac.jpg",
        naziv: "Alpine Flow ranac",
        bred: "Salewa",
        staracena: "14800",
        trenutna: "12300",
    },
    {
        id: 5,
        slika: "/images/ranac.jpg",
        naziv: "Travel Light ranac",
        bred: "Ferrino",
        staracena: "10900",
        trenutna: "7950",
    },
    {
        id: 6,
        slika: "/images/ranac.jpg",
        naziv: "Hiking Pro ranac",
        bred: "Salewa",
        staracena: "13200",
        trenutna: "10750",
    },
    {
        id: 7,
        slika: "/images/ranac.jpg",
        naziv: "Weekend ranac",
        bred: "Deuter",
        staracena: "9500",
        trenutna: "8200",
    },
    {
        id: 8,
        slika: "/images/ranac.jpg",
        naziv: "Explorer ranac",
        bred: "Forclaz",
        staracena: "16000",
        trenutna: "13500",
    },
    {
        id: 9,
        slika: "/images/ranac.jpg",
        naziv: "City Trek ranac",
        bred: "Ferrino",
        staracena: "",
        trenutna: "6900",
    },
];

function dodajUkorpu(index){
    let korpa = JSON.parse(localStorage.getItem("korpa")) || [];
    korpa.push(proizvodi[index]);
    localStorage.setItem("korpa", JSON.stringify(korpa));
    alert('Proizvod je dodat u korpu.');
}

function ucitajProizvode(){
    const svirancevidiv = document.getElementById("svirancevi");
    svirancevidiv.innerHTML="";

    proizvodi.forEach((p,index) => {
        const divRanac = document.createElement("div");
        divRanac.classList.add("ranac");
        const staraCenaHtml = p.staracena ? `<span class="staracena">${p.staracena} RSD</span>` : '';
        divRanac.innerHTML = `
            <div class="slika">
                <img src="${p.slika}" alt="${p.naziv}">
            </div>
            <p class="p-brend"><strong>${p.bred}</strong></p>
            <p>${p.naziv}</p>
            ${staraCenaHtml}
            <span class="trenutna">${p.trenutna} RSD</span>
            <button class="info">Više informacija</button>
            <button data-id=${index} class="dodaj">Dodaj u korpu</button>
        `;
        svirancevidiv.appendChild(divRanac);
    });
    const dugmici = document.querySelectorAll(".dodaj");
    dugmici.forEach((dugme) => {
        dugme.addEventListener("click", ()=>{
            const index =dugme.getAttribute("data-id");
            dodajUkorpu(index);
        });
    });
}
window.addEventListener("DOMContentLoaded",ucitajProizvode);
