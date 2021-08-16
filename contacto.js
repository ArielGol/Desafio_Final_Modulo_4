function main() {
  //Header//
  const headerContainer = document.querySelector(
    ".header__container--contacto"
  );
  header(headerContainer);
  hamburgerBarMobile();
  //const changeTitleMenu = document.querySelector(".title--menu-mobile");
  //changeTitleMenu.textContent = "Home";
  //Change name elements of menu hamburger bar
  const changeTitleMenuFirstEl = document.querySelector(
    ".title--windows-portfolio"
  );
  changeTitleMenuFirstEl.textContent = "Home";
  const changeLinkMenuFirstEl = document.querySelector(
    ".link--windows-portfolio"
  );
  changeLinkMenuFirstEl.href = "./index.html";
  const changeTitleMenuSecondEl = document.querySelector(
    ".title--windows-servicios"
  );
  changeTitleMenuSecondEl.textContent = "Portfolio";
  const changeLinkMenuSecondEl = document.querySelector(
    ".link--windows-servicios"
  );
  changeLinkMenuSecondEl.href = "./portfolio.html";
  const changeTitleMenuThirdEl = document.querySelector(
    ".title--windows-contacto"
  );
  changeTitleMenuThirdEl.textContent = "Servicios";
  const changeLinkMenuThirdEl = document.querySelector(
    ".link--windows-contacto"
  );
  changeLinkMenuThirdEl.href = "./servicios.html";

  const changeTitleMenuDeskFirstEl = document.querySelector(
    ".paragraph--nav-portfolio"
  );

  changeTitleMenuDeskFirstEl.textContent = "Home";
  const changeLinkMenuDeskFirstEl = document.querySelector(
    ".link--nav-portfolio"
  );
  changeLinkMenuDeskFirstEl.href = "./index.html";
  const changeTitleMenuDeskSecondEl = document.querySelector(
    ".paragraph--nav-servicios"
  );
  changeTitleMenuDeskSecondEl.textContent = "Portfolio";
  const changeLinkMenuDeskSecondEl = document.querySelector(
    ".link--nav-servicios"
  );
  changeLinkMenuDeskSecondEl.href = "./portfolio.html";
  const changeTitleMenuDeskThirdEl = document.querySelector(
    ".paragraph--nav-contacto"
  );
  changeTitleMenuDeskThirdEl.textContent = "Servicios";
  const changeLinkMenuDeskThirdEl = document.querySelector(
    ".link--nav-contacto"
  );
  changeLinkMenuDeskThirdEl.href = "./servicios.html";

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
