// Importação da interface Vehicle do caminho especificado
import { Vehicle } from './vehicle';

// Definição da classe Bicycle que implementa a interface Vehicle
export class Bicycle implements Vehicle {
  // Construtor da classe que recebe e armazena o nome da bicicleta
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
Este código em TypeScript define a classe Bicycle, que implementa a interface Vehicle. A classe Bicycle representa uma bicicleta com funcionalidades definidas pela interface Vehicle.

No construtor da classe, o nome da bicicleta é recebido como parâmetro e armazenado como propriedade privada name.

A implementação dos métodos pickUp() e stop() da interface Vehicle proporciona funcionalidades específicas para a bicicleta, como a capacidade de buscar um cliente e parar a bicicleta, respectivamente. As mensagens de log dentro desses métodos demonstram as ações realizadas pela bicicleta.

A utilização da interface Vehicle garante que a classe Bicycle implemente todos os métodos exigidos pela interface, promovendo um design consistente e coerente para os diversos tipos de veículos no sistema.
*/
