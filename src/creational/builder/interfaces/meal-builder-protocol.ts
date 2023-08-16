// Interface que define o contrato para um construtor de refeições.
export interface MealBuilderProtocol {
  // Método para montar uma refeição.
  makeMeal(): this;

  // Métodos opcionais para montar uma bebida e uma sobremesa.
  // makeBeverage(): this;
  // makeDessert(): this;
}
