// Importando a interface DeliveryFlyweight e os tipos necessários
import { DeliveryFlyweight } from './delivery-flyweight';
import { DeliveryLocationData } from './delivery-types';

// Definindo a classe DeliveryLocation que implementa a interface DeliveryFlyweight
export class DeliveryLocation implements DeliveryFlyweight {
  // O construtor recebe os dados intrínsecos da localização
  constructor(private readonly intrinsicState: DeliveryLocationData) {}

  // Implementação do método deliver da interface DeliveryFlyweight
  deliver(name: string, number: string): void {
    // Exibindo informações sobre a entrega
    console.log(`Entrega para ${name}`);
    console.log(
      `Em ${this.intrinsicState.street}, ${this.intrinsicState.city}`,
    );
    console.log(`Número: ${number}`);
    console.log('###');
  }
}

/*
Estamos importando a interface DeliveryFlyweight e o tipo DeliveryLocationData de seus respectivos arquivos.

Definimos a classe DeliveryLocation, que implementa a interface DeliveryFlyweight.

A classe possui um construtor que recebe os dados intrínsecos da localização (intrinsicState) e armazena-os como uma propriedade somente leitura (readonly).

A classe implementa o método deliver da interface DeliveryFlyweight, que é responsável por exibir informações sobre a entrega, como o nome do destinatário, a rua e a cidade da localização intrínseca e o número do endereço.

Cada vez que o método deliver é chamado, as informações da entrega são exibidas no console, seguidas de um separador "###".

Essa classe representa um objeto flyweight que contém informações intrínsecas sobre uma localização de entrega e implementa o comportamento de entrega de acordo com a interface DeliveryFlyweight.
*/
