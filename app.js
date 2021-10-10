const $button = document.querySelector(".button");
const inputValue = document.querySelector(".inputValue");
const dataAtual = document.querySelector(".date");
const $load = document.querySelector(".load");
// 36c6d7ee26bba92b944e3e4ecefc772e

$button.addEventListener("click", function() {

    $load.style.display = 'inline'
    $button.style.display = 'none'

    fetch(`https://api.openweathermap.org/data/2.5/weather?q=${inputValue.value}&appid=36c6d7ee26bba92b944e3e4ecefc772e&lang=pt_br&units=metric`)
        .then(response => response.json())
        .then(data => {
            console.log(data)
            const nameValue = data.name;
            const countryValue = data.sys.country;
            const descValue = data.weather[0].description;
            const currentDate = new Intl.DateTimeFormat('pt-BR', { dateStyle: 'full', }).format(new Date())
            const { temp, temp_max, temp_min } = data.main
            const { sunrise, sunset } = data.sys

            const a = new Date(sunrise).getUTCHours()
            console.log(a)



            const vouAparecerNoHtml = `
                <h1 class="nameCity">${nameValue}</h1>
                <p class="country">${countryValue}</p>
                <p class="date">${currentDate}</p>
                <p class="description">${descValue}</p>
                <p class="temp">${+temp.toFixed(0)}°C</p>
                <p>${+temp_max.toFixed(0)}°C Máxima</p>
                <p> ${+temp_min.toFixed(0)}°C Mínima</p>
                <hr class='line'> </hr>
                <p></p>
                <p>${sunrise}</p>
                <p>${sunset}</p>

            


            `


            document.querySelector('.display').innerHTML = vouAparecerNoHtml

        })
        .catch(err => alert("Nome da cidade errado !"))
        .finally(() => {
            $load.style.display = 'none'
            $button.style.display = 'block'
        })





})



// // promesas 
// fetch(`https://api.openweathermap.org/data/2.5/weather?q=${inputValue.value}&appid=36c6d7ee26bba92b944e3e4ecefc772e`)
//     .then(response => response.json())
//     .then(data => console.log(data))

// .catch(err => alert("Nome da cidade errado !"))