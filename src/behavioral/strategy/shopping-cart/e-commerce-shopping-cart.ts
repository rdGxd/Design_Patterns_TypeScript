// Importando a classe DiscountStrategy e a interface ECommerceProductProtocol
import { DiscountStrategy } from './discount-strategy';
import { ECommerceProductProtocol } from './e-commerce-product-protocol';

// Definindo a classe ECommerceShoppingCart
export class ECommerceShoppingCart {
  private products: ECommerceProductProtocol[] = []; // Armazenamento de produtos
  private _discountStrategy: DiscountStrategy = new DiscountStrategy(); // Estratégia de desconto padrão

  // Método para adicionar produtos ao carrinho
  addProduct(...products: ECommerceProductProtocol[]): void {
    products.forEach((product) => this.products.push(product));
  }

  // Método para obter os produtos no carrinho
  getProducts(): ECommerceProductProtocol[] {
    return this.products;
  }

  // Método para calcular o total dos produtos no carrinho
  getTotal(): number {
    return this.products.reduce((sum, product) => sum + product.price, 0);
  }

  // Método para calcular o total com desconto usando a estratégia de desconto atual
  getTotalWithDiscount(): number {
    return this._discountStrategy.getDiscount(this);
  }

  // Método para definir uma nova estratégia de desconto
  setDiscount(discount: DiscountStrategy) {
    this._discountStrategy = discount;
  }
}

/*
Estamos importando a classe DiscountStrategy e a interface ECommerceProductProtocol dos arquivos correspondentes.

Definimos a classe ECommerceShoppingCart, que representa um carrinho de compras em uma loja virtual.

A classe possui uma propriedade privada chamada products para armazenar os produtos adicionados ao carrinho.

A classe também possui uma propriedade privada _discountStrategy que armazena a estratégia de desconto atual, sendo inicializada com a estratégia padrão DiscountStrategy.

A classe possui um método addProduct para adicionar produtos ao carrinho. Ele aceita um número variável de argumentos do tipo ECommerceProductProtocol.

O método getProducts retorna a lista de produtos no carrinho.

O método getTotal calcula e retorna o preço total dos produtos no carrinho.

O método getTotalWithDiscount calcula e retorna o preço total dos produtos no carrinho com o desconto aplicado usando a estratégia de desconto atual.

O método setDiscount permite definir uma nova estratégia de desconto para o carrinho.

Essa classe representa um carrinho de compras em uma loja virtual, permitindo adicionar produtos, calcular o preço total e aplicar descontos.
*/
