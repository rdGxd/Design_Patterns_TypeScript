import { Customer } from '../customer/customer'; // Importação da interface Customer do módulo '../customer/customer'
import { VehicleProtocol } from './vehicle-protocol'; // Importação do protocolo VehicleProtocol do módulo './vehicle-protocol'

// Definição da classe IndividualCar, que implementa o protocolo VehicleProtocol
export class IndividualCar implements VehicleProtocol {
  constructor(
    public name: string,
    private readonly customer: Customer,
  ) {}

  pickUp(): void {
    console.log(
      `${this.name} está buscando ${this.customer.name} (INDIVIDUAL)`, // Exibe uma mensagem indicando que o veículo está buscando o cliente Individual
    );
  }
}
