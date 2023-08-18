// Neste código, é mostrado o uso de funções construtoras e protótipos para criar objetos com herança de características. Aqui está uma descrição do código:

// Define a função construtora Person
function Person(firstName, lastName, age) {
  this.firstName = firstName;
  this.lastName = lastName;
  this.age = age;
}

// Define o objeto personPrototype como um protótipo para os objetos criados com a função Person
const personPrototype = {
  firstName: 'Rodrigo',
  lastName: 'Silva',
  age: 25,

  fullName() {
    return `${this.firstName} ${this.lastName}`;
  },
};

// Configura a herança do protótipo para a função Person
Person.prototype = Object.create(personPrototype);
Person.prototype.constructor = Person;

// Define a função construtora SubPerson, que herda de Person
function SubPerson(firstName, lastName, age) {
  Person.call(this, firstName, lastName, age);
  this.fromSubClass = 'Oie';
}

// Configura a herança do protótipo para a função SubPerson
SubPerson.prototype = Object.create(Person.prototype);
SubPerson.prototype.constructor = SubPerson;

// Cria uma instância de Person chamada person1
const person1 = new Person('Miranda', `Silva`, 25);
console.log(person1);
console.log(person1.fullName());

// Cria uma instância de Person chamada person2
const person2 = new Person('Teste', `Silva`, 25);
console.log(person2);
console.log(person2.fullName());

/*
Neste código, são definidas duas funções construtoras, Person e SubPerson, que representam classes. O objeto personPrototype contém atributos e métodos comuns para instâncias de Person, e a herança é estabelecida por meio de protótipos.

A função SubPerson herda de Person usando o método call para executar a função Person com o contexto da instância atual de SubPerson. Isso permite que os atributos de Person sejam inicializados para instâncias de SubPerson. Os protótipos também são configurados para garantir que a herança funcione corretamente.

O código cria duas instâncias de Person (person1 e person2) e demonstra como os atributos e métodos herdados do protótipo estão disponíveis para essas instâncias. Isso exemplifica como a herança de protótipos funciona em JavaScript.
*/
