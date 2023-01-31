const elementos = [
    { tag: 'p', texto: 'qualquer coisa 2' },
    { tag: 'div', texto: 'qualquer coisa 3' },
    { tag: 'section', texto: 'qualquer coisa 3' },
    { tag: 'footer', texto: 'qualquer coisa 4' }
];

const container = document.querySelector('.container');
const div = document.createElement('div');

for (let i = 0; i < elementos.length; i++) {
    let { tag, texto } = elementos[i];

    let tagCriada = document.createElement(tag);
    tagCriada.innerText = texto;
    div.appendChild(tagCriada);   
}

container.appendChild(div);
