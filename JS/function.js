//London
function updateTime() {
  let london = document.querySelector("#london");
  let londonDate = london.querySelector(".date");
  let londonTime = london.querySelector(".time");
  londonDate.innerHTML = moment().tz("Europe/London").format("MMMM Do YYYY");
  londonTime.innerHTML = `${moment()
    .tz("Europe/London")
    .format("h:mm:ss")} <small>${moment().format("A")}</small>`;
  //Cancun

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

  let lourde = document.querySelector("#lourde");
  let lourdeDate = lourde.querySelector(".date");
  let lourdeTime = lourde.querySelector(".time");
  lourdeDate.innerHTML = moment().tz("Europe/Lourde").format("MMMM Do YYYY");
  lourdeTime.innerHTML = `${moment()
    .tz("Europe/Lourde")
    .format("h:mm:ss")} <small>${moment().format("A")}</small>`;
}

updateTime();
setInterval(updateTime, 1000);
