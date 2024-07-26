const loginlink = document.querySelector(".login-link");
const registerlink = document.querySelector(".register-link");
const btnPopup = document.querySelector(".btnlogin-popup");
const iconclose = document.querySelector(".icon-close");
const wrapper = document.querySelector(".wrapper");

if (registerlink) {
  registerlink.addEventListener("click", () => {
    wrapper.classList.add("active");
  });
}

if (loginlink) {
  loginlink.addEventListener("click", () => {
    wrapper.classList.remove("active");
  });
}

if (btnPopup) {
  btnPopup.addEventListener("click", () => {
    wrapper.classList.add("active-popup");
  });
}

if (iconclose) {
  iconclose.addEventListener("click", () => {
    wrapper.classList.remove("active-popup");
  });
}
