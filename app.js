const $button = document.querySelector(".button");
const inputValue = document.querySelector(".inputValue");
const dataAtual = document.querySelector(".date");
const $load = document.querySelector(".load");
const $containerData = document.querySelector('.display')

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
                <div class="container-line">
                <hr class='line'> </hr>
                </div>
                <p class="details"> Umidade ${humidity}%</p>
                <p class="details"> Nascer do Sol ${getHour(sunrise)}</p>
                <p class="details"> Pôr do Sol ${getHour(sunset)}</p>
            `
            $containerData.innerHTML = vouAparecerNoHtml
        })
        .catch(err => alert("Oops, tente novamente, ocorreu um erro."))
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