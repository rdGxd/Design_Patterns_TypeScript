// Importa a interface DeviceImplementation do arquivo 'device-implementation'
import { DeviceImplementation } from './device-implementation';

// Classe que implementa um dispositivo do tipo rádio
export class Radio implements DeviceImplementation {
  // Volume padrão do rádio é 10
  private volume = 10;
  // O rádio inicia desligado por padrão
  private power = false;
  // Nome do rádio, neste caso, está definido como 'TV' (pode ser um erro?)
  private name = `TV`;

  // Define o status de energia do rádio
  setPower(powerStatus: boolean): void {
    this.power = powerStatus;
  }

  // Retorna o nome do rádio
  getName(): string {
    return this.name;
  }

  // Retorna o status de energia do rádio
  getPower(): boolean {
    return this.power;
  }

  // Define o volume do rádio, com verificações para limites
  setVolume(volume: number): void {
    // Verifica se o volume é menor que 0 e não faz nada nesse caso
    if (volume < 0) return;
    // Verifica se o volume é maior que 100 e não faz nada nesse caso
    if (volume > 100) return;
    // Define o volume do rádio com o valor passado
    this.volume = volume;
  }

  // Retorna o volume do rádio
  getVolume(): number {
    return this.volume;
  }
}

/*
Neste trecho de código, temos uma classe Radio que implementa a interface DeviceImplementation. Aqui estão os comentários em português para explicar o que cada parte do código faz:

Importa a interface DeviceImplementation do arquivo 'device-implementation'.
Classe que representa a implementação de um dispositivo do tipo rádio.
O volume padrão do rádio é definido como 10.
O rádio inicia desligado por padrão.
O nome do rádio está definido como 'TV' (pode ser um erro, já que estamos implementando um rádio).
Método que define o status de energia (ligado/desligado) do rádio.
Método que retorna o nome do rádio.
Método que retorna o status de energia do rádio.
Método que define o volume do rádio, com verificações para limites mínimo e máximo.
Método que retorna o volume do rádio.
Esta classe Radio implementa a interface DeviceImplementation e fornece uma implementação básica para um dispositivo de rádio, incluindo o controle de energia e volume.
*/
