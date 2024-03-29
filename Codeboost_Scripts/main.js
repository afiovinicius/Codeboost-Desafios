// Campo de senha (para telas de login ou cadastro)
const btnEye = document.querySelector(".btn-eye");
const inputPasswd = document.querySelector("#i-passwd");
const iconPasswd = document.querySelector(".eye-passwd");

btnEye.addEventListener("click", () => {
  if (inputPasswd.getAttribute("type") === "password") {
    inputPasswd.setAttribute("type", "text");
    iconPasswd.setAttribute("src", "./eye.svg");
  } else {
    inputPasswd.setAttribute("type", "password");
    iconPasswd.setAttribute("src", "./eye-slash.svg");
  }
});

const itemAccordion = document.querySelectorAll("#ac li");

itemAccordion.forEach((navt) => {
  navt.addEventListener("click", (e) => {
    e.preventDefault();

    itemAccordion.forEach((navtr) => {
      navtr.classList.remove("active");
    });

    navt.classList.add("active");
  });
});
