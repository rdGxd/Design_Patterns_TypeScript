// Neste código, é demonstrado o uso do método `Object.create` para criar um novo objeto com um protótipo predefinido. Aqui está uma descrição do código:

// Define o objeto personPrototype como um protótipo para outros objetos
const personPrototype = {
  firstName: 'Rodrigo',
  lastName: 'Silva',
  age: 25,

  fullName() {
    return `${this.firstName} ${this.lastName}`;
  },
};

// Cria um novo objeto chamado anotherPerson com personPrototype como protótipo
const anotherPerson = Object.create(personPrototype);

// Modifica o atributo firstName do objeto anotherPerson
anotherPerson.firstName = 'Luiz';

// Mostra o objeto anotherPerson
console.log(anotherPerson);

// Mostra o atributo firstName do objeto anotherPerson
console.log(anotherPerson.firstName);

// Chama o método fullName do objeto anotherPerson
console.log(anotherPerson.fullName());

/*
Neste código, o objeto personPrototype é definido com atributos e um método fullName. Quando você cria um novo objeto chamado anotherPerson usando o Object.create, esse novo objeto herda os atributos e métodos de personPrototype. Ao modificar o atributo firstName do objeto anotherPerson, você está alterando apenas esse atributo específico no objeto, enquanto os outros atributos ainda são herdados do protótipo. A chamada ao método fullName() também funciona porque o novo objeto herda esse método do protótipo. Isso demonstra como o conceito de protótipo permite criar objetos compartilhando características comuns enquanto permite personalização individual.
*/
