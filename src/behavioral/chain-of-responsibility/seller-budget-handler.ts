// Importando a classe BaseBudgetHandler do arquivo './base-budget-handler' e a classe CustomerBudget do arquivo './customer-budget'

import { BaseBudgetHandler } from './base-budget-handler';
import { CustomerBudget } from './customer-budget';

// Classe que implementa um manipulador de orçamento específico para o Vendedor
export class SellerBudgetHandler extends BaseBudgetHandler {
  // Método para tratar um orçamento recebido
  handle(budget: CustomerBudget): CustomerBudget {
    // Verifica se o total do orçamento está abaixo ou igual a 1000
    if (budget.total <= 1000) {
      console.log(`O vendedor tratou o orçamento`); // Mensagem de tratamento
      budget.approved = true; // Aprova o orçamento
      return budget; // Retorna o orçamento modificado
    }

    // Caso o total do orçamento seja maior que 1000, passa para o próximo manipulador na cadeia
    return super.handle(budget);
  }
}

/*
A classe SellerBudgetHandler é uma implementação específica de um manipulador de orçamento que representa um vendedor. Tal como nas outras classes de manipuladores, ela herda da classe BaseBudgetHandler e sobrescreve o método handle(). Se o total do orçamento for menor ou igual a 1000, o vendedor trata o orçamento, aprova-o e retorna o orçamento modificado. Caso contrário, ele passa a responsabilidade para o próximo manipulador na cadeia usando super.handle(budget), seguindo o padrão Chain of Responsibility.
*/
