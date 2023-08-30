// Importando a classe CustomerBudget do arquivo './customer-budget'

import { CustomerBudget } from './customer-budget';

// Classe abstrata que serve como base para os manipuladores de orçamento
export abstract class BaseBudgetHandler {
  protected nextHandler: BaseBudgetHandler | null = null;

  // Método para definir o próximo manipulador na cadeia
  setNextHandler(handler: BaseBudgetHandler): BaseBudgetHandler {
    this.nextHandler = handler;
    return handler;
  }

  // Método abstrato que será implementado nas classes filhas para manipular o orçamento
  // abstract handle(budget: CustomerBudget): CustomerBudget;

  // Método para passar o orçamento para o próximo manipulador na cadeia
  // ou retornar o orçamento sem alterações se não houver próximo manipulador
  // na cadeia
  handle(budget: CustomerBudget): CustomerBudget {
    if (this.nextHandler) return this.nextHandler.handle(budget);
    return budget;
  }
}

/*
Essa classe BaseBudgetHandler é uma classe abstrata que define o comportamento básico para os manipuladores de orçamento na implementação do padrão Chain of Responsibility. Ela possui um método setNextHandler() para definir o próximo manipulador na cadeia e um método abstrato handle() que será implementado pelas classes filhas para realizar o processamento específico do orçamento. O método handle() também permite passar o orçamento para o próximo manipulador na cadeia, se houver, ou retornar o orçamento sem alterações caso não haja mais manipuladores na cadeia.
*/
