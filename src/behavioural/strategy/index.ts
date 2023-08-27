// Importando as classes DefaultDiscount, ECommerceShoppingCart e NewDiscount
import { DefaultDiscount } from './shopping-cart/default-discount';
import { ECommerceShoppingCart } from './shopping-cart/e-commerce-shopping-cart';
import { NewDiscount } from './shopping-cart/new-discount';

// Criando uma instância de ECommerceShoppingCart
const shoppingCart = new ECommerceShoppingCart();

// Definindo diferentes estratégias de desconto para o carrinho
shoppingCart.setDiscount(new DefaultDiscount());
shoppingCart.setDiscount(new NewDiscount());

// Adicionando produtos ao carrinho
shoppingCart.addProduct({ name: `Camisa`, price: 50 });
shoppingCart.addProduct({ name: `Camisa`, price: 50 });
shoppingCart.addProduct({ name: `Camisa`, price: 50 });

// Exibindo o total sem desconto
console.log(shoppingCart.getTotal());

// Exibindo o total com o desconto aplicado
console.log(shoppingCart.getTotalWithDiscount());

/*
Estamos importando as classes DefaultDiscount, ECommerceShoppingCart e NewDiscount dos seus respectivos arquivos.

Criamos uma instância da classe ECommerceShoppingCart chamada shoppingCart.

Definimos diferentes estratégias de desconto para o carrinho usando os métodos setDiscount, passando instâncias de DefaultDiscount e NewDiscount.

Adicionamos produtos ao carrinho usando o método addProduct.

Exibimos o total do carrinho sem desconto usando o método getTotal() e o método console.log.

Exibimos o total do carrinho com o desconto aplicado usando o método getTotalWithDiscount() e o método console.log.

Isso demonstra a criação de um carrinho de compras, a definição de diferentes estratégias de desconto e o cálculo do total do carrinho com e sem desconto.
*/
