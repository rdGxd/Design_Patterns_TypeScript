// Importando a interface SmartHouseCommand e a classe SmartHouseLight
import { SmartHouseCommand } from './smart-house-command';
import { SmartHouseLight } from './smart-house-light';

// Definindo a classe LightIntensityCommand que implementa a interface SmartHouseCommand
export class LightIntensityCommand implements SmartHouseCommand {
  // O construtor recebe uma instância de SmartHouseLight
  constructor(private readonly light: SmartHouseLight) {}

  // Implementação do método execute da interface SmartHouseCommand
  execute(): void {
    // Aumentando a intensidade da luz e obtendo o novo valor de intensidade
    const intensity = this.light.increaseIntensity();

    // Exibindo a mensagem de aumento de intensidade
    console.log(`A intensidade de ${this.light.name} é ${intensity}`);
  }

  // Implementação do método undo da interface SmartHouseCommand
  undo(): void {
    // Diminuindo a intensidade da luz e obtendo o novo valor de intensidade
    const intensity = this.light.decreaseIntensity();

    // Exibindo a mensagem de diminuição de intensidade
    console.log(`A intensidade de ${this.light.name} é ${intensity}`);
  }
}

/*
Estamos importando a interface SmartHouseCommand e a classe SmartHouseLight dos seus respectivos arquivos.

Definimos a classe LightIntensityCommand, que implementa a interface SmartHouseCommand.

O construtor da classe recebe uma instância de SmartHouseLight, que representa a luz controlada pelo comando.

Dentro da classe LightIntensityCommand:

Implementamos o método execute, que aumenta a intensidade da luz usando o método increaseIntensity() da instância de SmartHouseLight. Em seguida, exibimos uma mensagem indicando a nova intensidade.
Implementamos o método undo, que diminui a intensidade da luz usando o método decreaseIntensity() da instância de SmartHouseLight. Em seguida, exibimos uma mensagem indicando a nova intensidade após a diminuição.
Essa classe representa um comando que ajusta a intensidade de uma luz em uma casa inteligente, implementando a interface SmartHouseCommand. O método execute aumenta a intensidade e o método undo diminui a intensidade da luz.
*/
