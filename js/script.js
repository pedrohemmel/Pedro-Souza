/*VARIAVEIS*/ 

let ativado = false;


/*LOGICA */

function mudaIdioma() {
    console.log("oi");
    let sobreMimHeader = document.getElementById('sobreMimHeader').innerHTML = 'About me';
    let entreEmContatoHeader = document.getElementById('entreEmContatoHeader').innerHTML = 'Contact me';
    let apresentacaoText1 = document.getElementById('apresentacaoText1').innerHTML = 'Hi, my name is';
    let apresentacaoText3 = document.getElementById('apresentacaoText3').innerHTML = 'and this is my personal website that i made to show my projects and skills';
    let quemSouText1 = document.getElementById('quemSouText1').innerHTML = 'So, after all..';
    let quemSouText2 = document.getElementById('quemSouText2').innerHTML = 'What am i?';
    let quemSouText3 = document.getElementById('quemSouText3').innerHTML = '“I am student of Science Computing and Computer Technician focusing in the development of systems and new technologies.”';
    let meusProjetosText = document.getElementById('meusProjetosText').innerHTML = 'My Projects';
    let projeto1 = document.getElementById('projeto1').innerHTML = 'Snake Game';
    let projeto2 = document.getElementById('projeto2').innerHTML = 'Tic-tac-toe';
    let projeto3 = document.getElementById('projeto3').innerHTML = 'Servers';
    let entreEmContatoFooter = document.getElementById('entreEmContatoFooter').innerHTML = 'Contact me';
    let direitos = document.getElementById('direitos').innerHTML = 'All rights reserved';
    let alocadorDeBandeira = document.getElementById('alocadorDeBandeira').src = 'images/bandeiraBrasil.jpg';

    ativado = true;
}

function voltaIdioma() {
    if(ativado == true) {
        location.reload();
    } else {
        mudaIdioma();
    }
}
