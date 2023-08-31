// Importando a classe Seller do arquivo './seller' e a classe SellerProduct do arquivo './seller-product'
import { Seller } from './seller';
import { SellerProduct } from './seller-product';

// Classe Mediator que facilita a comunicação entre os vendedores e compradores
export class Mediator {
  private sellers: Seller[] = []; // Array para armazenar os vendedores registrados

  // Método para adicionar vendedores ao mediador
  addSeller(...sellers: Seller[]): void {
    sellers.forEach((seller) => {
      this.sellers.push(seller); // Adiciona o vendedor ao array
      seller.setMediator(this); // Define o mediador para o vendedor
    });
  }

  // Método para comprar um produto por ID, buscando entre os vendedores
  buy(id: string): SellerProduct | void {
    let product;

    for (let i = 0; i < this.sellers.length; i++) {
      product = this.sellers[i].sell(id); // Tenta comprar o produto do vendedor

      if (product) {
        console.log(
          `Aqui está ${product.id}, ${product.name}, ${product.price}`,
        );
        return product; // Retorna o produto se encontrado
      }
    }

    console.log(`Não encontrei nenhum produto com o id ${id}`);
  }

  // Método para mostrar produtos disponíveis entre todos os vendedores
  showProducts(): void {
    this.sellers.forEach((seller) => seller.showProducts()); // Chama o método showProducts() em cada vendedor
  }
}

/*
A classe Mediator desempenha um papel importante no sistema, permitindo que os compradores comprem produtos através dos vendedores registrados e também exibam os produtos disponíveis a partir dos vendedores. Através da interação com o mediador, os vendedores não precisam saber sobre os compradores e vice-versa, mantendo um acoplamento mais fraco entre os componentes.
*/
