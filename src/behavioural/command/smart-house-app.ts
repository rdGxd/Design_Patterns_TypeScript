// Importando a interface SmartHouseCommand
import { SmartHouseCommand } from './smart-house-command';

// Definindo a classe SmartHouseApp
export class SmartHouseApp {
  // Armazenamento dos comandos
  private commands: { [k: string]: SmartHouseCommand } = {};

  // Método para adicionar um comando ao aplicativo
  addCommand(key: string, command: SmartHouseCommand): void {
    this.commands[key] = command;
  }

  // Método para executar um comando pelo seu identificador
  executeCommand(key: string): void {
    this.commands[key].execute();
  }

  // Método para desfazer um comando pelo seu identificador
  undoCommand(key: string): void {
    this.commands[key].undo();
  }
}

/*
Estamos importando a interface SmartHouseCommand do arquivo smart-house-command.

Definimos a classe SmartHouseApp.

A classe possui uma propriedade privada chamada commands, que armazena os comandos associados a chaves.

A classe possui um método addCommand que permite adicionar um comando ao aplicativo. Ele recebe uma chave e uma instância de SmartHouseCommand como parâmetros e armazena o comando na propriedade commands.

O método executeCommand permite executar um comando existente no aplicativo pelo seu identificador. Ele chama o método execute do comando correspondente.

O método undoCommand permite desfazer um comando existente no aplicativo pelo seu identificador. Ele chama o método undo do comando correspondente.

Essa classe representa um aplicativo de casa inteligente que permite adicionar, executar e desfazer comandos em diferentes dispositivos controlados.
*/
