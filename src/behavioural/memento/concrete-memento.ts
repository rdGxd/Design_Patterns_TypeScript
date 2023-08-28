// Importando a interface Memento do arquivo './memento'
import { Memento } from './memento';

// Classe ConcreteMemento implementa a interface Memento
export class ConcreteMemento implements Memento {
  // O construtor da classe recebe os parâmetros necessários para criar um memento
  constructor(
    private name: string, // Nome associado ao memento
    private date: Date, // Data de criação do memento
    private filePath: string, // Caminho do arquivo associado ao memento
    private fileFormat: string, // Formato do arquivo associado ao memento
  ) {}

  // Método para obter o nome do memento
  getName(): string {
    return this.name;
  }

  // Método para obter a data de criação do memento
  getDate(): Date {
    return this.date;
  }

  // Método para obter o caminho do arquivo associado ao memento
  getFilePath(): string {
    return this.filePath;
  }

  // Método para obter o formato do arquivo associado ao memento
  getFileFormat(): string {
    return this.fileFormat;
  }
}
