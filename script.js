// City
document.querySelector(".city__select").onchange = f;

function f() {
let city = document.querySelector(".city__select");
console.log(city.options);
    
const id = city.options[city.selectedIndex].id;

if (document.querySelector(`.${id}`).selected) {
    fetch(`http://api.openweathermap.org/data/2.5/weather?id=${city.value}&appid=5d4a6fb4ee4e444b503d636c0cfd236d`)
        .then(function (resp) { return resp.json() })
        .then(function (data) {
            document.querySelector(`.${id}`).innerHTML = data.name;
            document.querySelector(".temp__real").innerHTML = Math.round(data.main.temp - 273.15) + "&deg";
            document.querySelector(".temp__feel").innerHTML = "&nbsp" + Math.round(data.main.feels_like - 273.15) + "&deg";
            document.querySelector(".icon").innerHTML = `<img src="https://openweathermap.org/img/wn/${data.weather[0].icon}@2x.png">`;
            document.querySelector(".weather").innerHTML = data.weather[0].main;
            })
        .catch(function () {
        });
}

// Date

    let day_arr = ["sun", "mon", "tue", "wed", "thu", "fri", "sat"];
    let day = new Date().getDay();

    document.querySelector(".date__day").innerHTML = day_arr[day];

    let month_arr = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"];
    let month = new Date().getMonth();

    document.querySelector(".date__dm").innerHTML = `<span class="date__d">${new Date().getDate()}</span> ${month_arr[month]}`;
}

// Theme
// let wallpaper = document.querySelector('.wallpaper');
// let themeButton = document.querySelector('.theme-button');
// themeButton.onclick = function () {
//     wallpaper.classList.toggle('light-theme');
//     wallpaper.classList.toggle('dark-theme');
//     }
