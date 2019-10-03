let main = document.querySelector('main');

//OPGAVE 2
let opgave2 = document.createElement('p');
opgave2.setAttribute('class', 'opgave2');
let content2 = document.createTextNode('Et random nummer til opgave 2: ' + Math.random());

main.appendChild(opgave2);
opgave2.appendChild(content2);

//OPGAVE 3
let opgave3 = document.createElement('p');
opgave3.setAttribute('class', 'opgave3');
let button3 = document.createElement('a');
button3.setAttribute('href', '#')
let content3 = document.createTextNode('Et random nummer til opgave 3: ' + Math.random());
let linkContent3 = document.createTextNode('Tryk her for at få et random nummer');

button3.appendChild(linkContent3);
main.appendChild(opgave3);
opgave3.appendChild(button3);

button3.addEventListener('click', function (){     
    opgave3.appendChild(content3);
})

//OPGAVE 4
function pushHTML(){
    let opgave4 = document.createElement('p');
    opgave4.setAttribute('class', 'opgave4');
    let content4 = document.createTextNode('Et random nummer til opgave 4: ' + Math.random());

    main.appendChild(opgave4);
    opgave4.appendChild(content4);
}

pushHTML();

//OPGAVE 5
function pushHTMLpara(nummer){
    let opgave5 = document.createElement('p');
    opgave5.setAttribute('class', `opgave${nummer}`);
    let content5 = document.createTextNode(`Et random nummer til opgave nummer ${nummer}: ` + Math.random());

    main.appendChild(opgave5);
    opgave5.appendChild(content5);
}

pushHTMLpara(5);

//OPGAVE 6
let opgaveString = 'OPGAVE';

function pushHTMLout(){
    let opgave6 = document.createElement('p');
    opgave6.setAttribute('class', `${opgaveString}6`);
    let content6 = document.createTextNode(`Et random nummer til ${opgaveString} 6: ` + Math.random());

    main.appendChild(opgave6);
    opgave6.appendChild(content6);
}

pushHTMLout();

//OPGAVE 7

function pushHTMLin(){
    let opgaveStringIn = 'OPgaVE';
    let opgave7 = document.createElement('p');
    opgave7.setAttribute('class', `${opgaveStringIn}7`);
    let content7 = document.createTextNode(`Et random nummer til ${opgaveStringIn} 7: ` + Math.random());

    main.appendChild(opgave7);
    opgave7.appendChild(content7);

}

pushHTMLin();

//OPGAVE 8

function pushHTMLreturn(){
    let opgaveStringIn = 'OPgaVE';
    let opgave8 = document.createElement('p');
    opgave8.setAttribute('class', `${opgaveStringIn}8`);
    let content7 = document.createTextNode(`Dags dato i ${opgaveStringIn} 8: ` + returnFunction());

    main.appendChild(opgave8);
    opgave8.appendChild(content7);

}

function returnFunction(){
    let dato = new Date();
    let dagsDato = dato.getDate();
    
    return dagsDato;
}


pushHTMLreturn();