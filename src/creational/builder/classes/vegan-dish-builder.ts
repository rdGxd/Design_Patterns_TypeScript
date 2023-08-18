// Neste código, é definida a classe `VeganDishBuilder`, que implementa o contrato da interface `MealBuilderProtocol` para construir pratos veganos de refeições. Aqui está a descrição da classe:

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

/*
Nesta classe, VeganDishBuilder implementa a interface MealBuilderProtocol para construir pratos veganos de refeições. Ela mantém uma instância de MealBox para construir a refeição. Os métodos reset(), makeMeal(), getMeal() e getPrice() são definidos de acordo com o contrato da interface.

O método makeMeal() cria instâncias de itens veganos de refeição (no caso, Rice e Beans) e os adiciona à MealBox. O método getMeal() retorna a refeição construída (um MealBox contendo os itens veganos). O método getPrice() retorna o preço total da refeição construída.

Esta classe exemplifica a implementação do padrão Builder para criar pratos veganos de refeições de maneira estruturada e organizada.
*/
