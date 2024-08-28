function updateCity(event) {
  function updateTime() {
    let cityTimeZone = event.target.value;
    if (cityTimeZone === "current") {
      cityTimeZone = moment.tz.guess();
    }
    let cityName = cityTimeZone.replace("_", " ").split("/")[1];
    let citiesElement = document.querySelector("#cities");
    let cityDate = moment().tz(cityTimeZone).format("MMMM Do YYYY");
    let cityTime = moment()
      .tz(cityTimeZone)
      .format("hh:mm:ss [<small>]A[</small>]");

    let cityData = `<div class="city" id="barcelona">
          <div>
            <h2 id="name">${cityName}</h2>
            <div class="date">${cityDate}</div>
          </div>
          <div class="time">${cityTime}</div>
        </div>
        <a href="index.html">Show cities</a>`;

    citiesElement.innerHTML = cityData;
  }

  updateTime();
  setInterval(updateTime, 1000);
}

let citySelectElement = document.querySelector("#city");

citySelectElement.addEventListener("change", updateCity);
