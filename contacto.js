function main() {
  //Header//
  const headerContainer = document.querySelector(
    ".header__container--contacto"
  );
  header(headerContainer);
  hamburgerBarMobile();

  //Modificar los nombres del menu bar
  const firstEl = document.querySelector(".title--windows-portfolio");
  firstEl.textContent = "Home";
  const linkFirstEl = document.querySelector(".link--windows-portfolio");
  linkFirstEl.href = "./index.html";
  const secondEl = document.querySelector(".title--windows-servicios");
  secondEl.textContent = "Portfolio";
  const linkSecondEl = document.querySelector(".link--windows-servicios");
  linkSecondEl.href = "./portfolio.html";
  const thirdEl = document.querySelector(".title--windows-contacto");
  thirdEl.textContent = "Servicios";
  const linkThirdEl = document.querySelector(".link--windows-contacto");
  linkThirdEl.href = "./servicios.html";

  const firstDeskEl = document.querySelector(".paragraph--nav-portfolio");

  firstDeskEl.textContent = "Home";
  const linkFirstDeskEl = document.querySelector(".link--nav-portfolio");
  linkFirstDeskEl.href = "./index.html";
  const secondDeskEl = document.querySelector(".paragraph--nav-servicios");
  secondDeskEl.textContent = "Portfolio";
  const linkSecondDeskEl = document.querySelector(".link--nav-servicios");
  linkSecondDeskEl.href = "./portfolio.html";
  const thirdDeskEl = document.querySelector(".paragraph--nav-contacto");
  thirdDeskEl.textContent = "Servicios";
  const linkThirdDeskEl = document.querySelector(".link--nav-contacto");
  linkThirdDeskEl.href = "./servicios.html";

  document.querySelector(".subtitle").innerHTML = "";

  document.querySelector(".header__title").textContent = "Contacto";

  const headerContentEl = document.querySelector(".header__content");
  headerContentEl.classList.add("header__content--services");
  headerContentEl.classList.remove("header__content");

  document.querySelector(".header__content--services").remove();

  //ContactForm//
  const contactContainer = document.querySelector(
    ".contact__container--contacto"
  );
  contactForm(contactContainer);
  const titleEl = document.querySelector(".subtitle--contact");
  titleEl.innerHTML = "Contacto";
  titleEl.classList.remove("subtitle");
  titleEl.classList.add("title");

  //Footer//
  const footerContainer = document.querySelector(".footer__container");
  footer(footerContainer);
  const linkInsta = document.querySelector(".link--instagram");
  linkInsta.href = "https://www.instagram.com/ariel_golub/";
  const linkLinkedin = document.querySelector(".link--linkedin");
  linkLinkedin.href =
    "https://www.linkedin.com/in/ariel-mat%C3%ADas-golubickas-7a7011109/";
  const linkGit = document.querySelector(".link--github");
  linkGit.href = "https://github.com/ArielGol";
  //Logo//
  const logoEl = document.querySelector(".logo");
  const logoFooterEl = document.querySelector(".logo--footer");
  logoEl.src = "./images/logo_light.png";
  logoFooterEl.src = "./images/logo_light.png";
}
main();
