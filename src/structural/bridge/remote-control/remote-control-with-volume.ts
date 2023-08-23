// Importa a classe RemoteControl do arquivo 'remote-control'
import { RemoteControl } from './remote-control';

// Classe que representa um controle remoto com ajuste de volume
export class RemoteControlWithVolume extends RemoteControl {
  // Método para aumentar o volume
  volumeUp(): void {
    // Armazena o volume antigo
    const oldVolume = this.device.getVolume();
    // Aumenta o volume atual do dispositivo em 10 unidades
    this.device.setVolume(this.device.getVolume() + 10);
    // Exibe uma mensagem no console informando a mudança de volume
    console.log(
      `${this.device.getName()} tinha o volume ${oldVolume} e agora tem ${this.device.getVolume()}`,
    );
  }

  // Método para diminuir o volume
  volumeDown(): void {
    // Armazena o volume antigo
    const oldVolume = this.device.getVolume();
    // Diminui o volume atual do dispositivo em 10 unidades
    this.device.setVolume(this.device.getVolume() - 10);
    // Exibe uma mensagem no console informando a mudança de volume
    console.log(
      `${this.device.getName()} tinha o volume ${oldVolume} e agora tem ${this.device.getVolume()}`,
    );
  }
}

/*
Neste trecho de código, temos uma classe RemoteControlWithVolume que herda da classe RemoteControl. Esta nova classe adiciona métodos para aumentar e diminuir o volume do dispositivo controlado pelo controle remoto. Aqui estão os comentários em português para explicar cada parte do código:

Importa a classe RemoteControl do arquivo 'remote-control'.
Classe que representa um controle remoto com funcionalidade de ajuste de volume.
Método para aumentar o volume do dispositivo.
Armazena o volume antigo do dispositivo.
Aumenta o volume atual do dispositivo em 10 unidades.
Exibe uma mensagem no console informando a mudança de volume.
Método para diminuir o volume do dispositivo.
Armazena o volume antigo do dispositivo.
Diminui o volume atual do dispositivo em 10 unidades.
Exibe uma mensagem no console informando a mudança de volume.
Esta classe RemoteControlWithVolume herda os métodos e propriedades da classe RemoteControl e adiciona as funcionalidades de ajuste de volume, oferecendo mais controle sobre o dispositivo.
*/
