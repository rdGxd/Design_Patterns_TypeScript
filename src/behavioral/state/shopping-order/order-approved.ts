// Importando as classes necessárias para implementar o padrão de estado
import { OrderPending } from './order-pending';
import { OrderReject } from './order-reject';
import { ShoppingOrder } from './shopping-order';
import { ShoppingOrderState } from './shopping-order-state';

// Classe que representa o estado de "Pedido Aprovado" de um pedido de compras
export class OrderApproved implements ShoppingOrderState {
  private name = 'OrderApproved'; // Nome do estado

  constructor(private order: ShoppingOrder) {}

  getName(): string {
    return this.name; // Retorna o nome do estado
  }

  // Método para lidar com aprovação de pagamento (já está aprovado)
  approvePayment(): void {
    console.log(`O Pedido já está no estado de pagamento aprovado.`);
  }

  // Método para rejeitar o pagamento e mudar para o estado de "Pedido Rejeitado"
  rejectPayment(): void {
    this.order.setState(new OrderReject(this.order));
  }

  // Método para retornar ao estado de "Pedido Pendente"
  waitPayment(): void {
    this.order.setState(new OrderPending(this.order));
  }

  // Método para enviar o pedido para o cliente (está no estado de Pedido Aprovado)
  shipOrder(): void {
    console.log('Enviando pedido para o cliente');
  }
}

/*
A classe OrderApproved implementa a interface ShoppingOrderState e define comportamentos específicos para o estado em que um pedido foi aprovado. Isso inclui a capacidade de rejeitar o pagamento, voltar para o estado de "Pedido Pendente" e enviar o pedido para o cliente. O estado "Pedido Aprovado" representa uma das possíveis situações que um objeto ShoppingOrder pode assumir, utilizando o padrão de design State para gerenciar essas diferentes situações de maneira flexível e organizada.
*/
