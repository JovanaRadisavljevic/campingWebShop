document.getElementById("registracijaBtn").addEventListener("click", function(e){
    e.preventDefault();

    let imePrezime = document.getElementById("ime_prezime").value.trim();
    let email = document.getElementById("email").value.trim();
    let lozinka = document.getElementById("lozinka").value;
    let lozinkaPonovo = document.getElementById("ponovi_lozinku").value;
    let telefon = document.getElementById("telefon").value.trim();
    let adresa = document.getElementById("adresa").value.trim();
    let datumRodjenja = document.getElementById("datum_rodjenja").value;
    let pol = document.getElementById("pol").value;
    let uslov = document.getElementById("uslov").checked;

    if (!uslov) {
        alert("Morate prihvatiti uslove korišćenja!");
        return;
    }
    if(lozinka!== lozinkaPonovo) {
        alert("Lozinke se ne poklapaju!");
        return;
    }
    if(lozinka.length<8) {
        alert("Lozinka mora imati najmanje 8 karaktera!");
        return;
    } 
    if(!telefon.startsWith("+381")){
        alert("Telefon mora početi sa +381!");
        return;
    }
    //datum mora da bude u proslosti
    let sadasnjiDatum = new Date();
    let datumRObj = new Date(datumRodjenja);
    if(datumRObj>=sadasnjiDatum){
        alert("Datum rođenja mora biti u prošlosti!");
        return;
    }
    //da li korisnik vec postoji
    let sviKorisnici = JSON.parse(localStorage.getItem("sviKorisnici")) || [];
    let sviMejlovi = sviKorisnici.map((k)=>k.email);
    if(sviMejlovi.includes(email)) {
        alert("Email već postoji!");
        return;
    }

    let noviKorisnik = {
        ime_prezime: imePrezime,
        email: email,
        lozinka: lozinka,
        lozinkaPonovo: lozinkaPonovo,
        telefon: telefon,
        adresa: adresa,
        datum_rodjenja: datumRodjenja,
        pol: pol
    };

    sviKorisnici.push(noviKorisnik);
    localStorage.setItem("sviKorisnici",JSON.stringify(sviKorisnici));
    alert("Uspesno ste se registrovali!");
    window.location.href="prijava.html";
    document.getElementById("formaRegistracija").reset();  
})