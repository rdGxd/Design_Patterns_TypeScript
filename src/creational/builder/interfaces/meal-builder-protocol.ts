// Neste código, é definida uma interface chamada `MealBuilderProtocol` que estabelece o contrato para um construtor de refeições. Aqui está a descrição da interface:

// Interface que define o contrato para um construtor de refeições.
export interface MealBuilderProtocol {
  // Método para montar uma refeição.
  makeMeal(): this;

  // Métodos opcionais para montar uma bebida e uma sobremesa.
  // makeBeverage(): this;
  // makeDessert(): this;
}

/*
Nesta interface, o contrato para um construtor de refeições é definido. Ela possui um método makeMeal() que monta uma refeição, representada pelo próprio objeto que implementa a interface. Além disso, existem métodos opcionais makeBeverage() e makeDessert() que poderiam ser adicionados posteriormente para adicionar uma bebida e uma sobremesa à refeição, respectivamente. Essa interface estabelece um padrão que os construtores de refeições podem seguir para criar e personalizar diferentes tipos de refeições.
*/
