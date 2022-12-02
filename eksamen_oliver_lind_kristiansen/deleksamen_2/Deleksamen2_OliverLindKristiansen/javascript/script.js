const menu = document.getElementById("main-menu");
menu.style.display = "none";

const hamMenu = () => {
  if (menu.style.display == "none") {
    menu.style.display = "block";
  } else {
    menu.style.display = "none";
  }
};
// Viser navbaren i mobile-view hvis du trykker på ham-punktet

const socials = document.getElementById("socials");
socials.style.display = "flex";

const hideSocials = () => {
  if (socials.style.display == "flex") {
    socials.style.display = "none";
  } else {
    socials.style.display = "flex";
  }
};