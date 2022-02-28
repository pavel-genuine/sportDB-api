
const searchData = () =>{

  document.getElementById('spinner').style.display='block' 
  document.getElementById('cards').innerHTML=''   

 const searchText = document.getElementById('search').value

 const url = `https://www.thesportsdb.com/api/v1/json/2/searchplayers.php?p=${searchText} `

 fetch(url)
 .then(res=>res.json())
 .then(data=>{

  if ( data.player==null|| searchText.length==0){
    document.getElementById('spinner').style.display='none' 

    // document.getElementById('cards').innerHTML=''
  
    document.getElementById('detail').innerHTML=''   
  
   document.getElementById('cards').innerHTML="no results found"

   document.getElementById('search').value=''
  } 

  else{
    document.getElementById('spinner').style.display='none'    

    display(data.player)
  }

 } )
}


const display = data=>{

    console.log(data);
    const cards = document.getElementById('cards')
    cards.innerHTML=''
    document.getElementById('detail').innerHTML=''
  
    data.forEach(player =>{

        const card = document.createElement('div')
        
        card.classList.add('col')
        card.innerHTML=`
        <div onclick='displayDetail(${player.idPlayer})' class="card">
          <img src="${player.strThumb ? player.strThumb :'https://jorgeraziel.com/wp-content/themes/consultix/images/no-image-found-360x260.png'}" class="card-img-top" alt="no results">
          <div class="card-body">
            <h5 class="card-title">${player.strPlayer}</h5>
            <p class="card-text">${player.strBirthLocation}</p>
          </div>
       </div>
        `
        cards.appendChild(card)
    })
  

document.getElementById('search').value=''

}

const displayDetail= id =>{

    const url = `https://www.thesportsdb.com/api/v1/json/2/lookupplayer.php?id=${id}`

    fetch(url)
    .then(res=>res.json())
    .then(data=>showDetail(data.players[0]))
}

const showDetail=player=>{
    console.log(player);
   
    const detail = document.getElementById('detail')

    detail.innerHTML=`
    <div class=" w-25 card">
          <img src="${player.strThumb ? player.strThumb :''}" class="card-img-top" alt="...">
          <div class="card-body">
            <h5 class="card-title">${player.strPlayer}</h5>
            <p class="card-text">${player.strBirthLocation}</p>
          </div>
       </div>
    `
}

 