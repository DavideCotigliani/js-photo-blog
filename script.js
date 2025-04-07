//dichiaro le variabili che mi servono
const endpoint= 'https://lanciweb.github.io/demo/api/pictures/'


// funzione per creare le card, all'interno genero la chiamata AJAX

const picturesCard =()=>{
    axios.get(endpoint).then(res=>{
     const details= res.data; // ottengo i dati dell'elemento (array di oggetti)
     
        // const array = details.filter((item) =>(item.title))

//         const card =   ` <div class="col-12 col-md-6 col-lg-4">
//                     <div class="card mt-5 pt-3 px-3">
//                         <img src="${details.url}" class="img-fluid" alt="">
//                         <img src="./img/pin.svg" class="pin-rosso" alt="">
//                         <span class="card-text py-1 text-center">${details.title} ${details.date}</span>
//                     </div>
//                 </div>`;

// return card;
//     })
}
    picturesCard()


// altra parte (provvisoria)
// const renderCard= ()=>{

// let allCards= "";

// for(let i= 0; i<details.length; i++){
//     allCards += picturesCard(details[i])
// }
// document.getElementById('card-pictures').innerHTML= allCards;
// }
// renderCard();