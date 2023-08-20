import { Customer } from '../customer/customer'; // Importação da interface Customer do módulo '../customer/customer'
import { VehicleProtocol } from '../vehicle/vehicle-protocol'; // Importação do protocolo VehicleProtocol do módulo '../vehicle/vehicle-protocol'

// Definição da interface CreateCustomerVehicleFactory
export interface CreateCustomerVehicleFactory {
  createCustomer(customerName: string): Customer; // Método para criar um cliente com base no nome fornecido
  createVehicle(vehicleName: string, customerName: string): VehicleProtocol; // Método para criar um veículo com base no nome do veículo e do cliente
}
