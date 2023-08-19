// Importação da classe Vehicle do caminho especificado
import { Vehicle } from '../vehicle/vehicle';

// Definição da classe abstrata VehicleFactory
export abstract class VehicleFactory {
  // Método de fábrica abstrato
  abstract getVehicle(vehicleName: string): Vehicle;

  // Método de retirada de veículo
  pickUp(customerName: string, vehicleName: string): Vehicle {
    // Obtém um veículo com base no nome fornecido
    const car = this.getVehicle(vehicleName);

    // Realiza a retirada do veículo pelo cliente
    car.pickUp(customerName);

    return car; // Retorna o veículo para uso posterior
  }
}

/*
Este código apresenta uma classe abstrata chamada VehicleFactory. Essa classe atua como um padrão de fábrica para criar instâncias de veículos, seguindo o princípio do método de fábrica. A classe possui um método abstrato getVehicle() que deve ser implementado por subclasses concretas, especificando como criar uma instância de veículo com base no nome fornecido.

Além disso, a classe VehicleFactory fornece um método pickUp() que facilita a retirada de um veículo pelo cliente. Esse método utiliza o método getVehicle() para obter um veículo específico com base no nome e, em seguida, chama o método pickUp() desse veículo. Finalmente, o veículo é retornado para ser usado posteriormente.
*/
