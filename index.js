//vamos botar uma variavel ora acessar os metodos de readline (que devem ser sinceonizados. sem precisar apagar a tela como CLang)

const rls = require('readline-sync');
//console.log("Gott mit uns");
var nome = rls.question("qual seu nome?");

//var nonr recebe o valor processado pela question que é um método da rls, que é um exemplo re monstro objeto da classe de java aaaaa
conseole.log('seu nome é: '+nome+'!');

