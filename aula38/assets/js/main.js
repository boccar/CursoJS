const paragrafos = document.querySelector('.paragrafos');
const ps = paragrafos.querySelectorAll('p');

const estilosBody = getComputedStyle(document.body);
const backgroundColorBody = estilosBody.backgroundColor;

console.log(backgroundColorBody);

for (const p of ps) {
    p.style.backgroundColor = backgroundColorBody;
    p.style.color = 'white';
    p.style.borderRadius = '8px';
    p.style.padding = '4px';
}