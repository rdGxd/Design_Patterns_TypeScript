// Interface que define a implementação de um dispositivo
export interface DeviceImplementation {
  // Retorna o nome do dispositivo
  getName(): string;

  // Define o status de energia do dispositivo
  setPower(powerStatus: boolean): void;

  // Retorna o status de energia do dispositivo
  getPower(): boolean;

  // Define o volume do dispositivo
  setVolume(volume: number): void;

  // Retorna o volume do dispositivo
  getVolume(): number;
}

/*
Neste trecho de código, temos uma interface chamada DeviceImplementation que define os métodos necessários para a implementação de um dispositivo. Vamos adicionar comentários em português para explicar o propósito de cada método:

getName(): Retorna o nome do dispositivo.
setPower(powerStatus: boolean): Define o status de energia do dispositivo. Recebe um parâmetro booleano powerStatus que indica se o dispositivo está ligado (true) ou desligado (false).
getPower(): Retorna o status de energia do dispositivo. Retorna um valor booleano indicando se o dispositivo está ligado (true) ou desligado (false).
setVolume(volume: number): Define o volume do dispositivo. Recebe um parâmetro numérico volume que representa o nível de volume a ser definido.
getVolume(): Retorna o volume do dispositivo. Retorna um valor numérico representando o nível de volume atual do dispositivo.
Essa interface fornece uma estrutura clara para implementar diferentes tipos de dispositivos, como TVs, rádios, caixas de som, etc. Cada método tem uma função específica para gerenciar diferentes aspectos do dispositivo, como energia e volume.
*/
