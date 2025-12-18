//London
function updateLondonTime() {
  let london = document.querySelector("#london");
  let londonDate = london.querySelector(".date");
  let londonTime = london.querySelector(".time");
  londonDate.innerHTML = moment().tz("Europe/London").format("MMMM Do YYYY");
  londonTime.innerHTML = `${moment()
    .tz("Europe/London")
    .format("h:mm:ss")} <small>${moment().format("A")}</small>`;
}

updateLondonTime();
setInterval(updateLondonTime, 1000);
//Cancun
function updateCancunTime() {
  let cancun = document.querySelector("#cancun");
  let cancunDate = cancun.querySelector(".date");
  let cancunTime = cancun.querySelector(".time");
  cancunDate.innerHTML = moment().tz("America/Cancun").format("MMMM Do YYYY");
  cancunTime.innerHTML = `${moment()
    .tz("America/Cancun")
    .format("h:mm:ss")} <small>${moment().format("A")}</small>`;
}

updateCancunTime();
setInterval(updateCancunTime, 1000);
