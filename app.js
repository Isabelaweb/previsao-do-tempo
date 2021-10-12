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
            const { temp, temp_max, temp_min, humidity } = data.main
            const { sunrise, sunset } = data.sys




            const vouAparecerNoHtml = `
                <div class= "container-city-information">
                <h1 class="name-city">${nameValue},</h1>
                <p class="country">${countryValue}</p>
                </div>
                <p class="date">${currentDate}</p>
                <div class="temp-information">
                <p class="temp-max-min"> ${+temp_min.toFixed(0)}°C Mínima</p>
                <p class="temp">${+temp.toFixed(0)}°C</p>
                <p class="temp-max-min">${+temp_max.toFixed(0)}°C Máxima</p>
                </div>
                <p class="description">${descValue}</p>
                <hr class='line'> </hr>
                <p> umidade ${humidity}%</p>
                <p> Nascer do Sol ${getHour(sunrise)}</p>
                <p>  Pôr do Sol ${getHour(sunset)}</p>

            


            `


            document.querySelector('.display').innerHTML = vouAparecerNoHtml

        })
        .catch(err => alert("Nome da cidade errado !"))
        .finally(() => {
            $load.style.display = 'none'
            $button.style.display = 'block'
        })





})

function getHour(timestamp) {
    const dtFormat = new Intl.DateTimeFormat('pt-BR', {
        timeStyle: 'short',
        timeZone: 'America/Sao_Paulo'
    });

    return dtFormat.format(new Date(timestamp * 1000));
}



// // promesas 
// fetch(`https://api.openweathermap.org/data/2.5/weather?q=${inputValue.value}&appid=36c6d7ee26bba92b944e3e4ecefc772e`)
//     .then(response => response.json())
//     .then(data => console.log(data))

// .catch(err => alert("Nome da cidade errado !"))