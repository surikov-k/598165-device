 var mapLink = document.querySelector(".contacts-map");
var mapPopup = document.querySelector(".map-popup");
var closeMapPopup = mapPopup.querySelector(".modal-close");


 mapLink.addEventListener("click", function (evt) {
    evt.preventDefault();
    mapPopup.classList.add("modal-show");
  });

  closeMapPopup.addEventListener("click", function (evt) {
    evt.preventDefault();
    mapPopup.classList.remove("modal-show");
  });
