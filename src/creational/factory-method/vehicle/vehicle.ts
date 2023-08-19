// Definição da interface Vehicle
export interface Vehicle {
  // Método para buscar um cliente
  pickUp(customerName: string): void;

  // Método para parar o veículo
  stop(): void;
}

/*
Neste trecho de código TypeScript, temos a definição da interface Vehicle, que estabelece um contrato que os veículos no sistema devem seguir.

A interface Vehicle contém dois métodos que os veículos devem implementar:

O método pickUp(customerName: string) simboliza a ação de buscar um cliente. Ele aceita o nome do cliente como parâmetro.

O método stop() indica a ação de parar o veículo.

Ao utilizar essa interface, é possível garantir que todas as classes que a implementam tenham esses métodos disponíveis, permitindo um código mais coeso e consistente ao lidar com diferentes tipos de veículos, independentemente de serem carros, bicicletas ou outros.
*/
