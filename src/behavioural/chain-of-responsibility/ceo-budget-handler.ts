// Importando a classe BaseBudgetHandler do arquivo './base-budget-handler' e a classe CustomerBudget do arquivo './customer-budget'
import { BaseBudgetHandler } from './base-budget-handler';
import { CustomerBudget } from './customer-budget';

// Classe que representa um tratador de orçamentos específico (CEO)
export class CEOBudgetHandler extends BaseBudgetHandler {
  // Implementação do método abstrato handle() da classe base
  handle(budget: CustomerBudget): CustomerBudget {
    console.log(`O CEO trata qualquer orçamento`); // Mensagem de log
    budget.approved = true; // Aprovação do orçamento
    return budget; // Retorna o orçamento modificado
  }
}

/*
A classe CEOBudgetHandler é uma implementação concreta de um tratador de orçamentos que herda da classe abstrata BaseBudgetHandler. Ela implementa o método handle(budget) para tratar o orçamento passado como argumento. Neste caso, o CEO trata qualquer orçamento, define a propriedade approved como true para indicar a aprovação e retorna o orçamento modificado.
*/
