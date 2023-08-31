// Importando a classe Buyer do arquivo './buyer', a classe Mediator do arquivo './mediator' e a classe Seller do arquivo './seller'
import { Buyer } from './buyer';
import { Mediator } from './mediator';
import { Seller } from './seller';

// Criando uma instância do mediador
const mediator = new Mediator();

// Criando instâncias de vendedores
const seller1 = new Seller();
seller1.addProducts({ id: `1`, name: `Camiseta`, price: 49.99 });
seller1.addProducts({ id: `2`, name: `Caneta`, price: 9.99 });

const seller2 = new Seller();
seller2.addProducts({ id: `3`, name: `Carro`, price: 49999.99 });
seller2.addProducts({ id: `4`, name: `Lápis`, price: 1.99 });

// Adicionando os vendedores ao mediador
mediator.addSeller(seller1, seller2);

// Criando uma instância do comprador com o mediador
const buyer = new Buyer(mediator);

// Visualizando produtos disponíveis para o comprador (todos os vendedores)
buyer.viewProducts();

// Comprando produtos específicos usando o comprador
buyer.buy('2'); // Compra a "Caneta" de um vendedor
buyer.buy('3'); // Compra o "Carro" de outro vendedor

// Visualizando produtos após as compras (agora com produtos comprados removidos)
buyer.viewProducts();

/*
Agora, com a classe Buyer envolvida, você está usando-a para visualizar produtos disponíveis de todos os vendedores e realizar compras através do sistema de mediação. Através do mediador, o comprador consegue interagir com os vendedores sem conhecer diretamente suas implementações, proporcionando um desacoplamento eficaz entre os componentes.
*/

/*
// Outra maneira
seller2.viewProducts();
seller2.buy('2');
seller2.buy('3');
seller2.viewProducts();
*/
