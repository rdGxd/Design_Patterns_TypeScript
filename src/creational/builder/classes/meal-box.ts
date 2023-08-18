// Neste código, é definida a classe `MealBox`, que representa uma caixa de refeição composta por itens de refeição. A classe implementa a interface `MealCompositeProtocol` para garantir que ela tenha o método `getPrice()`. Aqui está a descrição da classe:

// Importando a interface necessária para garantir que a classe implemente os métodos obrigatórios.
import { MealCompositeProtocol } from '../interfaces/meal-composite-protocol';

// Classe que representa uma caixa de refeição composta por itens de refeição.
export class MealBox implements MealCompositeProtocol {
  // Array privado para armazenar os itens de refeição na caixa.
  private readonly _children: MealCompositeProtocol[] = [];

  // Método para calcular o preço total da refeição contida na caixa.
  getPrice(): number {
    // Usando o método reduce para somar os preços de todos os itens de refeição.
    return this._children.reduce((sum, meal) => sum + meal.getPrice(), 0);
  }

  // Método para adicionar itens de refeição à caixa.
  add(...meal: MealCompositeProtocol[]): void {
    // Usando o spread operator (...) para aceitar um ou mais itens de refeição como parâmetros.
    meal.forEach((item) => this._children.push(item));
  }
}

/*
Nesta classe, MealBox representa uma caixa de refeição composta por itens de refeição. Ela implementa a interface MealCompositeProtocol, garantindo que tenha o método getPrice() para calcular o preço total da refeição contida na caixa.

A propriedade _children é um array privado que armazena os itens de refeição na caixa. O método getPrice() usa o método reduce() para somar os preços de todos os itens de refeição contidos na caixa.

O método add(...meal) permite adicionar itens de refeição à caixa, aceitando um ou mais itens como parâmetros usando o spread operator (...). Isso permite que a caixa contenha diferentes tipos de itens de refeição, como arroz, feijão, carne, bebida etc.

Essa classe exemplifica a composição de refeições, permitindo criar refeições compostas que podem conter uma variedade de itens diferentes.
*/
