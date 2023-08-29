// Importando as classes necessárias para implementar o padrão de estado
import { OrderApproved } from './order-approved';
import { OrderReject } from './order-reject';
import { ShoppingOrder } from './shopping-order';
import { ShoppingOrderState } from './shopping-order-state';

// Classe que representa o estado de "Pedido Pendente" de um pedido de compras
export class OrderPending implements ShoppingOrderState {
  private name = 'OrderPending'; // Nome do estado

  constructor(private order: ShoppingOrder) {}

  getName(): string {
    return this.name; // Retorna o nome do estado
  }

  // Método para aprovar o pagamento e mudar para o estado de "Pedido Aprovado"
  approvePayment(): void {
    this.order.setState(new OrderApproved(this.order));
  }

  // Método para rejeitar o pagamento e mudar para o estado de "Pedido Rejeitado"
  rejectPayment(): void {
    this.order.setState(new OrderReject(this.order));
  }

  // Método para lidar com um pedido já no estado de pagamento pendente
  waitPayment(): void {
    console.log(`O Pedido já está no estado de pagamento pendente.`);
  }

  // Método para lidar com o pedido a ser enviado (não é possível enviar com pagamento pendente)
  shipOrder(): void {
    console.log('Não posso enviar o pedido com o pagamento pendente');
  }
}

/*
A classe OrderPending implementa a interface ShoppingOrderState e define comportamentos específicos para o estado em que um pedido está pendente de pagamento. Ela permite aprovar ou rejeitar o pagamento, bem como informa que o pedido já está no estado de pagamento pendente e não pode ser enviado com o pagamento pendente. Essa classe é uma parte importante da implementação do padrão de design State para gerenciar os diferentes estados possíveis de um objeto ShoppingOrder.
*/
