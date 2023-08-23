// Importa a interface DeviceImplementation do diretório '../device/device-implementation'
import { DeviceImplementation } from '../device/device-implementation';

// Classe que representa um controle remoto
export class RemoteControl {
  // Construtor que recebe uma implementação de dispositivo
  constructor(protected device: DeviceImplementation) {}

  // Método para alternar o status de energia do dispositivo
  togglePower(): void {
    // Inverte o status de energia do dispositivo
    this.device.setPower(!this.device.getPower());
    // Exibe uma mensagem no console informando o novo status de energia
    console.log(
      `${this.device.getName()} - Status de energia: ${
        this.device.getPower() ? 'ligado' : 'desligado'
      }`,
    );
  }
}

/*
Neste trecho de código, temos uma classe RemoteControl que recebe uma implementação de dispositivo no construtor. Aqui estão os comentários em português para explicar cada parte do código:

Importa a interface DeviceImplementation do diretório '../device/device-implementation'.
Classe que representa um controle remoto.
Construtor que recebe uma implementação de dispositivo como parâmetro.
Método para alternar o status de energia do dispositivo.
Inverte o status de energia do dispositivo usando o método setPower.
Exibe uma mensagem no console informando o novo status de energia, indicando se o dispositivo está ligado ou desligado.
Esta classe RemoteControl oferece a funcionalidade básica de alternar o status de energia de um dispositivo usando a implementação fornecida através do construtor.
*/
