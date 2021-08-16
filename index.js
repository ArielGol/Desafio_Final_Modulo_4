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
  //Header//
  const headerContainer = document.querySelector(".header__container");
  header(headerContainer);
  hamburgerBarMobile();

  //ContactForm//
  const contactContainer = document.querySelector(".contact__container");
  contactForm(contactContainer);

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

  getServices().then(function (services) {
    for (const w of services) {
      addServicesCard(w);
    }
  });
}

main();
