// Definindo a interface SmartHouseCommand
export interface SmartHouseCommand {
  // Método para executar o comando
  execute(): void;

  // Método para desfazer o comando
  undo(): void;
}

/*
Foi definida a interface SmartHouseCommand.

A interface possui dois métodos:

execute(): Representa a ação a ser executada pelo comando.
undo(): Representa a ação para desfazer o comando.
*/
