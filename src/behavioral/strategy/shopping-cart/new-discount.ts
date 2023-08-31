// Importando a classe DiscountStrategy e a classe ECommerceShoppingCart
import { DiscountStrategy } from './discount-strategy';
import { ECommerceShoppingCart } from './e-commerce-shopping-cart';

// Definindo a classe NewDiscount que herda de DiscountStrategy
export class NewDiscount extends DiscountStrategy {
  protected discount = 0; // Inicializando o desconto como 0

  // Implementação do método getDiscount da classe base DiscountStrategy
  getDiscount(cart: ECommerceShoppingCart): number {
    const total = cart.getTotal(); // Obtendo o total do carrinho

    // Definindo o desconto com base no valor total do carrinho
    if (total >= 150) {
      this.discount = 5;
    }

    // Calculando e retornando o valor total com o desconto aplicado
    return total - (total * this.discount) / 100;
  }
}

/*
Estamos importando a classe DiscountStrategy e a classe ECommerceShoppingCart dos seus respectivos arquivos.

Definimos a classe NewDiscount, que herda de DiscountStrategy. Isso significa que a classe NewDiscount estende a funcionalidade da classe base DiscountStrategy.

Dentro da classe NewDiscount:

Temos uma propriedade protegida chamada discount, que é inicializada com o valor 0.
Implementamos o método getDiscount, que recebe um carrinho de compras do tipo ECommerceShoppingCart como parâmetro.
Calculamos o valor total do carrinho usando o método getTotal() do carrinho.
Definimos o desconto a ser aplicado com base no valor total do carrinho. Se o total for maior ou igual a 150, aplicamos um desconto de 5%.
Calculamos o valor total com o desconto aplicado e retornamos esse valor.
Essa classe representa uma nova estratégia de desconto, onde o desconto é calculado com base no valor total do carrinho de compras. Se o total do carrinho for igual ou superior a 150, um desconto de 5% é aplicado.
*/
