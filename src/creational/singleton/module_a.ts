// Neste código, é importada uma função `MyDatabaseFunction` de um módulo e usada para criar um banco de dados simples. Aqui está uma descrição do código:

// Importa a função MyDatabaseFunction do módulo './db/my-database-function'
import { MyDatabaseFunction } from './db/my-database-function';

// Atribui a função MyDatabaseFunction a uma variável chamada myDatabaseClassic
const myDatabaseClassic = MyDatabaseFunction;

// Adiciona registros ao banco de dados usando a função add
myDatabaseClassic.add({ name: 'Rodrigo', age: 25 });
myDatabaseClassic.add({ name: 'João', age: 252 });
myDatabaseClassic.add({ name: 'Maria', age: 235 });

// Mostra os registros armazenados no banco de dados usando a função show
myDatabaseClassic.show();

// Exporta a variável myDatabaseClassic para que possa ser acessada de outros módulos
export { myDatabaseClassic };

/*
Neste código, a função MyDatabaseFunction é importada de um módulo e atribuída à variável myDatabaseClassic. Essa função aparentemente implementa um banco de dados simples. As operações add são usadas para adicionar registros ao banco de dados e a operação show é usada para exibir os registros armazenados. A variável myDatabaseClassic é exportada para que possa ser acessada a partir de outros módulos que importem este módulo.
*/
