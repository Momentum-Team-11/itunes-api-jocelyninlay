const form = document.querySelector('#form')

form.addEventListener("submit", function (event){
    event.preventDefault()
    console.log("event happened!")
    const formData = new FormData(event.target);
   const asString = new URLSearchParams(formData).toString('');
   console.log(asString);
  let url = (`https://itunes.apple.com/search?${asString}`)
fetch(url)
.then(function(response){
    console.log(response)
    return response.json()
})
.then (function(data){
    console.log(data) 

})}) 
