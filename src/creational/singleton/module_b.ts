import { MyDatabaseFunction } from './db/my-database-function';
import { myDatabaseClassic as myDatabaseFromModuleA } from './module_a';

const myDatabaseClassic = MyDatabaseFunction;
myDatabaseClassic.add({ name: 'Ro2', age: 25 });
myDatabaseClassic.add({ name: 'Jo2', age: 252 });
myDatabaseClassic.add({ name: 'Ma2', age: 235 });
myDatabaseClassic.show();

console.log(myDatabaseClassic === myDatabaseFromModuleA);
