// Importando a classe ConcreteMemento do arquivo './concrete-memento' e a interface Memento do arquivo './memento'
import { ConcreteMemento } from './concrete-memento';
import { Memento } from './memento';

// Classe Originator (criador de mementos) que representa um editor de imagens
export class ImageEditor {
  constructor(
    private filePath: string, // Caminho do arquivo da imagem
    private fileFormat: string, // Formato do arquivo da imagem
  ) {}

  // Método para converter o formato da imagem para o formato fornecido
  convertFormatTo(format: string): void {
    this.fileFormat = format;
    this.filePath = this.filePath.split('.').slice(0, -1).join('');
    this.filePath += `.${format}`;
  }

  // Método para salvar o estado atual do editor de imagens como um memento
  save(): Readonly<Memento> {
    const date = new Date();

    // Cria e retorna um novo ConcreteMemento com as informações atuais
    return new ConcreteMemento(
      date.toISOString(), // Nome do memento (data no formato ISO)
      date, // Data de criação do memento
      this.filePath, // Caminho do arquivo da imagem no momento
      this.fileFormat, // Formato do arquivo da imagem no momento
    );
  }

  // Método para restaurar o estado do editor de imagens a partir de um memento
  restore(memento: Memento): void {
    const concreteMemento = memento as ConcreteMemento; // Converte o memento para ConcreteMemento
    this.filePath = concreteMemento.getFilePath(); // Restaura o caminho do arquivo da imagem
    this.fileFormat = concreteMemento.getFileFormat(); // Restaura o formato do arquivo da imagem
  }
}
