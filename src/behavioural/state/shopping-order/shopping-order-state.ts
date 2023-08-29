// Interface que define os métodos comuns para os estados de um pedido de compras
export interface ShoppingOrderState {
  getName(): string; // Método para obter o nome do estado
  approvePayment(): void; // Método para aprovar o pagamento
  rejectPayment(): void; // Método para rejeitar o pagamento
  waitPayment(): void; // Método para mover para o estado de pagamento pendente
  shipOrder(): void; // Método para enviar o pedido
}

/*
Esta interface define os métodos que cada estado de um pedido de compras deve implementar. Cada estado, como OrderApproved, OrderPending e OrderReject, implementa essa interface, permitindo que um objeto de pedido possa alternar entre diferentes estados de maneira uniforme, independentemente do estado específico em que se encontra. Isso ajuda a criar um sistema flexível e extensível para gerenciar os diferentes comportamentos possíveis de um pedido em diferentes situações.
*/
