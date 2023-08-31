// Classe que representa um orçamento do cliente
export class CustomerBudget {
  public approved = false; // Propriedade que indica se o orçamento foi aprovado ou não

  constructor(public total: number) {
    // Construtor que aceita o valor total do orçamento como argumento
    // O valor total é armazenado na propriedade 'total'
  }
}
