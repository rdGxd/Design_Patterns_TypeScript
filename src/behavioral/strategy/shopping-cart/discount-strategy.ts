// Importando a classe ECommerceShoppingCart
import { ECommerceShoppingCart } from './e-commerce-shopping-cart';

// Definindo a classe DiscountStrategy
export class DiscountStrategy {
  protected discount = 0; // Inicializando o desconto como 0

  // Implementação do método getDiscount
  getDiscount(cart: ECommerceShoppingCart): number {
    return cart.getTotal(); // Retorna o total do carrinho
  }
}

/*
Estamos importando a classe ECommerceShoppingCart do arquivo e-commerce-shopping-cart.

Definimos a classe DiscountStrategy.

Dentro da classe DiscountStrategy:

Temos uma propriedade protegida chamada discount, que é inicializada com o valor 0.
Implementamos o método getDiscount, que recebe um carrinho de compras do tipo ECommerceShoppingCart como parâmetro.
O método getDiscount simplesmente retorna o valor total do carrinho usando o método getTotal() do carrinho.
Essa classe representa uma estratégia base para cálculo de desconto, onde o valor total do carrinho é retornado sem aplicar nenhum desconto. Ela serve como uma classe de base para outras estratégias de desconto que herdam dela.
*/
