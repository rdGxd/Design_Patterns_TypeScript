import { MyDefaultIterator } from './my-default-itarator'; // Importa o iterador padrão
import { MyIteratorProtocol } from './my-iterator-protocol'; // Importa o protocolo do iterador

export class MyDataStructure {
  private _items: string[] = []; // Uma matriz privada para armazenar itens
  private iterator: MyIteratorProtocol<string> = new MyDefaultIterator(this); // O iterador padrão é usado por padrão

  // Método para adicionar itens à estrutura de dados
  addItem(...items: string[]): void {
    items.forEach((item) => this.items.push(item));
  }

  // Propriedade para obter a lista de itens
  get items(): string[] {
    return this._items;
  }

  // Método para obter o tamanho da estrutura de dados
  size(): number {
    return this.items.length;
  }

  // Método para alterar o tipo de iterador usado
  changeIterator(iterator: MyIteratorProtocol<string>): void {
    this.iterator = iterator;
  }

  // Implementação do Symbol.iterator para permitir a iteração usando "for...of"
  [Symbol.iterator](): MyIteratorProtocol<string> {
    return this.iterator;
  }

  // Método para redefinir o iterador interno
  resetIterator(): void {
    this.iterator.reset();
  }
}
