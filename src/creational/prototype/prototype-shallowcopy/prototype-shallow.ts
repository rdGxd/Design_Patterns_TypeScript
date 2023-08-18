// Neste código, utilizamos o conceito de protótipo para criar cópias de objetos por meio do método "clone". Aqui está uma descrição do código:

// Define a interface Prototype, que exige um método "clone"
export interface Prototype {
  clone(): Prototype;
}

// Classe Person implementa a interface Prototype
export class Person implements Prototype {
  public addresses: Address[] = [];

  constructor(
    public name: string,
    public age: number,
  ) {}

  // Método de clonagem para objetos Person
  clone(): this {
    const newObj = Object.create(this); // Cria um novo objeto baseado no protótipo atual
    return newObj; // Retorna o novo objeto clonado
  }

  // Método para adicionar um endereço a uma pessoa
  addAddress(address: Address): void {
    this.addresses.push(address);
  }
}

// Classe Address representa um endereço
export class Address {
  constructor(
    public street: string,
    public number: number,
  ) {}
}

// Cria uma instância de Address e uma instância de Person
const address1 = new Address(`Av Brasil`, 15);
const person1 = new Person('Rodrigo', 25);

// Adiciona o endereço à lista de endereços da person1
person1.addAddress(address1);

// Clona a person1 para criar person2
const person2 = person1.clone();

// Modifica a rua do endereço na lista de endereços da person1
person1.addresses[0].street = 'Mudei';

// Modifica o nome da person2
person2.name = 'Person2';

// Mostra person2 e seus endereços
console.log(person2);
console.log(person2.addresses);

/*
Esse código demonstra o padrão Prototype, que permite criar cópias de objetos mantendo suas estruturas internas. Aqui, ele é utilizado para clonar objetos Person e Address, incluindo os endereços aninhados em uma pessoa. Lembre-se de que, quando você modifica propriedades de objetos aninhados (como alterar a rua em person1.addresses), as alterações são refletidas em todas as referências a esse objeto, devido à natureza de cópia rasa dessa implementação.
*/
