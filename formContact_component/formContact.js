function contactForm(el) {
  const componentEl = document.createElement("div");
  componentEl.innerHTML = `
  <section class="contact">
      <h2 class="subtitle subtitle--contact">Escribime</h2>
      <form  class="contact__form">
        <label class="label">
          <h3 class="contact__label">NOMBRE</h3>
          <input class="contact__input" type="text" name="name">
        </label>
        <label class="label">
          <h3 class="contact__label">EMAIL</h3>
          <input class="contact__input" type="email" name="email">
        </label>
        <label class="label">
          <h3 class="contact__label">MENSAJE</h3>
          <textarea class="textarea__message" name="message"></textarea>
        </label>
        <div class="form__button">
          <button type="submit" class="button paragraph paragraph--button">Enviar</button>
        </div>
      </form>
      <div class="modal modal-none">
        <div class="modal-content">
            <div class="modal-contact-response">
              <h3 class="paragraph modal__text">¡Muchas Gracias!
              Recibí tu mensaje</h3>
            </div>  
            <div class="contact-loader modal-none">
              <h3 class="paragraph modal__text">Enviando...</h3>
            </div>
        </div>
      </div>
  </section>`;

  componentEl.addEventListener("submit", (e) => {
    const loader = document.querySelector(".contact-loader");
    const modal = document.querySelector(".modal");
    const response = document.querySelector(".modal-contact-response");

    e.preventDefault();
    modal.classList.remove("modal-none");
    response.classList.add("modal-none");
    loader.classList.remove("modal-none");

    fetch("https://apx-api.vercel.app/api/utils/dwf", {
      method: "POST",
      headers: { "content-type": "application/json" },
      body: JSON.stringify({
        to: "ariel00golubickas@gmail.com",
        message: "Envío de mensaje del desafio módulo n°4",
      }),
    })
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
      })
      .catch((err) => {
        let message = err.statusText || "Ocurrió un error, intenta nuevamente";
        response.querySelector(".modal__text").innerHTML = ` ${message}`;
        console.log(err);
      })
      .finally(() => {
        loader.classList.add("modal-none");
        response.classList.remove("modal-none");
        setTimeout(() => {
          modal.classList.add("modal-none");
        }, 3000);
      });
  });

  //Para enviar el email del formulario de contacto se tiene que disparar un request HTTP (POST) a https://apx-api.vercel.app/api/utils/dwf enviando el siguiente body:
  //{
  //   "to":"tu-email-de-estudiante@gmail.com",
  //   "message":"mensaje a enviar"
  //}
  //Tené en cuenta incluir el header: content-type:"application/json" en tu POST.
  //fetch(url, {
  //method: "POST",
  //headers: { "content-type": "application/json" },
  // ...todo lo demás
  //})

  el.appendChild(componentEl);
}
