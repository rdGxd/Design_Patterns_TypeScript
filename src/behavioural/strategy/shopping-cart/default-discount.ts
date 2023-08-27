// Importando a classe DiscountStrategy e a classe ECommerceShoppingCart
import { DiscountStrategy } from './discount-strategy';
import { ECommerceShoppingCart } from './e-commerce-shopping-cart';

// Definindo a classe DefaultDiscount que herda de DiscountStrategy
export class DefaultDiscount extends DiscountStrategy {
  protected discount = 0; // Inicializando o desconto como 0

  // Implementação do método getDiscount da classe base DiscountStrategy
  getDiscount(cart: ECommerceShoppingCart): number {
    const total = cart.getTotal(); // Obtendo o total do carrinho

    // Definindo o desconto com base no valor total do carrinho
    if (total >= 100 && total < 200) {
      this.discount = 10;
    } else if (total >= 200 && total < 300) {
      this.discount = 20;
    } else {
      this.discount = 30;
    }

    // Calculando e retornando o valor total com o desconto aplicado
    return total - (total * this.discount) / 100;
  }
}

/*
Estamos importando a classe DiscountStrategy e a classe ECommerceShoppingCart dos seus respectivos arquivos.

Definimos a classe DefaultDiscount, que herda de DiscountStrategy. Isso significa que a classe DefaultDiscount estende a funcionalidade da classe base DiscountStrategy.

Dentro da classe DefaultDiscount:

Temos uma propriedade protegida chamada discount, que é inicializada com o valor 0.
Implementamos o método getDiscount, que recebe um carrinho de compras do tipo ECommerceShoppingCart como parâmetro.
Calculamos o valor total do carrinho usando o método getTotal() do carrinho.
Com base no valor total do carrinho, definimos o desconto a ser aplicado. Se o total estiver entre determinados intervalos, definimos descontos específicos.
Calculamos o valor total com o desconto aplicado e retornamos esse valor.
Essa classe representa uma estratégia de desconto padrão, onde o desconto é calculado com base no valor total do carrinho de compras.
*/
