function header(el) {
  const componentEl = document.createElement("div");
  componentEl.innerHTML = `
  <header class="header">
  <nav class="header__nav">
    <figure class="container__logo">
      <img src="" alt="logo ArielGol" class="logo">
    </figure>
    <div class="header__nav__menu-mobile">
      <div class="nav__menu-bar"></div>
      <div class="nav__menu-bar"></div>
      <div class="nav__menu-bar"></div>
    </div>
    <div class="header__windows-menu-mobile">
      <div class="windows__container-button">
        <button class=" title title--windows-button">X</button>
      </div>
      <div class="windows__content">
        <a href="./portfolio.html"  class="link link--header link--windows-portfolio"><h1 class="title title--windows-portfolio">Portfolio</h1></a>
        <a href="./servicios.html"  class="link link--header link--windows-servicios"><h1 class="title title--windows-servicios">Servicios</h1></a>
        <a href="./contacto.html"  class="link link--header link--windows-contacto"><h1 class="title title--windows-contacto">Contacto</h1></a>
      </div>
    </div>
    <div class="header__nav__menu-desktop">
      <a href="./portfolio.html" target="blank" class="link link--header link--nav-portfolio"><h3 class=" paragraph paragraph--nav__menu-title paragraph--nav-portfolio ">Portfolio</h3></a>
      <a href="./servicios.html" target="blank" class="link link--header link--nav-servicios"><h3 class="paragraph paragraph--nav__menu-title paragraph--nav-servicios">Servicios</h3></a>
      <a href="./contacto.html" target="blank" class="link link--header link--nav-contacto"><h3 class="paragraph paragraph--nav__menu-title paragraph--nav-contacto">Contacto</h3></a>
    </div>
  </nav>
  <div class="header__content">
    <h1 class="title header__title">Hola</h1>
    <h2 class="subtitle header__subtitle">Soy Ariel</h2>
  </div>
</header>
  `;
  el.appendChild(componentEl);
}
function hamburgerBarMobile() {
  const buttonOpenEl = document.querySelector(".header__nav__menu-mobile");
  const buttonCloseEl = document.querySelector(".title--windows-button");
  const windowsEl = document.querySelector(".header__windows-menu-mobile");
  buttonOpenEl.addEventListener("click", () => {
    windowsEl.style.display = "block";
    buttonCloseEl.addEventListener("click", () => {
      windowsEl.style.display = "";
    });
  });
}
