// Importando as classes necessárias para implementar o padrão de estado
import { ShoppingOrder } from './shopping-order';
import { ShoppingOrderState } from './shopping-order-state';

// Classe que representa o estado de "Pedido Rejeitado" de um pedido de compras
export class OrderReject implements ShoppingOrderState {
  private name = 'OrderReject'; // Nome do estado

  constructor(private order: ShoppingOrder) {}

  getName(): string {
    return this.name; // Retorna o nome do estado
  }

  // Método para lidar com a tentativa de aprovação de pagamento em um pedido recusado
  approvePayment(): void {
    console.log(`Não posso aprovar o pagamento, o pedido foi recusado`);
  }

  // Método para lidar com a tentativa de rejeição de pagamento em um pedido já recusado
  rejectPayment(): void {
    console.log(`Não posso recusar o pagamento, o pedido já está recusado`);
  }

  // Método para lidar com a tentativa de mover para o estado "Pedido Pendente" em um pedido recusado
  waitPayment(): void {
    console.log(`Não posso mover para pendente, o pedido foi recusado`);
  }

  // Método para lidar com a tentativa de enviar um pedido com pagamento recusado
  shipOrder(): void {
    console.log('Não posso enviar um pedido com o pagamento recusado');
  }
}

/*
A classe OrderReject implementa a interface ShoppingOrderState e define comportamentos específicos para o estado em que um pedido foi recusado. Ela não permite aprovar, rejeitar ou mover para pendente um pedido que já foi recusado e também não permite enviar um pedido com pagamento recusado. Essa classe é uma parte importante da implementação do padrão de design State para gerenciar os diferentes estados possíveis de um objeto ShoppingOrder.
*/
