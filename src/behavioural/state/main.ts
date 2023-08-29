// Importando a classe ShoppingOrder do arquivo './shopping-order/shopping-order'
import { ShoppingOrder } from './shopping-order/shopping-order';

// Criando uma instância de ShoppingOrder (estado inicial: Pendente)
const order = new ShoppingOrder(); // Pendente

// Aprovando o pagamento do pedido (mudando para o estado: Aprovado)
order.approvePayment(); // Aprovado

// Mudando o pedido de volta para o estado Pendente
order.waitPayment(); // Pendente

// Tentando enviar o pedido no estado Pendente (não é possível enviar)
order.shipOrder(); // Não pode enviar o pedido

// Tentando recusar o pagamento do pedido no estado Pendente (não altera o estado)
order.rejectPayment(); // Daqui não altera mas o estado

// Tentando aprovar o pagamento do pedido após a tentativa de recusa (não é possível)
order.approvePayment(); // Não

// Tentando mover o pedido para o estado de pagamento Pendente após a tentativa de recusa (não é possível)
order.waitPayment(); // Não

// Tentando enviar o pedido após as tentativas anteriores (não é possível)
order.shipOrder(); // Não

/*
Parece que você está testando diferentes transições de estados do pedido de compra. As ações approvePayment(), waitPayment(), e shipOrder() mudam o estado do pedido, enquanto a ação rejectPayment() tenta recusar o pagamento, mas de acordo com a implementação anterior, essa ação não altera o estado. Os comentários no código ajudam a entender as ações e as restrições em cada situação de estado do pedido.
*/
