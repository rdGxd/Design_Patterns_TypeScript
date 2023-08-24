import { ProductDecorator } from './product-decorator';

// Classe que estende o ProductDecorator para adicionar customizações aos produtos.
export class ProductCustomizationDecorator extends ProductDecorator {
  // Sobrescreve o método getName para retornar o nome do produto customizado.
  getName(): string {
    return `${this.product.getName()} Customizada`;
  }

  // Sobrescreve o método getPrice para calcular o preço do produto customizado.
  getPrice(): number {
    // Retorna o preço do produto original somado a um valor fixo de 50.
    return this.product.getPrice() + 50;
  }
}

/*
Nesse código, temos uma classe ProductCustomizationDecorator que estende outra classe chamada ProductDecorator. Essa classe é responsável por adicionar customizações aos produtos. Ela sobrescreve os métodos getName e getPrice para realizar essas customizações.

No método getName, a customização é feita ao retornar o nome do produto original concatenado com a palavra "Customizada". Isso permite identificar visualmente que o produto foi personalizado de alguma forma.

No método getPrice, a customização ocorre ao calcular o preço do produto customizado. O preço do produto original é obtido através do método getPrice() da classe base, e a isso é adicionado o valor fixo de 50 unidades. Portanto, o preço final do produto customizado será o preço original mais 50.

Essa classe ilustra o uso de decoradores para estender o comportamento de objetos de maneira flexível e modular, permitindo adicionar funcionalidades de customização de forma incremental.
*/
