import { Customer } from './customer'; // Importação da interface Customer do módulo './customer'

// Definição da classe IndividualCustomer, que implementa a interface Customer
export class IndividualCustomer implements Customer {
  constructor(public name: string) {
    this.name += ' (INDIVIDUAL)'; // Adiciona a etiqueta '(INDIVIDUAL)' ao nome do cliente
  }
}
