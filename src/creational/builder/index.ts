// Importando as classes de construtores de refeições.
import { MainDishBuilder } from './classes/main-dish-builder';
import { VeganDishBuilder } from './classes/vegan-dish-builder';

// Criando uma instância do construtor de pratos principais.
const mainDishBuilder = new MainDishBuilder();

// Construindo uma refeição principal e exibindo a refeição e o preço.
mainDishBuilder.makeMeal();
console.log(mainDishBuilder.getMeal()); // Mostra a refeição principal.
console.log(mainDishBuilder.getPrice()); // Mostra o preço da refeição.

// Resetando o construtor para construir uma nova refeição.
mainDishBuilder.reset();

// Criando uma nova refeição que inclui uma bebida.
const meal2 = mainDishBuilder.makeBeverage().getMeal();
console.log(meal2); // Mostra a nova refeição que inclui uma bebida.

// Criando uma instância do construtor de pratos veganos.
const veganDishBuilder = new VeganDishBuilder();

// Construindo uma refeição vegana e exibindo o preço da refeição.
const veganMeal = veganDishBuilder.makeMeal().getMeal();
console.log(veganMeal.getPrice()); // Mostra o preço da refeição vegana.
