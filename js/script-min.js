var link=document.querySelector(".js-write-us-button"),popup=document.querySelector(".write-us-popup"),closePopup=popup.querySelector(".modal-close"),form=popup.querySelector(".write-us-form"),userName=popup.querySelector("[name=user-name]"),email=popup.querySelector("[name=email]"),letter=popup.querySelector("[name=letter]"),isStorageSupport=!0,storageEmail="",storageLetter="",storageName="",mapLink=document.querySelector(".contacts-map"),mapPopup=document.querySelector(".map-popup"),closeMapPopup=mapPopup.querySelector(".modal-close");try{storageName=localStorage.getItem("name"),storageEmail=localStorage.getItem("email"),storageLetter=localStorage.getItem("letter")}catch(e){isStorageSupport=!1}link.addEventListener("click",function(e){e.preventDefault(),popup.classList.add("modal-show"),userName.focus(),storageName&&(userName.value=storageName,email.focus()),storageEmail&&(email.value=storageEmail,letter.focus()),storageLetter&&(letter.value=storageLetter,letter.focus())}),closePopup.addEventListener("click",function(e){e.preventDefault(),popup.classList.remove("modal-show"),popup.classList.remove("modal-error")}),form.addEventListener("submit",function(e){userName.value&&email.value&&letter.value?isStorageSupport&&(localStorage.setItem("name",userName.value),localStorage.setItem("email",email.value),localStorage.setItem("letter",letter.value)):(e.preventDefault(),popup.classList.remove("modal-error"),popup.offsetWidth=popup.offsetWidth,popup.classList.add("modal-error"))}),window.addEventListener("keydown",function(e){27===e.keyCode&&(e.preventDefault(),popup.classList.contains("modal-show")&&(popup.classList.remove("modal-show"),popup.classList.remove("modal-error")))}),mapLink.addEventListener("click",function(e){e.preventDefault(),mapPopup.classList.add("modal-show")}),closeMapPopup.addEventListener("click",function(e){e.preventDefault(),mapPopup.classList.remove("modal-show")});