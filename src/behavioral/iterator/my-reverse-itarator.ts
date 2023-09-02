import { MyDataStructure } from './my-data-structure'; // Importa a estrutura de dados associada ao iterador
import { MyIteratorProtocol } from './my-iterator-protocol'; // Importa o protocolo do iterador

export class MyReserveIterator implements MyIteratorProtocol<string> {
  private index = this.dataStructure.size(); // Inicializa o índice com o tamanho da estrutura de dados

  // O construtor recebe a estrutura de dados associada ao iterador
  constructor(private readonly dataStructure: MyDataStructure) {}

  // Método para redefinir o iterador para a posição inicial (final reverso)
  reset(): void {
    this.index = this.dataStructure.size();
  }

  // Método para avançar para o próximo elemento no iterador reverso
  next(): IteratorResult<string> {
    this.index--; // Decrementa o índice para apontar para o próximo elemento reverso
    const returnValue = this.makeValue(this.dataStructure.items[this.index]);
    returnValue.done = this.index < 0; // Define 'done' como verdadeiro quando atingir o final reverso
    return returnValue;
  }

  // Método auxiliar para criar um objeto IteratorResult com um valor e 'done' inicializado como falso
  private makeValue(value: string): IteratorResult<string> {
    return { value, done: false };
  }
}
