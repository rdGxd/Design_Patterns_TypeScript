// Importações para as classes e módulos necessários
import { Car } from '../vehicle/car'; // Importando a classe Car do caminho especificado
import { Vehicle } from '../vehicle/vehicle'; // Importando a classe Vehicle do caminho especificado
import { VehicleFactory } from './vehicle-factory'; // Importando a classe VehicleFactory do caminho especificado

// Definição da classe CarFactory que estende a classe VehicleFactory
export class CarFactory extends VehicleFactory {
  // Método para obter uma nova instância de Car com base no nome do veículo fornecido
  getVehicle(vehicleName: string): Vehicle {
    return new Car(vehicleName); // Criando uma nova instância de Car com o nome do veículo fornecido
  }
}

/*
Este código em TypeScript apresenta a classe CarFactory, que é uma extensão da classe abstrata VehicleFactory. A principal função dessa classe é implementar o método getVehicle(), que retorna uma nova instância da classe Car com o nome do veículo fornecido como argumento.

Ao utilizar essa fábrica, é possível criar instâncias da classe Car de forma organizada e reutilizável, seguindo o conceito de um padrão de design de fábrica. Isso centraliza a lógica de criação de objetos da classe Car e facilita a manutenção e expansão do código.
*/
