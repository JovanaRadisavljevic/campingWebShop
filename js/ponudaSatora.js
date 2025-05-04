const proizvodi = [
    {
        id: 1,
        slika: "/images/sator.jpg",
        naziv: "Expedition Pro sator",
        bred: "Mammut",
        staracena: "18500",
        trenutna: "14999",
    },
    {
        id: 2,
        slika: "/images/sator.jpg",
        naziv: "Camping Comfort sator",
        bred: "Deuter",
        staracena: "",
        trenutna: "12450",
    },
    {
        id: 3,
        slika: "/images/sator.jpg",
        naziv: "Trekking 300 sator",
        bred: "Forclaz",
        staracena: "",
        trenutna: "9800",
    },
    {
        id: 4,
        slika: "/images/sator.jpg",
        naziv: "Alpine Shelter sator",
        bred: "Salewa",
        staracena: "22000",
        trenutna: "18900",
    },
    {
        id: 5,
        slika: "/images/sator.jpg",
        naziv: "Travel Dome sator",
        bred: "Ferrino",
        staracena: "16500",
        trenutna: "13200",
    },
    {
        id: 6,
        slika: "/images/sator.jpg",
        naziv: "Hiking Hub sator",
        bred: "Salewa",
        staracena: "17800",
        trenutna: "15200",
    },
    {
        id: 7,
        slika: "/images/sator.jpg",
        naziv: "Weekend Escape sator",
        bred: "Deuter",
        staracena: "12800",
        trenutna: "10900",
    },
    {
        id: 8,
        slika: "/images/sator.jpg",
        naziv: "Explorer Base sator",
        bred: "Forclaz",
        staracena: "24500",
        trenutna: "19900",
    },
    {
        id: 9,
        slika: "/images/sator.jpg",
        naziv: "City Camp sator",
        bred: "Ferrino",
        staracena: "",
        trenutna: "8700",
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
