document.getElementById('meuForm').addEventListener('submit', (event) => {
    var submitBtn = document.getElementById('submitBtn');
    var loadingIndicator = document.getElementById('loading');
    
    submitBtn.disabled = true;
    loadingIndicator.style.display = 'block';
});

document.addEventListener("DOMContentLoaded", () => {
    const menuIcon = document.getElementById("menuIcon");
    const menuHamburguer = document.getElementById("menuHamburguer");

    menuIcon.addEventListener("click", () => {
        if (menuHamburguer.classList.contains("show")) {
            menuHamburguer.classList.remove("show");
            setTimeout(() => {
                menuHamburguer.style.display = "none";
            }, 300); 
        } else {
            menuHamburguer.style.display = "flex";
            setTimeout(() => {
                menuHamburguer.classList.add("show");
            }, 10); 
        }
    });
});


document.addEventListener('DOMContentLoaded', () => {
    const menu = document.getElementById('menu');

    window.addEventListener('scroll', () => {
        if (window.scrollY > 50) {
            menu.classList.add('solid');
        } else {
            menu.classList.remove('solid');
        }
    });
});

document.addEventListener('DOMContentLoaded', () => {
    const menu = document.getElementById('menu');

    window.addEventListener('scroll', () => {
        if (window.scrollY > 100) {
            menu.classList.add('solid');
            menu.classList.remove('transparent');
        } else {
            menu.classList.add('transparent');
            menu.classList.remove('solid');
        }
    });
});





function netflix() {
    window.open('https://grodrigues10.github.io/Filmes-React-JS/', '_blank'); 
}

function viaCep(){
    window.open('https://grodrigues10.github.io/Projeto-Busca-CEP-ReactJS/', '_blank');
}

function football(){
    window.open('https://grodrigues10.github.io/futebol-react/', '_blank');
}

function carrinho(){
    window.open('https://grodrigues10.github.io/Projeto-Carrinho-de-Compras/', '_blank');
}

function clima(){
    window.open('https://grodrigues10.github.io/Clima-App-ReactJS/', '_blank');
}

function cakeStore(){
    window.open('https://grodrigues10.github.io/Projeto-Bootstrap/', '_blank');
}









