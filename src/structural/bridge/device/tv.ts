// Importa a interface DeviceImplementation do arquivo 'device-implementation'
import { DeviceImplementation } from './device-implementation';

// Classe que implementa um dispositivo do tipo TV
export class Tv implements DeviceImplementation {
  // Volume padrão da TV é 10
  private volume = 10;
  // A TV inicia desligada por padrão
  private power = false;
  // Nome da TV, neste caso, está definido como 'TV'
  private name = `TV`;

  // Define o status de energia da TV
  setPower(powerStatus: boolean): void {
    this.power = powerStatus;
  }

  // Retorna o nome da TV
  getName(): string {
    return this.name;
  }

  // Retorna o status de energia da TV
  getPower(): boolean {
    return this.power;
  }

  // Define o volume da TV, com verificações para limites
  setVolume(volume: number): void {
    // Verifica se o volume é menor que 0 e não faz nada nesse caso
    if (volume < 0) return;
    // Verifica se o volume é maior que 100 e não faz nada nesse caso
    if (volume > 100) return;
    // Define o volume da TV com o valor passado
    this.volume = volume;
  }

  // Retorna o volume da TV
  getVolume(): number {
    return this.volume;
  }
}

/*
Neste trecho de código, temos uma classe Tv que também implementa a interface DeviceImplementation. Aqui estão os comentários em português para explicar o que cada parte do código faz:

Importa a interface DeviceImplementation do arquivo 'device-implementation'.
Classe que representa a implementação de um dispositivo do tipo TV.
O volume padrão da TV é definido como 10.
A TV inicia desligada por padrão.
O nome da TV está definido como 'TV'.
Método que define o status de energia (ligado/desligado) da TV.
Método que retorna o nome da TV.
Método que retorna o status de energia da TV.
Método que define o volume da TV, com verificações para limites mínimo e máximo.
Método que retorna o volume da TV.
Esta classe Tv também implementa a interface DeviceImplementation e fornece uma implementação básica para um dispositivo de televisão, incluindo o controle de energia e volume.
*/
