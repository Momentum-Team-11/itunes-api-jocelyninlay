const form = document.querySelector('#form')

form.addEventListener("submit", function (event){
    event.preventDefault()
    console.log("event happened!")
})

const iTunesUrl = 'https://itunes.apple.com/search?'

fetch(iTunesUrl)
.then(function(response){
    console.log(response)
    return response.json()
})
.then (function(data){
    console.log(data)

})