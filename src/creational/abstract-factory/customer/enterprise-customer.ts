import { Customer } from './customer'; // Importação da interface Customer do módulo './customer'

// Definição da classe EnterpriseCustomer, que implementa a interface Customer
export class EnterpriseCustomer implements Customer {
  constructor(public name: string) {
    this.name += ' (ENTERPRISE)'; // Adiciona a etiqueta '(ENTERPRISE)' ao nome do cliente
  }
}
