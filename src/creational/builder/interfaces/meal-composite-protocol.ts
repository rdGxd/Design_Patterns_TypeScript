// Neste código, é definida uma interface chamada `MealCompositeProtocol` que estabelece o contrato para um componente de refeição composta. Aqui está a descrição da interface:

// Interface que define o contrato para um componente de refeição composta.
export interface MealCompositeProtocol {
  // Método para obter o preço total do componente de refeição.
  getPrice(): number;
}

/*
Nesta interface, o contrato para um componente de refeição composta é definido. Ela possui um método getPrice() que retorna um número representando o preço total do componente de refeição. Qualquer classe que implemente esta interface deve fornecer uma implementação concreta desse método para calcular e retornar o preço total do componente. Essa interface pode ser usada como base para criar componentes de refeição compostos que podem ser construídos e calculados de acordo com diferentes tipos de refeições.
*/
