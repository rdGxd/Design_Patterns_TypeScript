// Neste código, é demonstrada a importação de uma função `MyDatabaseFunction` de um módulo e a comparação entre instâncias dessa função vindas de dois módulos diferentes. Aqui está uma descrição do código:

// Importa a função MyDatabaseFunction do módulo './db/my-database-function'
import { MyDatabaseFunction } from './db/my-database-function';

// Importa a variável myDatabaseClassic do módulo './module_a' com um alias myDatabaseFromModuleA
import { myDatabaseClassic as myDatabaseFromModuleA } from './module_a';

// Atribui a função MyDatabaseFunction a uma variável chamada myDatabaseClassic
const myDatabaseClassic = MyDatabaseFunction;

// Adiciona registros ao banco de dados usando a função add
myDatabaseClassic.add({ name: 'Ro2', age: 25 });
myDatabaseClassic.add({ name: 'Jo2', age: 252 });
myDatabaseClassic.add({ name: 'Ma2', age: 235 });

// Mostra os registros armazenados no banco de dados usando a função show
myDatabaseClassic.show();

// Compara se a instância myDatabaseClassic é a mesma que myDatabaseFromModuleA
console.log(myDatabaseClassic === myDatabaseFromModuleA);

/*
Neste código, MyDatabaseFunction é importada do módulo ./db/my-database-function, e myDatabaseClassic é importada do módulo ./module_a com o alias myDatabaseFromModuleA. Em seguida, são adicionados registros ao banco de dados usando a função add e os registros são mostrados usando a função show.

O último console.log compara se a instância myDatabaseClassic é a mesma que myDatabaseFromModuleA. Se as duas variáveis apontarem para a mesma instância, o resultado será true, caso contrário, será false. Isso pode ser útil para verificar se duas importações se referem à mesma instância de um objeto ou função.
*/
