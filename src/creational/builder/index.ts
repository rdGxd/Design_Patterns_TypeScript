// Neste código, são importadas classes de construtores de refeições, usadas para criar e personalizar pratos de refeições. Aqui está uma descrição do código:

// Importando as classes de construtores de pratos de refeições.
import { MainDishBuilder } from './classes/main-dish-builder';
import { VeganDishBuilder } from './classes/vegan-dish-builder';

// Criando uma instância do construtor de pratos principais.
const mainDishBuilder = new MainDishBuilder();

// Construindo uma refeição principal e exibindo a refeição e o preço.
mainDishBuilder.makeMeal();
console.log(mainDishBuilder.getMeal()); // Mostra os detalhes da refeição principal.
console.log(mainDishBuilder.getPrice()); // Mostra o preço da refeição principal.

// Resetando o construtor para construir uma nova refeição.
mainDishBuilder.reset();

// Criando uma nova refeição que inclui uma bebida.
const mealWithBeverage = mainDishBuilder.makeBeverage().getMeal();
console.log(mealWithBeverage); // Mostra os detalhes da nova refeição que inclui uma bebida.

// Criando uma instância do construtor de pratos veganos.
const veganDishBuilder = new VeganDishBuilder();

// Construindo uma refeição vegana e exibindo o preço da refeição.
const veganMeal = veganDishBuilder.makeMeal().getMeal();
console.log(veganMeal.getPrice()); // Mostra o preço da refeição vegana.

/*
Neste código, são importadas as classes MainDishBuilder e VeganDishBuilder, que são usadas para criar e personalizar pratos de refeições. Primeiro, uma instância de MainDishBuilder é criada para construir uma refeição principal, exibindo os detalhes da refeição e seu preço. Em seguida, o construtor é redefinido para criar uma nova refeição que inclui uma bebida. A mesma abordagem é aplicada usando a classe VeganDishBuilder para criar uma refeição vegana e exibir seu preço. Este código demonstra o uso do padrão Builder para criar diferentes tipos de refeições personalizadas.
*/
