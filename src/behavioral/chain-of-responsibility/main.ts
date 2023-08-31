// Importando as classes necessárias para a implementação do padrão Chain of Responsibility

import { CEOBudgetHandler } from './ceo-budget-handler';
import { CustomerBudget } from './customer-budget';
import { DirectorBudgetHandler } from './director-budget-handler';
import { ManagerBudgetHandler } from './manager-budget-handler';
import { SellerBudgetHandler } from './seller-budget-handler';

// Criando uma instância de CustomerBudget com um valor de 500001
const customerBudget = new CustomerBudget(500001);

// Criando uma instância do manipulador SellerBudgetHandler
const seller = new SellerBudgetHandler();

// Configurando a ordem dos manipuladores na cadeia
seller
  .setNextHandler(new ManagerBudgetHandler())
  .setNextHandler(new DirectorBudgetHandler())
  .setNextHandler(new CEOBudgetHandler());

// Iniciando o processamento do orçamento pela cadeia de manipuladores
seller.handle(customerBudget);

// Exibindo o orçamento após o processamento pela cadeia de manipuladores
console.log(customerBudget);

/*
Neste código, você está criando uma instância de CustomerBudget com um valor e, em seguida, configurando a cadeia de manipuladores na ordem desejada (do mais específico para o mais geral). Você está usando o manipulador SellerBudgetHandler como o início da cadeia, e para cada manipulador subsequente, você está usando o método setNextHandler() para configurar o próximo manipulador na cadeia.
*/
