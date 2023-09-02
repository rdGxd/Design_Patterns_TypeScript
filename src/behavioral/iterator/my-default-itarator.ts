import { MyDataStructure } from './my-data-structure'; // Importa a estrutura de dados associada ao iterador
import { MyIteratorProtocol } from './my-iterator-protocol'; // Importa o protocolo do iterador

export class MyDefaultIterator implements MyIteratorProtocol<string> {
  private index = 0; // Índice interno para controlar a posição atual no iterador

  // O construtor recebe a estrutura de dados associada ao iterador
  constructor(private readonly dataStructure: MyDataStructure) {}

  // Método para redefinir o iterador para a posição inicial
  reset(): void {
    this.index = 0;
  }

  // Método para avançar para o próximo elemento no iterador
  next(): IteratorResult<string> {
    // Cria um objeto IteratorResult com o valor atual e inicializa 'done' com base na posição atual
    const returnValue = this.makeValue(this.dataStructure.items[this.index]);
    returnValue.done = this.index >= this.dataStructure.size();

    // Incrementa o índice para apontar para o próximo elemento
    this.index++;

    return returnValue;
  }

  // Método auxiliar para criar um objeto IteratorResult com um valor e 'done' inicializado como falso
  private makeValue(value: string): IteratorResult<string> {
    return { value, done: false };
  }
}
