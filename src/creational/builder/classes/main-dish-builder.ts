// Neste código, é definida a classe `MainDishBuilder`, que é responsável por construir pratos principais de refeições. A classe implementa o contrato da interface `MealBuilderProtocol` para construir diferentes tipos de refeições. Aqui está a descrição da classe:

// Importando as interfaces e classes necessárias para construir as refeições.
import { MealBuilderProtocol } from '../interfaces/meal-builder-protocol';
import { MealBox } from './meal-box';
import { Beans, Beverage, Dessert, Meat, Rice } from './meals';

// Classe responsável por construir pratos principais de refeições.
export class MainDishBuilder implements MealBuilderProtocol {
  // Instância de MealBox que será usada para construir a refeição.
  private _meal: MealBox = new MealBox();

  // Método para resetar a construção da refeição.
  reset(): this {
    this._meal = new MealBox();
    return this;
  }

  // Método para montar um prato principal de refeição.
  makeMeal(): this {
    // Criando instâncias de diferentes itens de refeição (arroz, feijão, carne).
    const rice = new Rice('Arroz', 5);
    const beans = new Beans('Feijão', 15);
    const meat = new Meat('Carne', 20);

    // Adicionando os itens à MealBox.
    this._meal.add(rice, beans, meat);
    return this;
  }

  // Método para adicionar uma bebida à refeição.
  makeBeverage(): this {
    // Criando uma instância de bebida.
    const beverage = new Beverage('Bebida', 7);

    // Adicionando a bebida à MealBox.
    this._meal.add(beverage);
    return this;
  }

  // Método para adicionar uma sobremesa à refeição.
  makeDessert(): this {
    // Criando uma instância de sobremesa.
    const dessert = new Dessert('Pudim', 10);

    // Adicionando a sobremesa à MealBox.
    this._meal.add(dessert);
    return this;
  }

  // Método para obter a refeição construída.
  getMeal(): MealBox {
    return this._meal;
  }

  // Método para obter o preço total da refeição construída.
  getPrice(): number {
    return this._meal.getPrice();
  }
}

/*
Nesta classe, MainDishBuilder é responsável por construir pratos principais de refeições. Ela implementa a interface MealBuilderProtocol, permitindo a construção de diferentes tipos de refeições.

Os métodos makeMeal(), makeBeverage() e makeDessert() criam instâncias de diferentes itens de refeição (arroz, feijão, carne, bebida e sobremesa) e os adicionam à MealBox usando o método add().

Os métodos getMeal() e getPrice() retornam a refeição construída (um MealBox contendo os itens de refeição) e o preço total da refeição, respectivamente.

Esta classe demonstra a criação e personalização de pratos principais de refeições utilizando o padrão Builder.
 */
