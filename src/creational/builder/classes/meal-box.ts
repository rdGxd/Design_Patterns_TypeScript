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
