// Importando a classe DeliveryLocation
import { DeliveryLocation } from './delivery-location';

// Definindo o tipo DeliveryLocationData para representar os dados de localização
export type DeliveryLocationData = {
  readonly street: string; // Rua da localização
  readonly city: string; // Cidade da localização
};

// Definindo o tipo DeliveryLocationDictionary para mapear chaves a objetos DeliveryLocation
export type DeliveryLocationDictionary = { [k: string]: DeliveryLocation };

/*
Estamos importando a classe DeliveryLocation do arquivo delivery-location.

Definimos o tipo DeliveryLocationData para representar os dados de localização. Ele possui propriedades street (rua) e city (cidade), ambas marcadas como somente leitura (readonly).

Definimos o tipo DeliveryLocationDictionary, que é um tipo que mapeia chaves (strings) a objetos do tipo DeliveryLocation. Isso será usado para armazenar objetos de localização no contexto da classe DeliveryFactory que foi mencionada anteriormente.
*/
