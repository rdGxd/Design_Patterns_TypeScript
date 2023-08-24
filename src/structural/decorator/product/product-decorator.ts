import { ProductProtocol } from './product-protocol';

// Classe base para os decoradores de produtos, implementando a interface ProductProtocol.
export class ProductDecorator implements ProductProtocol {
  // Construtor que recebe um produto base a ser decorado.
  constructor(protected product: ProductProtocol) {}

  // Implementação do método getPrice que retorna o preço do produto base.
  getPrice(): number {
    return this.product.getPrice();
  }

  // Implementação do método getName que retorna o nome do produto base.
  getName(): string {
    return this.product.getName();
  }
}

/*
Nesse código, temos a classe ProductDecorator que implementa a interface ProductProtocol e serve como base para os decoradores de produtos. Essa classe possui um construtor que recebe um produto base (um objeto que implementa ProductProtocol) que será decorado.

O método getPrice simplesmente repassa a chamada para o método getPrice do produto base, mantendo o comportamento original.

O método getName também repassa a chamada para o método getName do produto base, preservando o nome original.

Essa classe é uma parte fundamental da implementação de padrões de design de software, como o padrão de decorador. Ela permite a construção de uma cadeia de objetos decoradores que podem adicionar responsabilidades adicionais aos produtos de forma transparente, sem modificar suas classes originais.
*/
