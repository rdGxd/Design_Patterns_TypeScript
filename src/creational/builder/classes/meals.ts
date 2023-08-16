// Importando a classe abstrata que serve como base para os tipos de refeição específicos.
import { AbstractMeal } from './abstract-meal';

// Classes que representam tipos específicos de refeição, todas extendendo a classe abstrata AbstractMeal.
// Cada uma dessas classes herda as propriedades e métodos da classe AbstractMeal.
export class Rice extends AbstractMeal {} // Representa um prato de arroz.
export class Beans extends AbstractMeal {} // Representa um prato de feijão.
export class Meat extends AbstractMeal {} // Representa um prato de carne.
export class Beverage extends AbstractMeal {} // Representa uma bebida.
export class Dessert extends AbstractMeal {} // Representa uma sobremesa.
