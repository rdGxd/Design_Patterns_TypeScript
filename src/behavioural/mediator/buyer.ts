// Importando a classe Mediator do arquivo './mediator'
import { Mediator } from './mediator';

// Classe que representa um comprador no sistema de mediação
export class Buyer {
  constructor(private mediator: Mediator) {
    // O construtor recebe uma instância de Mediator que permite ao comprador interagir com o sistema
  }

  // Método para visualizar os produtos disponíveis através do mediador
  viewProducts(): void {
    this.mediator.showProducts(); // Chama o método do mediador para mostrar os produtos
  }

  // Método para comprar um produto específico através do mediador, passando o ID do produto
  buy(id: string): void {
    this.mediator.buy(id); // Chama o método do mediador para iniciar o processo de compra
  }
}
