var button = document.querySelector(".button");
var inputValue = document.querySelector(".inputValue");
var nameCity = document.querySelector(".nameCity");
var country = document.querySelector(".country")
var description = document.querySelector(".description");
var temp = document.querySelector(".temp");
var dataAtual = document.querySelector(".date")

// 36c6d7ee26bba92b944e3e4ecefc772e

button.addEventListener("click", function() {

    fetch(`https://api.openweathermap.org/data/2.5/weather?q=${inputValue.value}&appid=36c6d7ee26bba92b944e3e4ecefc772e`)
        .then(response => response.json())
        .then(data => {
            console.log(data)
            var nameValue = data["name"];
            var countryValue = data["sys"]["country"];
            var tempValue = data["main"]["tempo"];
            var descValue = data["weather"][0]["description"];

            nameCity.innerHTML = nameValue;
            country.innerHTML = countryValue;
            temp.innerHTML = tempValue;
            description.innerHTML = descValue
            datePresent = dataAtual
        })
        .catch(err => alert("Nome da cidade errado !"))
})

button.addEventListener("click", function() {
    var dataValue = new Date()
    dataAtual.innerHTML = dataValue;
})

// // promesas 
// fetch(`https://api.openweathermap.org/data/2.5/weather?q=${inputValue.value}&appid=36c6d7ee26bba92b944e3e4ecefc772e`)
//     .then(response => response.json())
//     .then(data => console.log(data))

// .catch(err => alert("Nome da cidade errado !"))