// Interface que estende Iterator<T> para criar um protocolo de iterador personalizado
export interface MyIteratorProtocol<T> extends Iterator<T> {
  // Método para redefinir o iterador para a posição inicial
  reset(): void;
}
