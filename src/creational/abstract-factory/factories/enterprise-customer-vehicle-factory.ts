import { Customer } from '../customer/customer'; // Importação da interface Customer do módulo '../customer/customer'
import { EnterpriseCustomer } from '../customer/enterprise-customer'; // Importação da classe EnterpriseCustomer do módulo '../customer/enterprise-customer'
import { EnterpriseCar } from '../vehicle/enterprise-car'; // Importação da classe EnterpriseCar do módulo '../vehicle/enterprise-car'
import { VehicleProtocol } from '../vehicle/vehicle-protocol'; // Importação do protocolo VehicleProtocol do módulo '../vehicle/vehicle-protocol'

// Definição da classe EnterpriseCreateVehicleCustomerFactory
export class EnterpriseCreateVehicleCustomerFactory {
  createCustomer(customerName: string): Customer {
    return new EnterpriseCustomer(customerName); // Cria um novo cliente Enterprise com o nome fornecido
  }

  createVehicle(vehicleName: string, customerName: string): VehicleProtocol {
    const customer = this.createCustomer(customerName); // Cria um cliente usando o método createCustomer
    return new EnterpriseCar(vehicleName, customer); // Cria um novo veículo EnterpriseCar com o nome do veículo e o cliente criado
  }
}
