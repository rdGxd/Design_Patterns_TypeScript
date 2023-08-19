// Importação da interface Vehicle do caminho especificado
import { Vehicle } from './vehicle';

// Definição da classe Car que implementa a interface Vehicle
export class Car implements Vehicle {
  // Construtor da classe que recebe e armazena o nome do carro
  constructor(private name: string) {}

  // Implementação do método pickUp da interface Vehicle
  pickUp(customerName: string): void {
    console.log(`${this.name} está buscando o ${customerName}`);
  }

  // Implementação do método stop da interface Vehicle
  stop(): void {
    console.log(`${this.name} parou`);
  }
}

/*
Neste trecho de código TypeScript, temos a definição da classe Car, que implementa a interface Vehicle. A classe Car representa um carro no sistema, e seus métodos são definidos de acordo com a interface.

No construtor da classe, o nome do carro é recebido como parâmetro e armazenado como propriedade privada name.

Os métodos pickUp() e stop() da classe Car são implementações dos métodos exigidos pela interface Vehicle. O método pickUp() simula a ação de buscar um cliente e exibe uma mensagem de log indicando o nome do carro e o cliente a ser buscado. O método stop() simula a ação de parar o carro e exibe uma mensagem de log correspondente.

Ao implementar a interface Vehicle, a classe Car garante a conformidade com um contrato específico, o que é útil quando se lida com uma variedade de veículos no sistema, permitindo um código mais modular e expansível.
*/
