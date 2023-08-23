// Importa a classe Radio do diretório './device/radio'
import { Radio } from './device/radio';
// Importa a classe Tv do diretório './device/tv'
import { Tv } from './device/tv';
// Importa a classe RemoteControl do diretório './remote-control/remote-control'
import { RemoteControl } from './remote-control/remote-control';
// Importa a classe RemoteControlWithVolume do diretório './remote-control/remote-control-with-volume'
import { RemoteControlWithVolume } from './remote-control/remote-control-with-volume';

// Função que simula o código do cliente
export function clientCode(
  abstraction: RemoteControl | RemoteControlWithVolume,
): void {
  // Alterna o status de energia do dispositivo
  abstraction.togglePower();

  // Verifica se a funcionalidade de ajuste de volume está disponível (Type Guard)
  if (!('volumeUp' in abstraction)) return;

  // Aumenta o volume duas vezes em 10 unidades cada
  abstraction.volumeUp(); // 20
  abstraction.volumeUp(); // 30

  // Diminui o volume em 10 unidades
  abstraction.volumeDown(); // 20
}

// Cria uma instância de Tv
const tv = new Tv();
// Cria uma instância de Radio
const radio = new Radio();

// Cria um controle remoto para o rádio
const radioRemoteControl = new RemoteControl(radio);
// Executa o código do cliente com o controle remoto do rádio
clientCode(radioRemoteControl);

// Cria um controle remoto com ajuste de volume para a TV
const tvRemoteControl = new RemoteControlWithVolume(tv);
// Executa o código do cliente com o controle remoto da TV
clientCode(tvRemoteControl);

/*
Neste trecho de código, temos uma função clientCode que simula o código do cliente para testar os controles remotos. Comentários em português foram adicionados para explicar o que cada parte do código faz:

Importa as classes Radio e Tv dos respectivos diretórios.
Importa as classes RemoteControl e RemoteControlWithVolume dos diretórios correspondentes.
Define a função clientCode que recebe uma instância de RemoteControl ou RemoteControlWithVolume.
Alterna o status de energia do dispositivo controlado pelo controle remoto.
Verifica se a funcionalidade de ajuste de volume está disponível usando um Type Guard ('volumeUp' in abstraction).
Se disponível, aumenta o volume duas vezes em 10 unidades cada e depois diminui o volume em 10 unidades.
Cria uma instância de Tv.
Cria uma instância de Radio.
Cria um controle remoto para o rádio.
Executa o código do cliente com o controle remoto do rádio.
Cria um controle remoto com ajuste de volume para a TV.
Executa o código do cliente com o controle remoto da TV.
Este código demonstra como usar os diferentes tipos de controles remotos para controlar dispositivos, como rádio e TV, incluindo a funcionalidade de ajuste de volume quando aplicável.
*/
