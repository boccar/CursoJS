const nome = 'Henrique';
const sobreNome = 'Bocca';
const idade = 20;
const peso = 100;
const altura = 1.72;
let imc;
let anoDeNascimento;
const mesNascimento = 2;
const anoAtual = 2023;
const mesAtual = 01;


anoDeNascimento = anoAtual - idade;

imc = peso/(altura*altura);

if (mesNascimento > mesAtual) {
    anoDeNascimento--;
};

console.log(`${nome} ${sobreNome} tem ${idade} anos pesa ${peso} kg tem ${altura} e seu IMC é de ${imc}`);

console.log(`${nome} ${sobreNome} nasceu em ${anoDeNascimento}`);
