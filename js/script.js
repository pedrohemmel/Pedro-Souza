/*VARIAVEIS*/ 

let ativado = false;


/*LOGICA */

function mudaIdioma() {
    console.log("oi");
    let sobreMimHeader = document.getElementById('sobreMimHeader').innerHTML = 'Projects';
    let entreEmContatoHeader = document.getElementById('entreEmContatoHeader').innerHTML = 'Contact me';
    let apresentacaoText1 = document.getElementById('apresentacaoText1').innerHTML = 'Hi, my name is';
    let apresentacaoText3 = document.getElementById('apresentacaoText3').innerHTML = 'Front-end Developer | Database Analyst';
    let meusProjetosText = document.getElementById('meusProjetosText').innerHTML = 'My Projects';
    let projeto1 = document.getElementById('projeto1').innerHTML = 'Snake Game';
    let cat1 = document.getElementById('cat1').innerHTML = 'Game';
    let projeto2 = document.getElementById('projeto2').innerHTML = 'Tic-tac-toe';
    let cat2 = document.getElementById('cat2').innerHTML = 'Game';
    let projeto3 = document.getElementById('projeto3').innerHTML = 'Servers';
    let cat3 = document.getElementById('cat3').innerHTML = 'Article';
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
