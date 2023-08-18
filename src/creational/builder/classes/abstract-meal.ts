// Neste código, é definida uma classe abstrata chamada `AbstractMeal`, que implementa o contrato da interface `MealCompositeProtocol`. Aqui está a descrição da classe:

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

/*
Nesta classe, AbstractMeal é uma classe abstrata que implementa o contrato da interface MealCompositeProtocol. Ela serve como uma base para a criação de diferentes tipos de refeições.

A classe possui um construtor que recebe o nome e o preço da refeição como parâmetros. O método getPrice() é implementado de acordo com o contrato da interface MealCompositeProtocol e retorna o preço da refeição.

Esta classe abstrata pode ser estendida por outras classes que representam tipos específicos de refeições, como arroz, feijão, carne, bebida e sobremesa. Ela fornece uma implementação básica e compartilhada de funcionalidades para todas as classes de refeição.
*/
