document.addEventListener('DOMContentLoaded', function() {
    iniciarApp();
})

function iniciarApp() {
    clickear();
}

function clickear() {
    const btnCrear = document.querySelector('.boton-crear');
    btnCrear.addEventListener('click', function(e) {
        e.preventDefault();
        mostrarModal();
    });
}

function mostrarModal() {
    const modal = document.createElement('DIV');
    const card = document.createElement('DIV');
    const card_heading = document.createElement('DIV');
    const card_contenido = document.createElement('DIV');
    const formulario = document.createElement('FORM');
    const campo = document.createElement('DIV');
    const body = document.querySelector('body');
    modal.classList.add('modal');
    

    // Le agregamos clases al card principal
    card.classList.add('card', 'card--registro');
    // Le agregamos clases al card heading
    card_heading.classList.add('card--registro__heading');
    card_heading.innerHTML = `<div>
                                <h2>Registrarte</h2>
                                <p>Es rápido y fácil</p>
                            </div>
                            <div>
                                <img src="/build/img/close.webp" alt="Cerrar" class="cerrar">
                            </div>`;

    // Le agregamos clases al card contenido
    card_contenido.classList.add('card--registro__contenido');
    formulario.classList.add('form-registro');
    formulario.innerHTML = `<div class="campo campo-1">
                                <input class="form-registro__input" type="text" name="nombre" id="nombre" placeholder="Nombre">
                                <input class="form-registro__input" type="text" name="apellido" id="apellido" placeholder="Apellido">
                            </div>
                            <div class="campo">
                                <input autocomplete="email" class="form-registro__input" type="email" name="email" id="email-registro" placeholder="Correo electrónico">
                            </div>
                            <div class="campo">
                                <input autocomplete="current-password" class="form-registro__input" type="password" name="password" id="password-registro" placeholder="Contraseña nueva">
                            </div>
                            <div class="campo">
                                <label for="nacimiento" class="nacimiento">Fecha de nacimiento</label>
                                <input type="date" name="nacimiento" id="nacimiento" class="form-registro__input" max="<?php echo date('Y-m-d'); ?>">
                            </div>
                            <div class="terminos">
                                <p>
                                Es posible que las personas que usan nuestro servicio hayan subido tu información de contacto a Facebook. <a href="">Obtén más información.</a>
                                </p>
                                <p>
                                Al hacer clic en "Registrarte", aceptas nuestras Condiciones, la Política de privacidad y la Política de cookies. Es posible que te enviemos notificaciones por SMS, que puedes desactivar cuando quieras.
                                </p>
                            </div>
                            <div class="campo-boton">
                                <input type="submit" value="Registrarte" class="boton-registrar">
                            </div>
                            `;

    body.appendChild(modal);
    modal.appendChild(card);
    card.appendChild(card_heading);
    card.appendChild(card_contenido);
    card_contenido.appendChild(formulario);

    const cerrar = document.querySelector('.cerrar');
    cerrar.addEventListener('click', function() {
        cerrarModal();
    });
}

function cerrarModal() {
    const modal = document.querySelector('.modal');
    if (modal) {
        modal.remove();
    }
}