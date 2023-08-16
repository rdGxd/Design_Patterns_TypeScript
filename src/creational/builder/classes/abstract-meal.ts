// Importando a interface necessária para garantir que a classe implemente os métodos obrigatórios.
import { MealCompositeProtocol } from '../interfaces/meal-composite-protocol';

// Definindo uma classe abstrata que implementa a interface MealCompositeProtocol.
export abstract class AbstractMeal implements MealCompositeProtocol {
  // O construtor da classe, que recebe o nome e preço da refeição como parâmetros.
  constructor(
    private name: string,
    private price: number,
  ) {}

  // Método para obter o preço da refeição.
  getPrice(): number {
    return this.price;
  }
}
