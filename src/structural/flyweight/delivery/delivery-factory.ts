// Importando as classes e tipos necessários
import { DeliveryFlyweight } from './delivery-flyweight';
import { DeliveryLocation } from './delivery-location';
import {
  DeliveryLocationData,
  DeliveryLocationDictionary,
} from './delivery-types';

// Definindo a classe DeliveryFactory
export class DeliveryFactory {
  // Armazenamento interno dos objetos de localização
  private locations: DeliveryLocationDictionary = {};

  // Método privado para criar um ID baseado nos dados de localização
  private createId(data: DeliveryLocationData): string {
    // Convertendo os valores dos dados de localização em um ID
    return Object.values(data)
      .map((item) => item.replace(/\s+/m, '').toLowerCase())
      .join('_');
  }

  // Método para criar ou reutilizar um objeto de localização
  makeLocation(intrinsicState: DeliveryLocationData): DeliveryFlyweight {
    // Criando uma chave única com base nos dados de localização
    const key = this.createId(intrinsicState);

    // Verificando se o objeto de localização já existe no cache
    if (key in this.locations) {
      return this.locations[key]; // Reutilizando o objeto existente
    }

    // Se o objeto não existir, criamos um novo, armazenamos no cache e retornamos
    this.locations[key] = new DeliveryLocation(intrinsicState);
    return this.locations[key];
  }

  // Método para obter todos os objetos de localização do cache
  getLocations(): DeliveryLocationDictionary {
    return this.locations;
  }
}

/*
Estamos importando as classes DeliveryFlyweight e DeliveryLocation, bem como os tipos DeliveryLocationData e DeliveryLocationDictionary dos arquivos correspondentes.

A classe DeliveryFactory é definida, que é responsável por criar e gerenciar objetos de localização.

A classe possui um armazenamento interno chamado locations para manter os objetos de localização já criados.

O método privado createId é usado para criar um ID único com base nos dados de localização. Os valores dos dados são convertidos em um formato adequado para criar um identificador.

O método público makeLocation é responsável por criar ou reutilizar objetos de localização. Ele verifica se um objeto com as mesmas propriedades já existe no cache e reutiliza-o se necessário. Caso contrário, cria um novo objeto, armazena-o no cache e o retorna.

O método público getLocations retorna o dicionário de objetos de localização armazenados no cache.

Esse código implementa uma fábrica que utiliza o padrão de projeto Flyweight para otimizar o uso de objetos de localização, reutilizando-os quando possível. Isso ajuda a economizar recursos e otimizar o desempenho.
*/
