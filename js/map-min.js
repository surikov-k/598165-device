var mapLink=document.querySelector(".contacts-map"),mapPopup=document.querySelector(".map-popup"),closeMapPopup=mapPopup.querySelector(".modal-close");mapLink.addEventListener("click",function(e){e.preventDefault(),mapPopup.classList.add("modal-show")}),closeMapPopup.addEventListener("click",function(e){e.preventDefault(),mapPopup.classList.remove("modal-show")});