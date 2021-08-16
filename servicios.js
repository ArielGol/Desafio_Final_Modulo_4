function addServicesCard(params = {}) {
  const template = document.querySelector("#services__card");
  const container = document.querySelector(".services__container__card");
  template.content.querySelector(".services__subtitle").textContent =
    params.title;
  template.content.querySelector(".paragraph--services").textContent =
    params.description;
  template.content.querySelector(".services__imagen").src = params.image;
  const clone = document.importNode(template.content, true);
  container.appendChild(clone);
}
function getServices() {
  return fetch(
    "https://cdn.contentful.com/spaces/yjetsw56doiq/environments/master/entries?access_token=u1MLOXACwkKF6kWHoK3QjvS6YjuiAOlHIGScLbrM7uc&content_type=servicios"
  )
    .then((res) => {
      return res.json();
    })
    .then((data) => {
      const fieldCollections = data.items.map((item) => {
        return {
          title: item.fields.title,
          description: item.fields.paragraph,
          id: item.fields.image.sys.id,
          includes: data.includes.Asset,
        };
      });
      fieldCollections.forEach((element) => {
        let idImagen = buscarId(element.id, element.includes);
        element.image = idImagen.fields.file.url;
      });
      return fieldCollections;
    });
}
function buscarId(id, includesArray) {
  const idImagenEncontrado = includesArray.find((item) => {
    return item.sys.id == id;
  });
  return idImagenEncontrado;
}

function main() {
  const headerContainer = document.querySelector(
    ".header__container--services"
  );
  header(headerContainer);
  hamburgerBarMobile();

  //Change name elements of menu hamburger bar
  //Mobile//
  const firstEl = document.querySelector(".title--windows-portfolio");
  firstEl.textContent = "Home";

  const linkFirstEl = document.querySelector(".link--windows-portfolio");
  linkFirstEl.href = "./index.html";

  const secondEl = document.querySelector(".title--windows-servicios");
  secondEl.textContent = "Portfolio";

  const linkSecondEl = document.querySelector(".link--windows-servicios");
  linkSecondEl.href = "./portfolio.html";

  const firstDeskEl = document.querySelector(".paragraph--nav-portfolio");
  firstDeskEl.textContent = "Home";

  const linkFirstDeskEl = document.querySelector(".link--nav-portfolio");
  linkFirstDeskEl.href = "./index.html";

  const secondDeskEl = document.querySelector(".paragraph--nav-servicios");
  secondDeskEl.textContent = "Portfolio";

  const linkSecondDeskEl = document.querySelector(".link--nav-servicios");
  linkSecondDeskEl.href = "./portfolio.html";
  //Eliminar y modificar contenido//
  document.querySelector(".subtitle").innerHTML = "";

  document.querySelector(".header__title").textContent = "Servicios";

  const headerContentEl = document.querySelector(".header__content");
  headerContentEl.classList.add("header__content--services");
  headerContentEl.classList.remove("header__content");
  //Servicios//
  getServices().then(function (services) {
    for (const w of services) {
      addServicesCard(w);
    }
  });

  document
    .querySelector(".services__container__card")
    .classList.add("services__container__card--services");

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
