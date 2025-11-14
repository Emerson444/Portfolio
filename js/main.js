document.addEventListener('DOMContentLoaded', function() {
    const titulo = document.getElementById('titulo');
    const paragrafo = document.getElementById('paragrafo');

    if (!titulo || !paragrafo) {
        console.error('Elementos não encontrados!');
        return;
    }

    if (localStorage.getItem('digitacaoCompleta') === 'true') {
        titulo.textContent = 'Hello World';
        paragrafo.innerHTML = paragrafo.innerHTML; 
        return;
    }

    const textoTitulo = 'Hello World';
    const htmlParagrafo = paragrafo.innerHTML;

    let indexTitulo = 0;
    let indexParagrafo = 0;

    function digitarTitulo() {
        if (indexTitulo < textoTitulo.length) {
            titulo.textContent += textoTitulo[indexTitulo];
            indexTitulo++;
            setTimeout(digitarTitulo, 100);
        } else {
            digitarParagrafo();
        }
    }

    function digitarParagrafo() {
        if (indexParagrafo < htmlParagrafo.length) {
            paragrafo.innerHTML += htmlParagrafo[indexParagrafo];
            indexParagrafo++;
            setTimeout(digitarParagrafo, 15);
        } else {
            localStorage.setItem('digitacaoCompleta', 'true');
        }
    }

    titulo.textContent = '';
    paragrafo.innerHTML = '';
    digitarTitulo();
});