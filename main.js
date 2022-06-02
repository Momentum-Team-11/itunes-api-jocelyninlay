const form = document.querySelector('#form')

form.addEventListener("submit", function (event){
    event.preventDefault()
    console.log("event happened!")
    const formData = new FormData(event.target);
    console.log(formData.keys())
   const asString = new URLSearchParams(formData).toString('');
   console.log(asString);
  let url = (`https://proxy-itunes-api.glitch.me/search?${asString}&entity=song&limit=6`) 
fetch(url)
.then(function(response){
    console.log(response)
    return response.json()
})
.then (function(data){
    console.log(data) 

// for (let i = 0; i < data.results.length; i++) {
//     console.log('the value of i is:' , i) 
//     console.log('the artist name is' , data.results[i].artistName, 'the song is', data.results[i].trackName)  
//     document.querySelector('.musicimg0').innerHTML +=`<img src=${data.results[i].artworkUrl100}/>`
//     document.querySelector('.play0').innerHTML +=`<a href="${data.results[0].previewUrl}">play</a>`
//     document.querySelector('.track0').innerHTML +=`<div>${data.results[i].trackName}</div>`
//     document.querySelector('.artist0').innerHTML +=`<div>${data.results[i].artistName}</div>`
// }


    document.querySelector('.musicimg0').innerHTML +=`<img src=${data.results[0].artworkUrl100}/>`
    document.querySelector('.play0').innerHTML +=`<audio controls src="${data.results[0].previewUrl}">play</audio>`
    document.querySelector('.track0').innerHTML +=`<div>${data.results[0].trackName}</div>`
    document.querySelector('.artist0').innerHTML +=`<div>${data.results[0].artistName}</div>`

    document.querySelector('.musicimg1').innerHTML +=`<img src=${data.results[1].artworkUrl100}/>`
    document.querySelector('.play1').innerHTML +=`<audio controls src="${data.results[1].previewUrl}">play</audio>`
    document.querySelector('.track1').innerHTML +=`<div>${data.results[1].trackName}</div>`
    document.querySelector('.artist1').innerHTML +=`<div>${data.results[1].artistName}</div>`

    document.querySelector('.musicimg2').innerHTML +=`<img src=${data.results[2].artworkUrl100}/>`
    document.querySelector('.play2').innerHTML +=`<audio controls src="${data.results[2].previewUrl}">play</audio>`
    document.querySelector('.track2').innerHTML +=`<div>${data.results[2].trackName}</div>`
    document.querySelector('.artist2').innerHTML +=`<div>${data.results[2].artistName}</div>`

    document.querySelector('.musicimg3').innerHTML +=`<img src=${data.results[3].artworkUrl100}/>`
    document.querySelector('.play3').innerHTML +=`<audio controls src="${data.results[3].previewUrl}">play</audio>`
    document.querySelector('.track3').innerHTML +=`<div>${data.results[3].trackName}</div>`
    document.querySelector('.artist3').innerHTML +=`<div>${data.results[3].artistName}</div>`

    document.querySelector('.musicimg4').innerHTML +=`<img src=${data.results[4].artworkUrl100}/>`
    document.querySelector('.play4').innerHTML +=`<audio controls src="${data.results[4].previewUrl}">play</audio>`
    document.querySelector('.track4').innerHTML +=`<div>${data.results[4].trackName}</div>`
    document.querySelector('.artist4').innerHTML +=`<div>${data.results[4].artistName}</div>`   

    document.querySelector('.musicimg5').innerHTML +=`<img src=${data.results[5].artworkUrl100}/>`
    document.querySelector('.play5').innerHTML +=`<audio controls src="${data.results[5].previewUrl}">play</audio>`
    document.querySelector('.track5').innerHTML +=`<div>${data.results[5].trackName}</div>`
    document.querySelector('.artist5').innerHTML +=`<div>${data.results[5].artistName}</div>`

    document.querySelector('.musicimg6').innerHTML +=`<img src=${data.results[6].artworkUrl100}/>`
    document.querySelector('.play6').innerHTML +=`<audio controls src="${data.results[6].previewUrl}">play</audio>`
    document.querySelector('.track6').innerHTML +=`<div>${data.results[6].trackName}</div>`
    document.querySelector('.artist6').innerHTML +=`<div>${data.results[6].artistName}</div>`
})




}) 

