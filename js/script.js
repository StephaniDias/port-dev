const header = document.querySelector("header");

window.addEventListener("scroll", () => {
    if (window.scrollY > 50) {
        header.classList.add("scrolled");
    } else {
        header.classList.remove("scrolled");
    }
});

const btnAbrirMenuMobile = document.querySelector('#btn-menu-mobile');
const menuMobile = document.querySelector('#menu-mobile');

btnAbrirMenuMobile.addEventListener('click', ()=> {
    menuMobile.classList.add('abrir-menu');
})

menuMobile.addEventListener('click', ()=> {
    menuMobile.classList.remove('abrir-menu');
})

// ação do formulário

document.getElementById("formContato").addEventListener("submit", function(event){

    event.preventDefault();

    let nome = document.getElementById("nome").value;
    let email = document.getElementById("email").value;
    let celular = document.getElementById("celular").value;
    let mensagem = document.getElementById("mensagem").value;

    let texto = `Olá, me chamo ${nome}.
Email: ${email}
Celular: ${celular}
Mensagem: ${mensagem}`;

    let numero = "5511973999086";

    let url = `https://wa.me/${numero}?text=${encodeURIComponent(texto)}`;

    window.open(url, "_blank");

});
