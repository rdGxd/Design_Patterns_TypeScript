// Este código demonstra o uso do padrão de projeto Prototype para criar cópias de objetos com seus objetos internos. Aqui está uma explicação do código:

// Importa as interfaces e classes necessárias
export interface Prototype {
  clone(): Prototype;
}

export class Person implements Prototype {
  public addresses: Address[] = [];

  constructor(
    public name: string,
    public age: number,
  ) {}

  // Método de clonagem para objetos Person
  clone(): Person {
    const newObj = new Person(this.name, this.age);
    newObj.addresses = this.addresses.map((item) => item.clone());
    return newObj;
  }

  // Método para adicionar um endereço a uma pessoa
  addAddress(address: Address): void {
    this.addresses.push(address);
  }
}

export class Address implements Prototype {
  constructor(
    public street: string,
    public number: number,
  ) {}

  // Método de clonagem para objetos Address
  clone(): Address {
    return new Address(this.street, this.number);
  }
}

// Cria uma instância de Address e duas instâncias de Person
const address1 = new Address(`Av Brasil`, 15);
const person1 = new Person('Rodrigo', 25);

// Adiciona o endereço aos endereços da person1
person1.addAddress(address1);

// Clona person1 para criar person2
const person2 = person1.clone();

// Modifica a rua do endereço nos endereços da person1
person1.addresses[0].street = 'Mudei';

// Modifica o nome da person2
person2.name = 'Person2';

// Mostra person2 e seus endereços
console.log(person2);
console.log(person2.addresses);

console.log();

// Modifica o nome da person1
person1.name = 'Person1';

// Mostra person1 e seus endereços
console.log(person1);
console.log(person1.addresses);

/*
Neste código, a classe Person implementa o método clone de forma a criar uma nova instância usando o método Object.create(this), que cria um novo objeto tendo o objeto atual como protótipo. Isso cria uma cópia rasa do objeto. Note que, ao modificar propriedades de objetos aninhados (como alterar a rua em person1.addresses), as alterações também são refletidas em outras instâncias que compartilham essas referências, devido à natureza do objeto clonado.
*/
