import { MainDishBuilder } from '../../creational/builder/classes/main-dish-builder';
import { VeganDishBuilder } from '../../creational/builder/classes/vegan-dish-builder';

export class BuilderFacade {
  // Esta classe atua como uma fachada para simplificar o uso dos construtores
  // localizados no arquivo src/creational/builder/index.ts

  private mainDishBuilder = new MainDishBuilder(); // Instância do construtor de prato principal
  private veganDishBuilder = new VeganDishBuilder(); // Instância do construtor de prato vegano

  makeMeal1(): void {
    this.mainDishBuilder.makeMeal(); // Constrói um prato principal
    console.log(this.mainDishBuilder.getMeal()); // Obtém e exibe o prato construído
    console.log(this.mainDishBuilder.getPrice()); // Obtém e exibe o preço do prato
  }

  makeMeal2(): void {
    this.mainDishBuilder.reset(); // Reseta o construtor para um novo prato
    const mealWithBeverage = this.mainDishBuilder.makeBeverage().getMeal(); // Constrói um prato principal com bebida
    console.log(mealWithBeverage); // Exibe o prato principal com bebida construído
  }

  makeMeal3(): void {
    const veganMeal = this.veganDishBuilder.makeMeal().getMeal(); // Constrói um prato vegano
    console.log(veganMeal); // Exibe o prato vegano construído
    console.log(veganMeal.getPrice()); // Obtém e exibe o preço do prato vegano
  }
}

/*
Este código define uma classe BuilderFacade que atua como uma fachada para simplificar o uso dos construtores localizados no arquivo src/creational/builder/index.ts. A fachada encapsula a criação de diferentes tipos de pratos, permitindo que os clientes construam pratos principais e veganos de maneira mais conveniente através dos métodos makeMeal1, makeMeal2 e makeMeal3. Cada método demonstra diferentes formas de utilizar os construtores e obter os pratos construídos, bem como seus preços.
*/
