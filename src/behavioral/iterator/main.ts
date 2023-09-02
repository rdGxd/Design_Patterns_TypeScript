// Importando as classes necessárias para a implementação

import { MyDataStructure } from './my-data-structure';
import { MyReserveIterator } from './my-reverse-itarator';

// Criando uma instância da classe MyDataStructure
const dataStructure = new MyDataStructure();

// Adicionando itens à estrutura de dados
dataStructure.addItem(`A`, `B`, `C`, `D`, `E`, `F`);

// Usando a desestruturação para obter os dois primeiros itens da estrutura de dados
const [a, b] = dataStructure;
console.log(`ROUBADOS: ${a}, ${b}`);
console.log(`Executei várias coisas e depois usei o iterator`);

// Usando a desestruturação para obter o primeiro item e o restante da estrutura de dados
const [c, ...rest] = dataStructure;
console.log(c, rest);
console.log();

// Redefinindo o iterador interno da estrutura de dados
dataStructure.resetIterator();

// Iterando através dos itens da estrutura de dados usando um loop "for...of"
for (const data of dataStructure) {
  console.log(data);
}
console.log();

// Mudando o iterador interno para um iterador reverso
dataStructure.changeIterator(new MyReserveIterator(dataStructure));

// Iterando através dos itens da estrutura de dados usando um loop "for...of" com o iterador reverso
for (const data of dataStructure) {
  console.log(data);
}
console.log();

console.log('AQUI PRECISO ZERAR O ITERATOR');

// Redefinindo o iterador interno novamente
dataStructure.resetIterator();

// Iterando novamente através dos itens da estrutura de dados usando um loop "for...of"
for (const data of dataStructure) {
  console.log(data);
}
