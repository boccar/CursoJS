function mostraHora() {
    let date = new Date();
    return date.toLocaleTimeString('pt-BR', {hour12: false})
}

//console.log(mostraHora());

setInterval(() => {
    console.log(mostraHora());
}, 1000);