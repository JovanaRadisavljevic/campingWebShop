window.addEventListener('DOMContentLoaded',()=>{
    const container = document.querySelector('.recepti');

     let receptiData = [];

    fetch('https://dummyjson.com/recipes')
    .then(res => res.json())
    .then(data => {
        receptiData = data.recipes.slice(0, 10); 
        kratakPrikazRecepta(receptiData);
    }).catch(error => {
      console.error('Greška pri fetchovanju:', error);
    });

    function kratakPrikazRecepta(recepti){
        container.innerHTML = ``;

        recepti.forEach((recept,index) => {
            const div = document.createElement('div');
            div.classList.add('recept');
            div.setAttribute('data-id', index);//da bih mogla da ga nadjem i otvorim

            div.innerHTML= `
                    <h3>${recept.name}</h3>
                    <img src="${recept.image}" alt="Slika recepta" style="width:100%; max-height:250px; object-fit:cover; border-radius:8px;">
                    <p><strong>Vreme:</strong> ${recept.prepTimeMinutes + recept.cookTimeMinutes} min | 
                    <strong>Ocena:</strong> ⭐ ${recept.rating}</p>
                    <p>${recept.instructions.slice(0, 100)}...</p>
                `;
            //svakom divu dodaj listner za klik
            div.addEventListener("click",()=>{
                prikaziCeoRecept(index);
            });

            //dodaj recept u div recepata
            container.appendChild(div);
        });
    }
    function prikaziCeoRecept(index){
        //pronadji recept(objekat)
        const recept = receptiData[index];
        //uzmi sastojke recepta
        const sastojci= recept.ingredients.map(s => `<li>${s}</li>`).join('');
        //samo jedan element moze da bude aktivan
        //pa ako sam vec jednom pre ovog klika kliknula na neki recept
        //sada treba da ga ponistim da bude i on "obican" tj da svi budu kratkog opisa
        kratakPrikazRecepta(receptiData);

        //pronadji div kliknutog recepta
        const receptDiv = container.querySelector(`[data-id="${index}"]`);
        receptDiv.classList.add('recept-aktivan');
        receptDiv.innerHTML += `
            <h4>Sastojci:</h4>
            <ul>${sastojci}</ul>
            <h4>Način pripreme:</h4>
            <p>${recept.instructions}</p>
        `;
    }

});