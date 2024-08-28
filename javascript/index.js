function updateTime() {
  // Barcelona
  let barcelonaElement = document.querySelector("#barcelona");
  if (barcelonaElement) {
    let barcelonaDateElement = barcelonaElement.querySelector(".date");
    let barcelonaTimeElement = barcelonaElement.querySelector(".time");
    let barcelonaTime = moment().tz("Europe/Madrid");

    barcelonaDateElement.innerHTML = barcelonaTime.format("MMMM Do YYYY");
    barcelonaTimeElement.innerHTML = barcelonaTime.format(
      "hh:mm:ss [<small>]A[</small>]"
    );
  }

  // Gaza
  let gazaElement = document.querySelector("#gaza");
  if (gazaElement) {
    let gazaDateElement = gazaElement.querySelector(".date");
    let gazaTimeElement = gazaElement.querySelector(".time");
    let gazaTime = moment().tz("Asia/Gaza");

    gazaDateElement.innerHTML = gazaTime.format("MMMM Do YYYY");
    gazaTimeElement.innerHTML = gazaTime.format(
      "hh:mm:ss [<small>]A[</small>]"
    );
  }

  // Manila
  let manilaElement = document.querySelector("#manila");
  if (gazaElement) {
    let manilaDateElement = manilaElement.querySelector(".date");
    let manilaTimeElement = manilaElement.querySelector(".time");
    let manilaTime = moment().tz("Asia/Manila");

    manilaDateElement.innerHTML = manilaTime.format("MMMM Do YYYY");
    manilaTimeElement.innerHTML = manilaTime.format(
      "hh:mm:ss [<small>]A[</small>]"
    );
  }
}

updateTime();
setInterval(updateTime, 1000);

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

    let cityData = `<div class="city">
          <div>
            <h2 id="name">${cityName}</h2>
            <div class="date">${cityDate}</div>
          </div>
          <div class="time">${cityTime}</div>
        </div>
        <a href="index.html">Show cities</a>`;

    citiesElement.innerHTML = cityData;
  }

  setInterval(updateTime, 1000);
}

let citySelectElement = document.querySelector("#city");
citySelectElement.addEventListener("change", updateCity);
