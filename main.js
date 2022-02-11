const form = document.querySelector('#form')

form.addEventListener("submit", function (event){
    event.preventDefault()
    console.log("event happened!")
    const formData = new FormData(event.target);
    console.log(formData.keys())
   const asString = new URLSearchParams(formData).toString('');
   console.log(asString);
  let url = (`https://itunes.apple.com/search?${asString}&entity=song&limit=20`)
fetch(url)
.then(function(response){
    console.log(response)
    return response.json()
})
.then (function(data){
    console.log(data) 

for (let i = 0; i < data.results.length; i++) {
    console.log('the value of i is:' , i) 
    console.log('the artist name is' , data.results[i].artistName)  
document.querySelector('#music').innerHTML +=`<div>${data.results[i].artistName}</div>`
}
})
}) 
