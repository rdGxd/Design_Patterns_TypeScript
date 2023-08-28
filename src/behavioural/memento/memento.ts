// Interface que define a estrutura de um Memento
export interface Memento {
  getName(): string; // Método para obter o nome associado ao memento
  getDate(): Date; // Método para obter a data de criação do memento
}
