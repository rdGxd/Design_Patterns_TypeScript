import { ProductProtocol } from './product-protocol';

// Classe que implementa a interface ProductProtocol representando uma camiseta.
export class TShirt implements ProductProtocol {
  // Propriedades privadas que armazenam o nome e o preço da camiseta.
  private name = 'Camiseta';
  private price = 49.9;

  // Implementação do método getPrice que retorna o preço da camiseta.
  getPrice(): number {
    return this.price;
  }

  // Implementação do método getName que retorna o nome da camiseta.
  getName(): string {
    return this.name;
  }
}

/*
Nesse trecho de código, temos a classe TShirt que implementa a interface ProductProtocol. Essa classe representa uma camiseta e fornece a implementação dos métodos getPrice e getName definidos na interface.

A classe TShirt possui duas propriedades privadas:

name: Armazena o nome da camiseta como uma string.

price: Armazena o preço da camiseta como um número.

Os métodos getPrice e getName retornam essas propriedades correspondentes, fornecendo as informações necessárias sobre a camiseta.

Essa classe pode ser utilizada como um exemplo de produto concreto que segue o protocolo definido pela interface ProductProtocol. Isso permite que ela seja usada em conjunto com os decoradores e outras classes que esperem objetos que implementem ProductProtocol.
*/
