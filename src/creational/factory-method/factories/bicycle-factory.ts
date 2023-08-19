// Importações para as classes e módulos necessários
import { Bicycle } from '../vehicle/bicycle'; // Importando a classe Bicycle do caminho especificado
import { Vehicle } from '../vehicle/vehicle'; // Importando a classe Vehicle do caminho especificado
import { VehicleFactory } from './vehicle-factory'; // Importando a classe VehicleFactory do diretório atual

// Definindo a classe BicycleFactory que estende a classe VehicleFactory
export class BicycleFactory extends VehicleFactory {
  // Um método para obter uma nova instância de Bicycle com base no nome do veículo fornecido
  getVehicle(vehicleName: string): Vehicle {
    return new Bicycle(vehicleName); // Criando uma nova instância de Bicycle com o nome de veículo fornecido
  }
}

/*
Esse código TypeScript define a classe BicycleFactory, que estende a classe VehicleFactory. A classe BicycleFactory possui um único método getVehicle(), que retorna uma nova instância da classe Bicycle com o nome de veículo fornecido. Esse padrão de fábrica auxilia na criação de instâncias da classe Bicycle de maneira consistente e centralizada.
*/
