import { Customer } from '../customer/customer'; // Importação da interface Customer do módulo '../customer/customer'
import { IndividualCustomer } from '../customer/individual-customer'; // Importação da classe IndividualCustomer do módulo '../customer/individual-customer'
import { IndividualCar } from '../vehicle/individual-car'; // Importação da classe IndividualCar do módulo '../vehicle/individual-car'
import { VehicleProtocol } from '../vehicle/vehicle-protocol'; // Importação do protocolo VehicleProtocol do módulo '../vehicle/vehicle-protocol'

// Definição da classe IndividualCreateVehicleCustomerFactory
export class IndividualCreateVehicleCustomerFactory {
  createCustomer(customerName: string): Customer {
    return new IndividualCustomer(customerName); // Cria um novo cliente Individual com o nome fornecido
  }

  createVehicle(vehicleName: string, customerName: string): VehicleProtocol {
    const customer = this.createCustomer(customerName); // Cria um cliente usando o método createCustomer
    return new IndividualCar(vehicleName, customer); // Cria um novo veículo IndividualCar com o nome do veículo e o cliente criado
  }
}
