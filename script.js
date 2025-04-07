//dichiaro le variabili che mi servono
const endpoint= 'https://lanciweb.github.io/demo/api/pictures/'


// funzione per creare le card, all'interno genero la chiamata AJAX
const picturesCard =()=>{
    axios.get(endpoint).then(res=>{
     const details= res.data; // ottengo i dati dell'elemento (array di oggetti)
     let cards= ''; // creo una stringa vuota in cui concatenerò i nuovi elementi
     details.forEach(item =>{   //itero gli elementi dell'array details
                const card =   ` <div class="col-12 col-md-6 col-lg-4">
                            <div class="card mt-5 mb-2 pt-3 px-3">
                                <img src="${item.url}" class="img-fluid" alt="">
                                <img src="./img/pin.svg" class="pin-rosso" alt="">
                                <span class= "card-title py-1 text-center"> ${item.title}</span>
                                <span class="card-text py-1 text-center">${item.date}</span>
                            </div>
                                </div>`;
                cards = cards + card;  //alla variabile cards concateno quella di card, cards +=card
                document.getElementById('card-pictures').innerHTML= cards; // recupero l'elemento dal dom e gli aggiungo l'elemento cards
                })
     })
}
    picturesCard()


    //con il ciclo for
    // for(let i=0; i<details.length;i ++){
    //     const item2= details[i];
    //     const card =   ` <div class="col-12 col-md-6 col-lg-4">
    //                         <div class="card mt-5 pt-3 px-3">
    //                             <img src="${item.url}" class="img-fluid" alt="">
    //                             <img src="./img/pin.svg" class="pin-rosso" alt="">
    //                             <span class="card-text py-1 text-center">${item.title} ${item.date}</span>
    //                         </div>
    //                             </div>`;
    //             cards += card;
    //             document.getElementById('card-pictures').innerHTML= cards;
    // }