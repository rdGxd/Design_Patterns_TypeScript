// Interface que define o protocolo para os produtos.
export interface ProductProtocol {
  // Método que retorna o preço do produto.
  getPrice(): number;

  // Método que retorna o nome do produto.
  getName(): string;
}

/*
Nesse trecho de código, temos a definição da interface ProductProtocol. Essa interface estabelece um protocolo que os produtos devem seguir, ou seja, define um contrato que especifica quais métodos devem estar presentes em qualquer classe que a implemente.

A interface possui dois métodos:

getPrice(): Retorna o preço do produto como um número.

getName(): Retorna o nome do produto como uma string.

Ao implementar essa interface em diferentes classes de produtos, garante-se que essas classes terão os métodos necessários para interagir com outros componentes do sistema de forma padronizada. Isso promove a consistência e a flexibilidade no código, permitindo que diferentes tipos de produtos possam ser usados de maneira intercambiável onde a interface ProductProtocol é esperada.
*/
