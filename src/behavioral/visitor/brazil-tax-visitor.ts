import { AlcoholicDrink } from './alcoholic-drink'; // Importa a classe de bebidas alcoólicas
import { Cigarette } from './cigarette'; // Importa a classe de cigarros
import { Food } from './food'; // Importa a classe de alimentos
import { TaxVisitorProtocol } from './tax-visitor-protocol'; // Importa o protocolo do visitante de impostos

// Classe que implementa um visitante de impostos específico para o Brasil
export class BrazilTaxVisitor implements TaxVisitorProtocol {
  // Método para calcular os impostos para alimentos com base no preço
  calculateTaxesForFood(food: Food): number {
    return food.getPrice() + food.getPrice() * 0.05; // 5%
  }

  // Método para calcular os impostos para cigarros com base no preço
  calculateTaxesForCigarette(cigarette: Cigarette): number {
    return cigarette.getPrice() + cigarette.getPrice() * 1.5; // 150%
  }

  // Método para calcular os impostos para bebidas alcoólicas com base no preço
  calculateTaxesForAlcoholicDrink(alcoholicDrink: AlcoholicDrink): number {
    return alcoholicDrink.getPrice() + alcoholicDrink.getPrice() * 0.5; // 50%
  }
}
