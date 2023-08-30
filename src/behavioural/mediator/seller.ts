// Importando a classe Mediator do arquivo './mediator' e o tipo SellerProduct do arquivo './seller-product'
import { Mediator } from './mediator';
import { SellerProduct } from './seller-product';

// Classe que representa um vendedor no sistema de mediação
export class Seller {
  private products: SellerProduct[] = []; // Array para armazenar os produtos do vendedor
  private mediator?: Mediator; // Referência ao mediador (opcional)

  // Método para mostrar os produtos do vendedor
  showProducts(): void {
    this.products.forEach((product) =>
      console.log(product.id, product.name, product.price),
    );
  }

  // Método para adicionar produtos ao vendedor
  addProducts(...products: SellerProduct[]): void {
    products.forEach((product) => this.products.push(product));
  }

  // Método para definir o mediador para o vendedor
  setMediator(mediator: Mediator): void {
    this.mediator = mediator;
  }

  // Método para vender um produto com base no ID
  sell(id: string): SellerProduct | void {
    const productIndex = this.products.findIndex(
      (product) => product.id === id,
    );

    if (productIndex === -1) return; // Se não encontrar o produto, retorna vazio

    const product = this.products.splice(productIndex, 1); // Remove o produto do array

    return product[0]; // Retorna o produto vendido
  }

  // Método para visualizar produtos disponíveis através do mediador
  viewProducts(): void {
    if (!this.mediator) return;

    this.mediator.showProducts(); // Chama o método showProducts() no mediador
  }

  // Método para comprar um produto específico através do mediador
  buy(id: string): void {
    if (!this.mediator) return;

    this.mediator.buy(id); // Chama o método buy() no mediador
  }
}

/*
A classe Seller representa um vendedor no sistema de mediação. Ela possui métodos para adicionar produtos, vender produtos, visualizar produtos disponíveis e comprar produtos através do mediador. O método setMediator(mediator) permite que o mediador seja definido para o vendedor, permitindo a comunicação entre o vendedor e o sistema de mediação. Essa classe encapsula as ações relacionadas ao vendedor e a interação com o mediador, contribuindo para o desacoplamento entre os diferentes componentes do sistema.
*/
