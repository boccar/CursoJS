const pessoa = {
    nome: 'Henrique',
    sobreNome: 'Bocca',
    idade: '20',
    end: {
        rua: 'cds',
        numero: '258'
    }
}
const { nome, ...resto } = pessoa;

console.log(nome, resto)