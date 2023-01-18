
/*function criaPessoa (nome, sobreNome, idade) {
    return {
        nome, sobreNome, idade
    };
}
const pessoa1 = criaPessoa('Henrique', 'Bocca', 20)
console.log(pessoa1.nome, pessoa1.idade);
*/

const pessoa1 = {
   nome: 'Henrique',
   sobrenome: 'Bocca',
   idade: 20,

   fala() {
        console.log(`a minha idade atual é ${this.idade}`);
   }
};

pessoa1.fala();