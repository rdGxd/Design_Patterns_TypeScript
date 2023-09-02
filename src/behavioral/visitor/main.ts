import { AlcoholicDrink } from './alcoholic-drink'; // Importa a classe de bebidas alcoólicas
import { BrazilTaxVisitor } from './brazil-tax-visitor'; // Importa o visitante de impostos para o Brasil
import { Cigarette } from './cigarette'; // Importa a classe de cigarros
import { Food } from './food'; // Importa a classe de alimentos
import { USTaxVisitor } from './us-tax-visitor'; // Importa o visitante de impostos para os EUA

// Cria instâncias de diferentes produtos com seus preços
const food = new Food(10);
const cigarette = new Cigarette(5);
const alcoholicDrink = new AlcoholicDrink(5);

// Cria instâncias de visitantes de impostos para o Brasil e os EUA
const brazilTaxVisitor = new BrazilTaxVisitor();
const usTaxVisitor = new USTaxVisitor();

// Cria um carrinho de compras com os produtos
const cart = [food, cigarette, alcoholicDrink];

// Calcula o preço total dos produtos no carrinho
const total = cart.reduce((sum, item) => item.getPrice() + sum, 0);
console.log(total);

// Calcula o preço total com impostos para o Brasil
const totalWithTaxesBrazil = cart.reduce(
  (sum, item) => item.getPriceWithTaxes(brazilTaxVisitor) + sum,
  0,
);
console.log(totalWithTaxesBrazil);

// Calcula o preço total com impostos para os EUA
const totalWithTaxesUS = cart.reduce(
  (sum, item) => item.getPriceWithTaxes(usTaxVisitor) + sum,
  0,
);
console.log(totalWithTaxesUS);
