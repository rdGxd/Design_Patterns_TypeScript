// Importando as classes LightIntensityCommand, LightPowerCommand, SmartHouseApp e SmartHouseLight
import { LightIntensityCommand } from './light-intensity-command';
import { LightPowerCommand } from './light-power-command';
import { SmartHouseApp } from './smart-house-app';
import { SmartHouseLight } from './smart-house-light';

// Criando instâncias das luzes controladas
const bedroomLight = new SmartHouseLight('Luz do Quarto');
const bathroomLight = new SmartHouseLight('Luz do Banheiro');

// Criando instâncias dos comandos de ligar/desligar e de intensidade
const bedroomLightPowerCommand = new LightPowerCommand(bedroomLight);
const bathroomLightPowerCommand = new LightPowerCommand(bathroomLight);
const bedroomIntensityCommand = new LightIntensityCommand(bedroomLight);

// Criando instância do aplicativo de casa inteligente
const smartHouseApp = new SmartHouseApp();

// Adicionando os comandos aos botões do aplicativo
smartHouseApp.addCommand('btn-1', bedroomLightPowerCommand);
smartHouseApp.addCommand('btn-2', bathroomLightPowerCommand);
smartHouseApp.addCommand('btn-3', bedroomIntensityCommand);

// Executando e desfazendo comandos no aplicativo
smartHouseApp.executeCommand('btn-1');
smartHouseApp.undoCommand('btn-1');

smartHouseApp.executeCommand('btn-2');
smartHouseApp.undoCommand('btn-2');

// Executando o comando de intensidade várias vezes
for (let i = 0; i < 5; i++) {
  smartHouseApp.executeCommand('btn-3');
}

// Desfazendo o comando de intensidade algumas vezes
for (let i = 0; i < 3; i++) {
  smartHouseApp.undoCommand('btn-3');
}

/*
Estamos importando as classes LightIntensityCommand, LightPowerCommand, SmartHouseApp e SmartHouseLight dos seus respectivos arquivos.

Criamos instâncias das luzes controladas bedroomLight e bathroomLight.

Criamos instâncias dos comandos bedroomLightPowerCommand, bathroomLightPowerCommand e bedroomIntensityCommand.

Criamos uma instância do aplicativo de casa inteligente smartHouseApp.

Adicionamos os comandos às teclas do aplicativo usando o método addCommand.

Executamos comandos e os desfazemos usando os métodos executeCommand e undoCommand.

Em um loop, executamos o comando de intensidade várias vezes.

Em outro loop, desfazemos o comando de intensidade algumas vezes.

Isso demonstra a execução de diferentes comandos em um aplicativo de casa inteligente, incluindo ligar/desligar luzes e ajustar a intensidade da luz.
*/
