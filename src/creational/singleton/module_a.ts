import { MyDatabaseFunction } from './db/my-database-function';

const myDatabaseClassic = MyDatabaseFunction;
myDatabaseClassic.add({ name: 'Rodrigo', age: 25 });
myDatabaseClassic.add({ name: 'João', age: 252 });
myDatabaseClassic.add({ name: 'Maria', age: 235 });
myDatabaseClassic.show();

export { myDatabaseClassic };
