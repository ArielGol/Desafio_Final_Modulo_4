function footer(el) {
  const componentEl = document.createElement("div");
  componentEl.innerHTML = `
  <footer class="footer">
  <figure class="container__logo--big-size">
    <img src="" alt="logo ArielGol" class="logo logo--footer">
  </figure>
  <ul class="footer__social-media">
    <a href=""  target="blank" class="link link--instagram">
      <li class="social-media">
        <h4 class="paragraph paragraph--social-media">Instagram</h4>
        <img src="./images/instagram.png" alt="logo instagram" class="social-media__logo">
      </li>
    </a>
    <a href=""  target="blank" class="link link--linkedin">
      <li class="social-media">
        <h4 class="paragraph paragraph--social">Linkedin</h4>
        <img src="./images/linkedin.png" alt="logo linkedin" class="social-media__logo">
    </li>
    </a>
    <a href="" target="blank" class="link link--github">
      <li class="social-media">
        <h4 class="paragraph paragraph--social">Github</h4>
        <img src="./images/github.png" alt="logo github" class="social-media__logo">
      </li>
    </a>
  </ul>
</footer>
  `;
  el.appendChild(componentEl);
}
