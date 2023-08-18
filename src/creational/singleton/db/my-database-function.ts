// Neste código, é definida uma função que cria um banco de dados simples usando um padrão de função imediatamente invocada (IIFE). Aqui está uma descrição do código:

// Importa a interface User do módulo '../interfaces/user'
import { User } from '../interfaces/user';

// Define a constante MyDatabaseFunction como uma função imediatamente invocada (IIFE)
export const MyDatabaseFunction = (function () {
  // Array para armazenar os usuários
  const users: User[] = [];

  // Retorna um objeto com métodos para manipular o banco de dados
  return {
    // Método para adicionar um usuário ao banco de dados
    add(user: User): void {
      users.push(user);
    },

    // Método para remover um usuário do banco de dados com base no índice
    remove(index: number): void {
      users.splice(index, 1);
    },

    // Método para mostrar todos os usuários do banco de dados
    show(): void {
      for (const user of users) {
        console.log(user);
      }
    },
  };
})();

/*
Neste código, a função MyDatabaseFunction é uma função imediatamente invocada (IIFE) que cria um banco de dados simples usando um objeto com métodos para adicionar, remover e mostrar usuários. O array users armazena os usuários conforme a estrutura definida na interface User. A função é imediatamente invocada após ser definida, criando assim uma instância do banco de dados que pode ser acessada através da constante MyDatabaseFunction. Isso oferece uma maneira de encapsular as operações do banco de dados e isolar seu estado dentro da função, evitando poluição do escopo global.
*/
