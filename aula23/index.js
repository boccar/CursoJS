const hora = new Date().toLocaleTimeString();
const user = 'Henrique'

function bomdia() {
    let periodo;

    if (hora <= '12:00:00') {
        periodo = 'manhã';
    } else if (hora > '12:00:00' && hora < '18:00:00') {
        periodo = 'tarde';
    } else if (hora > '18:00:00') {
        periodo = 'noite';
    }

    console.log(`Bom dia ${user}, são ${hora}, uma ótima ${periodo} para viver!`)
}


bomdia();

