import { TaxVisitorProtocol } from './tax-visitor-protocol'; // Importa o protocolo de visitante de impostos

// Classe abstrata que define a estrutura básica de um produto visitável
export abstract class VisitableProduct {
  constructor(
    protected name: string, // Nome do produto
    protected price: number, // Preço do produto
  ) {}

  // Método para obter o nome do produto
  getName(): string {
    return this.name;
  }

  // Método para obter o preço base do produto
  getPrice(): number {
    return this.price;
  }

  // Método abstrato que deve ser implementado pelas subclasses para calcular o preço com impostos
  abstract getPriceWithTaxes(visitor: TaxVisitorProtocol): number;
}
