const selectBreed = document.querySelector('#selectBreed')
const viewDog = document.querySelector('#viewDog')

let ajaxSearch = function () {


 $.ajax({
   type: 'GET',
   url: DOG_API,
   async: true,
   dataType: 'json',
   success: function (data) {
     console.log(data);

     for(let i in data.message){
       // console.log(data.message[i]);
       selectBreed.innerHTML += `
         <option value='${data.message[i]}'>${data.message[i]}</option>
       `
     }
   },
   error: function (err) {
     console.log('error');
   }

 })
}

window.addEventListener('load', ajaxSearch)

viewDog.addEventListener('click', function () {
 let breedName = selectBreed.options[selectBreed.selectedIndex].text
 console.log(breedName);

 const RANDOM_IMAGE = `https://dog.ceo/api/breed/${breedName}/images/random`

 $.ajax({
   typr: 'GET',
   url: RANDOM_IMAGE,
   async: true,
   dataType: 'json',
   success: function (data) {
     //console.log(data.message);

     document.getElementById('breedImage').setAttribute('src', `${data.message}`)
   },
   error: function (err) {
     console.log('error');
   }
 })
})

const DOG_API = 'https://dog.ceo/api/breeds/list'
