// Importando as interfaces e classes necessárias para construir as refeições.
import { MealBuilderProtocol } from '../interfaces/meal-builder-protocol';
import { MealBox } from './meal-box';
import { Beans, Rice } from './meals';

// Classe responsável por construir pratos veganos de refeições.
export class VeganDishBuilder implements MealBuilderProtocol {
  // Instância de MealBox que será usada para construir a refeição.
  private _meal: MealBox = new MealBox();

  // Método para resetar a construção da refeição.
  reset(): this {
    this._meal = new MealBox();
    return this;
  }

  // Método para montar um prato vegano de refeição.
  makeMeal(): this {
    // Criando instâncias de itens veganos de refeição (arroz e feijão).
    const rice = new Rice('Arroz', 5);
    const beans = new Beans('Feijão', 15);

    // Adicionando os itens à MealBox.
    this._meal.add(rice, beans);
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
