import { EnterpriseCreateVehicleCustomerFactory } from './factories/enterprise-customer-vehicle-factory'; // Importação da classe EnterpriseCreateVehicleCustomerFactory do módulo './factories/enterprise-customer-vehicle-factory'
import { IndividualCreateVehicleCustomerFactory } from './factories/individual-customer-vehicle-factory'; // Importação da classe IndividualCreateVehicleCustomerFactory do módulo './factories/individual-customer-vehicle-factory'

// Criação das fábricas de veículos para clientes Enterprise e Individual
const enterpriseFactory = new EnterpriseCreateVehicleCustomerFactory();
const individualFactory = new IndividualCreateVehicleCustomerFactory();

// Criação de veículos usando as fábricas
const car1 = enterpriseFactory.createVehicle(`Celta`, `Rodrigo`); // Cria um veículo do tipo Enterprise para o cliente Rodrigo
const car2 = individualFactory.createVehicle('Fusca', 'João'); // Cria um veículo do tipo Individual para o cliente João

// Chamada do método pickUp() para buscar os clientes
car1.pickUp(); // Exibe uma mensagem indicando que o veículo está buscando o cliente Rodrigo (Enterprise)
car2.pickUp(); // Exibe uma mensagem indicando que o veículo está buscando o cliente João (Individual)
