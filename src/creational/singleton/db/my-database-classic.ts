// Neste código, é definida uma classe `MyDataBaseClassic` que implementa um padrão Singleton para um banco de dados simples. Aqui está uma descrição do código:

// Importa a interface User do módulo '../interfaces/user'
import { User } from '../interfaces/user';

// Define a classe MyDataBaseClassic
export class MyDataBaseClassic {
  private static _instance: MyDataBaseClassic | null = null;
  private users: User[] = [];

  // Construtor privado
  private constructor() {}

  // Método estático que retorna uma instância única da classe
  static get instance(): MyDataBaseClassic {
    if (MyDataBaseClassic._instance === null) {
      MyDataBaseClassic._instance = new MyDataBaseClassic();
    }

    return MyDataBaseClassic.instance;
  }

  // Método para adicionar um usuário ao banco de dados
  add(user: User): void {
    this.users.push(user);
  }

  // Método para remover um usuário do banco de dados com base no índice
  remove(index: number): void {
    this.users.splice(index, 1);
  }

  // Método para mostrar todos os usuários do banco de dados
  show(): void {
    for (const user of this.users) {
      console.log(user);
    }
  }
}

/*
Neste código, a classe MyDataBaseClassic implementa o padrão Singleton, garantindo que apenas uma instância dessa classe seja criada durante a execução do programa. Ela possui métodos para adicionar, remover e mostrar usuários no banco de dados. A propriedade users armazena os usuários como objetos seguindo a estrutura definida na interface User. O método estático instance é usado para acessar a instância única da classe. Isso permite que o banco de dados seja compartilhado entre várias partes do código sem criar múltiplas instâncias desnecessárias.
*/
