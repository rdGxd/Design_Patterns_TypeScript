// Importando a interface SmartHouseCommand e a classe SmartHouseLight
import { SmartHouseCommand } from './smart-house-command';
import { SmartHouseLight } from './smart-house-light';

// Definindo a classe LightPowerCommand que implementa a interface SmartHouseCommand
export class LightPowerCommand implements SmartHouseCommand {
  // O construtor recebe uma instância de SmartHouseLight
  constructor(private readonly light: SmartHouseLight) {}

  // Implementação do método execute da interface SmartHouseCommand
  execute(): void {
    // Ligando a luz usando o método on() da instância de SmartHouseLight
    this.light.on();
  }

  // Implementação do método undo da interface SmartHouseCommand
  undo(): void {
    // Desligando a luz usando o método off() da instância de SmartHouseLight
    this.light.off();
  }
}

/*
Estamos importando a interface SmartHouseCommand e a classe SmartHouseLight dos seus respectivos arquivos.

Definimos a classe LightPowerCommand, que implementa a interface SmartHouseCommand.

O construtor da classe recebe uma instância de SmartHouseLight, que representa a luz controlada pelo comando.

Dentro da classe LightPowerCommand:

Implementamos o método execute, que liga a luz usando o método on() da instância de SmartHouseLight.
Implementamos o método undo, que desliga a luz usando o método off() da instância de SmartHouseLight.
Essa classe representa um comando que controla o ligar e desligar de uma luz em uma casa inteligente, implementando a interface SmartHouseCommand. O método execute liga a luz e o método undo desliga a luz.
*/
