// Neste código, são definidas classes que representam tipos específicos de refeição, todas estendendo a classe abstrata `AbstractMeal`. Aqui está a descrição das classes:

// Importando a classe abstrata que serve como base para os tipos de refeição específicos.
import { AbstractMeal } from './abstract-meal';

// Classes que representam tipos específicos de refeição, todas extendendo a classe abstrata `AbstractMeal`.
// Cada uma dessas classes herda as propriedades e métodos da classe `AbstractMeal`.
export class Rice extends AbstractMeal {} // Representa um prato de arroz.
export class Beans extends AbstractMeal {} // Representa um prato de feijão.
export class Meat extends AbstractMeal {} // Representa um prato de carne.
export class Beverage extends AbstractMeal {} // Representa uma bebida.
export class Dessert extends AbstractMeal {} // Representa uma sobremesa.

/*
Neste código, estão sendo definidas classes que representam tipos específicos de refeição, como arroz, feijão, carne, bebida e sobremesa. Todas essas classes estendem a classe abstrata AbstractMeal, herdando suas propriedades e métodos. A classe abstrata AbstractMeal serve como uma base comum para esses tipos específicos de refeição, permitindo compartilhar funcionalidades e características em comum entre eles. Cada uma das classes específicas herda a estrutura e a funcionalidade da classe abstrata, possibilitando a criação de objetos de refeição específicos com a mesma estrutura básica.
*/
