import { ProductDecorator } from './product-decorator';

// Classe que estende o ProductDecorator para adicionar decoração de estampa aos produtos.
export class ProductStampDecorator extends ProductDecorator {
  // Sobrescreve o método getName para retornar o nome do produto com a indicação "Estampada".
  getName(): string {
    return `${this.product.getName()} Estampada`;
  }

  // Sobrescreve o método getPrice para calcular o preço do produto com a decoração de estampa.
  getPrice(): number {
    // Retorna o preço do produto original somado a um valor fixo de 10.
    return this.product.getPrice() + 10;
  }
}

/*
Nesse código, temos a classe ProductStampDecorator que estende a classe ProductDecorator. Essa classe é responsável por adicionar a decoração de estampa aos produtos. Ela sobrescreve os métodos getName e getPrice para implementar essa funcionalidade.

No método getName, a customização é feita ao retornar o nome do produto original concatenado com a palavra "Estampada". Isso indica visualmente que a decoração de estampa foi aplicada ao produto.

No método getPrice, a customização ocorre ao calcular o preço do produto com a decoração de estampa. O preço do produto original é obtido através do método getPrice() da classe base, e a isso é adicionado o valor fixo de 10 unidades. Portanto, o preço final do produto com a decoração de estampa será o preço original mais 10.

Assim como o exemplo anterior, essa classe ilustra o uso de decoradores para adicionar funcionalidades específicas aos produtos de forma modular e flexível.
*/
