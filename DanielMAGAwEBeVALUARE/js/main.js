console.log('initializare');
document.addEventListener('DOMContentLoaded', function () {
    let body =  document.querySelector('body');
//ex 1
    let x = document.createElement('input');
    x.name = "x";
    body.appendChild(x);
    let y = document.createElement('input');
    y.name = "y";
    body.appendChild(y);
    let sum = document.createElement('input');
    sum.type = "button";
    sum.value = "suma";
    sum.addEventListener('click', function () {
        document.querySelector("#rezultat").innerText = parseInt(document.querySelector("input[name='x']").value) + parseInt(document.querySelector("input[name='y']").value);
    });
    body.appendChild(sum);
//ex 2
    let hr = document.createElement('hr');
    body.appendChild(hr);
    let fst = document.createElement('input');
    fst.name = "a";
    body.appendChild(fst);
    let snd = document.createElement('input');
    snd.name = "b";
    body.appendChild(snd);
    let buttonChange = document.createElement('input');
    buttonChange.type = "button";
    buttonChange.value = "Schimba cu locul";
    buttonChange.addEventListener('click', function () {
        let a =  document.querySelector("input[name='a']").value;
        let b =  document.querySelector("input[name='b']").value;
        let intermediate =  a;
        document.querySelector("input[name='a']").value = b;
        document.querySelector("input[name='b']").value = intermediate;
    });
    body.appendChild(buttonChange);
    //ex 3
    document.querySelector('#container').addEventListener('mouseover',function (el) {
        el.target.classList.add('verde');
    });
    //ex 4

    let paragrafe = document.querySelectorAll('#lista p');
    for(let i = 0 ; i < 10 ; i++){
        if( i % 2 !== 0 ) {
            paragrafe[i].classList.add('albastru');
        }
        else {
            paragrafe[i].classList.add('galben');
        }

    }
    //ex 5
    let lista = document.createElement('ul');
    for(let i=1; i<= 10; i++){
        let el = document.createElement('li');
        el.innerText = `Elementul NR ${i}`;
        lista.appendChild(el);
    }
    lista.id="lista2";
    body.appendChild(lista);
    document.querySelector('#lista2 li:last-child').style.backgroundColor = "violet";
    //6
    let button6 = document.createElement('button');
    button6.innerText = "Sterge elementul 5 din lista";
    button6.addEventListener('click', function () {
        document.querySelector('#lista2 li:nth-child(5)').remove();
    });
    body.appendChild(button6);
    //7
    let cercContainer =  document.createElement('div');
    for(let i = 0 ; i < 10; i ++){
        let cerc = document.createElement('div');
        cerc.style.backgroundColor = "black";
        cerc.style.width = '10px';
        cerc.style.height = '10px';
        cercContainer.appendChild(cerc);
    }
    body.appendChild(cercContainer);
    //8
    let numereIntregi = [1,5,8,4,9,0,6,3,25,12];
    numereIntregi.sort((a, b) => a - b);
    numere = document.createElement('ul');
    numereIntregi.forEach(function (el) {
        let numar = document.createElement('li');
        numar.innerText = el;
        numere.appendChild(numar)
    });
    body.appendChild(numere);
    // 9
    setTimeout(function () {
        body.classList.add('gray');
    }, 5000);
    // 10
    let numberFromList = 11;
    setInterval(function(){
        let element = document.createElement('li');
        element.innerText =`Elementul nuamrul ${numberFromList} `;
        document.querySelector('#lista2').appendChild(element);
        console.log('adaugare item')
        numberFromList++;
    }, 10000);
    //11
    document.querySelector('.contor').addEventListener('click', function (el) {
        document.querySelector('.contor i').innerText = parseInt(document.querySelector('.contor i').innerText) + 1;
    });
    //12
    let lista3 = document.querySelector('.lista3');
    let r = 0;
    let intervalID = window.setInterval(function () {
        let el = document.createElement('li');
        el.innerText = numereIntregi[r]
        lista3.appendChild(el);
        if (++r === 10) {
            window.clearInterval(intervalID);
            setareAtribute();
            console.log('1');
        }
    }, 1000);
    //13
    function setareAtribute() {
        document.querySelectorAll('.lista3 li').forEach(function (el) {
            el.setAttribute('title', parseInt(el.innerText));
        });
    }
});


