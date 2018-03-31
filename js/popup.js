 var link = document.querySelector(".js-write-us-button");

  var popup = document.querySelector(".write-us-popup");
  var closePopup = popup.querySelector(".modal-close");

  var form = popup.querySelector(".write-us-form");
  var userName = popup.querySelector("[name=user-name]");
  var email = popup.querySelector("[name=email]");
  var letter = popup.querySelector("[name=letter]");

  var isStorageSupport = true;
  var storageEmail = "";
  var storageLetter = "";
  var storageName = "";

  try {
    storageName = localStorage.getItem("name");
    storageEmail = localStorage.getItem("email");
    storageLetter = localStorage.getItem("letter");
  } catch (err) {
    isStorageSupport = false;
  }


  link.addEventListener("click", function (evt) {
    evt.preventDefault();
    popup.classList.add("modal-show");

    userName.focus();

    if (storageName) {
      userName.value = storageName;
      email.focus();}

    if (storageEmail) {
      email.value = storageEmail;
      letter.focus();}

    if (storageLetter) {
      letter.value = storageLetter;
      letter.focus();
    }

  });

  closePopup.addEventListener("click", function (evt) {
    evt.preventDefault();
    popup.classList.remove("modal-show");
    popup.classList.remove("modal-error");
  });

  form.addEventListener("submit", function (evt) {
    if (!userName.value || !email.value || !letter.value) {
      evt.preventDefault();
      popup.classList.remove("modal-error");
      popup.offsetWidth = popup.offsetWidth;
      popup.classList.add("modal-error");
    } else {
      if (isStorageSupport) {
        localStorage.setItem("name",userName.value);
        localStorage.setItem("email",email.value);
        localStorage.setItem("letter",letter.value);
      }
    }
  });

  window.addEventListener("keydown", function (evt) {
    if (evt.keyCode === 27) {
      evt.preventDefault();
      if (popup.classList.contains("modal-show")) {
        popup.classList.remove("modal-show");
        popup.classList.remove("modal-error");
      }
    }
  });
