import { AlcoholicDrink } from './alcoholic-drink'; // Importa a classe de bebidas alcoólicas
import { Cigarette } from './cigarette'; // Importa a classe de cigarros
import { Food } from './food'; // Importa a classe de alimentos
import { TaxVisitorProtocol } from './tax-visitor-protocol'; // Importa o protocolo de visitante de impostos

// Classe que implementa um visitante de impostos para os EUA
export class USTaxVisitor implements TaxVisitorProtocol {
  // Calcula os impostos para produtos alimentícios nos EUA (15%)
  calculateTaxesForFood(food: Food): number {
    return food.getPrice() + food.getPrice() * 0.15; // 15%
  }

  // Calcula os impostos para cigarros nos EUA (200%)
  calculateTaxesForCigarette(cigarette: Cigarette): number {
    return cigarette.getPrice() + cigarette.getPrice() * 2; // 200%
  }

  // Calcula os impostos para bebidas alcoólicas nos EUA (100%)
  calculateTaxesForAlcoholicDrink(alcoholicDrink: AlcoholicDrink): number {
    return alcoholicDrink.getPrice() + alcoholicDrink.getPrice() * 1; // 100%
  }
}
