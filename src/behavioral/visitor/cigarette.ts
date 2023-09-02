import { TaxVisitorProtocol } from './tax-visitor-protocol'; // Importa o protocolo do visitante de impostos
import { VisitableProduct } from './visitable-product'; // Importa a classe base de produtos visitáveis

// Classe que representa um produto de cigarro, que é um tipo de produto visitável
export class Cigarette extends VisitableProduct {
  constructor(protected price: number) {
    super('Cigarette', price); // Chama o construtor da classe base com o nome e preço
  }

  // Método para obter o preço com impostos usando um visitante de impostos
  getPriceWithTaxes(visitor: TaxVisitorProtocol): number {
    return visitor.calculateTaxesForCigarette(this);
  }
}
