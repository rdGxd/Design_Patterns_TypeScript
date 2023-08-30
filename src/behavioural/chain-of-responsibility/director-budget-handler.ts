// Importando a classe BaseBudgetHandler do arquivo './base-budget-handler' e a classe CustomerBudget do arquivo './customer-budget'

import { BaseBudgetHandler } from './base-budget-handler';
import { CustomerBudget } from './customer-budget';

// Classe que implementa um manipulador de orçamento específico para o Diretor
export class DirectorBudgetHandler extends BaseBudgetHandler {
  // Método para tratar um orçamento recebido
  handle(budget: CustomerBudget): CustomerBudget {
    // Verifica se o total do orçamento está abaixo ou igual a 50000
    if (budget.total <= 50000) {
      console.log(`O diretor tratou o orçamento`); // Mensagem de tratamento
      budget.approved = true; // Aprova o orçamento
      return budget; // Retorna o orçamento modificado
    }

    // Caso o total do orçamento seja maior que 50000, passa para o próximo manipulador na cadeia
    return super.handle(budget);
  }
}

/*
A classe DirectorBudgetHandler é uma implementação específica de um manipulador de orçamento que representa um diretor. Ela herda da classe BaseBudgetHandler e sobrescreve o método handle(). Quando o total do orçamento é menor ou igual a 50000, o diretor trata o orçamento, aprova-o e retorna o orçamento modificado. Caso o total do orçamento seja maior que 50000, ele passa a responsabilidade para o próximo manipulador na cadeia usando super.handle(budget), seguindo a lógica do padrão Chain of Responsibility.
*/
