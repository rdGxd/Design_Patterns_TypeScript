import { AlcoholicDrink } from './alcoholic-drink'; // Importa a classe de bebidas alcoólicas
import { Cigarette } from './cigarette'; // Importa a classe de cigarros
import { Food } from './food'; // Importa a classe de alimentos

// Interface que define o protocolo para visitantes de impostos
export interface TaxVisitorProtocol {
  // Método para calcular os impostos para produtos alimentícios
  calculateTaxesForFood(food: Food): number;

  // Método para calcular os impostos para cigarros
  calculateTaxesForCigarette(cigarette: Cigarette): number;

  // Método para calcular os impostos para bebidas alcoólicas
  calculateTaxesForAlcoholicDrink(alcoholicDrink: AlcoholicDrink): number;
}
