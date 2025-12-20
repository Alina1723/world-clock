function updateTime() {
  let london = document.querySelector("#london");
  let londonDate = london.querySelector(".date");
  let londonTime = london.querySelector(".time");
  londonDate.innerHTML = moment().tz("Europe/London").format("MMMM Do YYYY");
  londonTime.innerHTML = `${moment()
    .tz("Europe/London")
    .format("h:mm:ss")} <small>${moment().format("A")}</small>`;

  let cancun = document.querySelector("#cancun");
  let cancunDate = cancun.querySelector(".date");
  let cancunTime = cancun.querySelector(".time");
  cancunDate.innerHTML = moment().tz("America/Cancun").format("MMMM Do YYYY");
  cancunTime.innerHTML = `${moment()
    .tz("America/Cancun")
    .format("h:mm:ss")} <small>${moment().format("A")}</small>`;

  let tallinn = document.querySelector("#tallinn");
  let tallinnDate = tallinn.querySelector(".date");
  let tallinnTime = tallinn.querySelector(".time");
  tallinnDate.innerHTML = moment().tz("Europe/Tallinn").format("MMMM Do YYYY");
  tallinnTime.innerHTML = `${moment()
    .tz("Europe/Tallinn")
    .format("h:mm:ss")} <small>${moment().format("A")}</small>`;

  let canary = document.querySelector("#canary");
  let canaryDate = canary.querySelector(".date");
  let canaryTime = canary.querySelector(".time");
  canaryDate.innerHTML = moment().tz("Atlantic/Canary").format("MMMM Do YYYY");
  canaryTime.innerHTML = `${moment()
    .tz("Atlantic/Canary")
    .format("h:mm:ss")} <small>${moment().format("A")}</small>`;
}

function updateCity(event) {
  let cityTimeZone = event.target.value;
  let cityName = cityTimeZone.replace("_", " ").split("/")[1];
  let cityTime = moment().tz(cityTimeZone);
  let cityDate = moment().tz(cityTimeZone);
  let cityElement = document.querySelector("#citiesData");
  cityElement.innerHTML = `
          <div class="city">
          <div>
            <h4>${cityName}</h4>
            <div class="date">${cityDate.format("MMMM Do YYYY")}</div>
          </div>
          <div class="time">${cityTime.format(
            "h:mm:ss"
          )} <small>${cityTime.format("A")}</small></div>
        </div>
  `;
}

updateTime();
setInterval(updateTime, 1000);

let citiesSelect = document.querySelector("#cities");
citiesSelect.addEventListener("change", updateCity);
