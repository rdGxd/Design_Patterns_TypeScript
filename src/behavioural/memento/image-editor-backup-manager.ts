// Importando a classe ImageEditor do arquivo './image-editor' e a interface Memento do arquivo './memento'
import { ImageEditor } from './image-editor';
import { Memento } from './memento';

// Classe responsável por gerenciar os backups (mementos) do ImageEditor
export class ImageEditorBackupManager {
  private mementos: Memento[] = []; // Array para armazenar os mementos

  // Construtor da classe recebe uma instância de ImageEditor
  constructor(private readonly imageEditor: ImageEditor) {}

  // Método para realizar o backup do estado atual do ImageEditor
  backup(): void {
    console.log(`BACKUP: Salvando o estado de ImageEditor`);
    this.mementos.push(this.imageEditor.save()); // Salva o memento no array
  }

  // Método para desfazer a última ação no ImageEditor
  undo(): void {
    const memento = this.mementos.pop(); // Pega o último memento do array

    if (!memento) {
      console.log(`BACKUP: Nenhum memento disponível para desfazer`);
      return;
    }

    this.imageEditor.restore(memento); // Restaura o ImageEditor para o estado do memento
    console.log(`BACKUP: ${memento.getName()} foi restaurado com sucesso`);
  }

  // Método para mostrar todos os mementos salvos
  showMementos(): void {
    for (const memento of this.mementos) {
      console.log(memento); // Mostra as informações de cada memento
    }
  }
}
