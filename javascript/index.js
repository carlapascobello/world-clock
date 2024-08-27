// Barcelona
function updateTime() {
  let barcelonaElement = document.querySelector("#barcelona");
  let barcelonaDateElement = barcelonaElement.querySelector(".date");
  let barcelonaTimeElement = barcelonaElement.querySelector(".time");

  let barcelonaTime = moment().tz("Europe/Madrid");

  barcelonaDateElement.innerHTML = barcelonaTime.format("MMMM Do YYYY");
  barcelonaTimeElement.innerHTML = barcelonaTime.format(
    "hh:mm:ss:SSS [<small>]A[</small>]"
  );

  // Gaza
  let gazaElement = document.querySelector("#gaza");
  let gazaDateElement = gazaElement.querySelector(".date");
  let gazaTimeElement = gazaElement.querySelector(".time");

  let gazaTime = moment().tz("Asia/Gaza");

  gazaDateElement.innerHTML = gazaTime.format("MMMM Do YYYY");
  gazaTimeElement.innerHTML = gazaTime.format("hh:mm:ss [<small>]A[</small>]");
}

setInterval(updateTime, 1);
