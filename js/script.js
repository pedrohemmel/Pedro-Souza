/*VARIAVEIS*/ 

let ativado = false;


/*LOGICA */

function mudaIdioma() {
    console.log("oi");
    let sobreMimHeader = document.getElementById('sobreMimHeader').innerHTML = 'Projects';
    let entreEmContatoHeader = document.getElementById('entreEmContatoHeader').innerHTML = 'Contact me';
    let apresentacaoText1 = document.getElementById('apresentacaoText1').innerHTML = 'Hi, my name is';
    let apresentacaoText3 = document.getElementById('apresentacaoText3').innerHTML = 'System Developer | iOS development trainee at Apple Developer Academy';
    let meusProjetosTitulo = document.getElementById('meusProjetosTitulo').innerHTML = 'Projects';
    let meusProjetosTexto = document.getElementById('meusProjetosTexto').innerHTML = 'One of the better ways to learn is practicing, and this is what i get from my projects, and i also take the opportunity to put into my academic portfolio.';
    let entreEmContatoFooter = document.getElementById('entreEmContatoFooter').innerHTML = 'Contact me';
    let direitos = document.getElementById('direitos').innerHTML = 'All rights reserved';
    let alocadorLinguagem = document.getElementById('alocadorLinguagem').innerHTML = 'Português - PT-BR';

    ativado = true;
}

function voltaIdioma() {
    if(ativado == true) {
        location.reload();
    } else {
        mudaIdioma();
    }
}
