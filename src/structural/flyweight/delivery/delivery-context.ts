// Importando a classe DeliveryFactory
import { DeliveryFactory } from './delivery-factory';

// Definindo a função deliveryContext que usa uma fábrica para realizar uma entrega
export const deliveryContext = (
  factory: DeliveryFactory, // A fábrica utilizada para criar objetos relacionados à entrega
  name: string, // Nome do destinatário
  number: string, // Número do endereço de entrega
  street: string, // Rua do endereço de entrega
  city: string, // Cidade do endereço de entrega
): void => {
  // Criando um objeto de localização usando a fábrica e os dados fornecidos
  const location = factory.makeLocation({ street, city });

  // Realizando a entrega no local definido
  location.deliver(name, number);
};

/*
Estamos importando a classe DeliveryFactory de um arquivo chamado delivery-factory.

Definimos uma função chamada deliveryContext, que encapsula a lógica para realizar uma entrega. Essa função recebe como parâmetros:

factory: Uma instância da classe DeliveryFactory, que será usada para criar objetos relacionados à entrega.
name: O nome do destinatário da entrega.
number: O número do endereço de entrega.
street: O nome da rua do endereço de entrega.
city: O nome da cidade do endereço de entrega.
Dentro da função:

Criamos um objeto de localização usando a fábrica fornecida e os detalhes da rua e cidade. Isso é feito chamando o método makeLocation na instância da fábrica.
Chamamos o método deliver no objeto de localização para efetuar a entrega, passando o nome do destinatário e o número do endereço.
Essa função deliveryContext permite encapsular a lógica de criação de objetos relacionados à entrega e a execução da entrega em um contexto único, tornando o código mais modular e compreensível.
*/
