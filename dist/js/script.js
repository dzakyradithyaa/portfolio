// Navbar Fixed
window.onscroll = function () {
  const header = document.querySelector("header");
  const fixedNav = header.offsetTop;
  if (window.pageYOffset > fixedNav) {
    header.classList.add("navbar-fixed");
  } else {
    header.classList.remove("navbar-fixed");
  }
};

//Hamburger
const hamburger = document.querySelector("#hamburger");
const navMenu = document.querySelector("#nav-menu");
hamburger.addEventListener("click", function () {
  hamburger.classList.toggle("hamburger-active");
  navMenu.classList.toggle("hidden");
});

//form
function sendMessage() {
  (function () {
    emailjs.init("zwaIRTwYrW7trxY1P"); //Account Public Key
  })();
  var serviceID = "service_fpesdss"; //Email Service ID
  var templateID = "template_d9qgw0p"; //Email Template ID
  var params = {
    sendername: document.querySelector("#name").value,
    senderemail: document.querySelector("#email").value,
    message: document.querySelector("#message").value,
  };
  emailjs
    .send(serviceID, templateID, params)
    .then((res) => {
      alert(
        "Thank you " +
          params["sendername"] +
          "!, Your message has been sent & privacy."
      );
    })
    .catch();
}
