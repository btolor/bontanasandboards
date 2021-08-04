const popup = () => {
  document.getElementById("popup").style.display = "block";
  document.getElementById("mobile-menu").style.display = "none";
};
const popdown = () => {
  document.getElementById("popup").style.display = "none";
  document.getElementById("mobile-menu").style.display = "none";
};

const mobile_menu = () => {
  const element = document.getElementById("mobile-menu");
  const open_icon = document.getElementsByClassName("mobile-open");
  const close_icon = document.getElementsByClassName("mobile-close");
  if (element.style.display === "block") {
    element.style.display = "none";
    open_icon.style.display = "block";
    close_icon.style.display = "none";
  } else {
    element.style.display = "block";
    open_icon.style.display = "none";
    close_icon.style.display = "block";
  }
};
