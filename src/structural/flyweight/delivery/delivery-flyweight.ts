// Definindo a interface DeliveryFlyweight
export interface DeliveryFlyweight {
  // Método para realizar a entrega usando dados de nome e número
  deliver(name: string, number: string): void;
}

/*
Foi definida a interface DeliveryFlyweight.

A interface possui um método chamado deliver, que é responsável por realizar a entrega. Ele recebe dois parâmetros:

name: O nome do destinatário da entrega.
number: O número do endereço de entrega.
Essa interface define um contrato para os objetos flyweight (objetos leves) que são utilizados para otimizar o uso de recursos, como parte de um padrão de projeto flyweight. Os objetos que implementam essa interface devem fornecer uma implementação para o método deliver, que realizará a ação de entrega com os detalhes fornecidos.
*/
