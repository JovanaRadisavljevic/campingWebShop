const proizvodi = [
    {
        id: 1,
        slika: "/images/ranac.jpg",
        naziv: "Expedition ranac",
        bred: "Mammut",
        staracena: "12.500 RSD",
        trenutna: "9.999 RSD",
    },
    {
        id: 2,
        slika: "/images/ranac.jpg",
        naziv: "Futura Pro ranac",
        bred: "Deuter",
        staracena: "",
        trenutna: "8.450 RSD",
    },
    {
        id: 3,
        slika: "/images/ranac.jpg",
        naziv: "Trekking 500 ranac",
        bred: "Forclaz",
        staracena: "",
        trenutna: "11.200 RSD",
    },
    {
        id: 4,
        slika: "/images/ranac.jpg",
        naziv: "Alpine Flow ranac",
        bred: "Salewa",
        staracena: "14.800 RSD",
        trenutna: "12.300 RSD",
    },
    {
        id: 5,
        slika: "/images/ranac.jpg",
        naziv: "Travel Light ranac",
        bred: "Ferrino",
        staracena: "10.900 RSD",
        trenutna: "7.950 RSD",
    },
    {
        id: 6,
        slika: "/images/ranac.jpg",
        naziv: "Hiking Pro ranac",
        bred: "Salewa",
        staracena: "13.200 RSD",
        trenutna: "10.750 RSD",
    },
    {
        id: 7,
        slika: "/images/ranac.jpg",
        naziv: "Weekend ranac",
        bred: "Deuter",
        staracena: "9.500 RSD",
        trenutna: "8.200 RSD",
    },
    {
        id: 8,
        slika: "/images/ranac.jpg",
        naziv: "Explorer ranac",
        bred: "Forclaz",
        staracena: "16.000 RSD",
        trenutna: "13.500 RSD",
    },
    {
        id: 9,
        slika: "/images/ranac.jpg",
        naziv: "City Trek ranac",
        bred: "Ferrino",
        staracena: "",
        trenutna: "6.900 RSD",
    },
];
function ucitajProizvode(){
    const svirancevidiv = document.getElementById("svirancevi");
    svirancevidiv.innerHTML="";

    proizvodi.forEach(p => {
        const divRanac = document.createElement("div");
        divRanac.classList.add("ranac");
        const staraCenaHtml = p.staracena ? `<span class="staracena">${p.staracena}</span>` : '';
        divRanac.innerHTML = `
            <div class="slika">
                <img src="${p.slika}" alt="${p.naziv}">
            </div>
            <p class="p-brend"><strong>${p.bred}</strong></p>
            <p>${p.naziv}</p>
            ${staraCenaHtml}
            <span class="trenutna">${p.trenutna}</span>
            <button class="info">Više informacija</button>
            <button class="dodaj">Dodaj u korpu</button>
        `;
        svirancevidiv.appendChild(divRanac);
    });
}
window.addEventListener("DOMContentLoaded",ucitajProizvode);