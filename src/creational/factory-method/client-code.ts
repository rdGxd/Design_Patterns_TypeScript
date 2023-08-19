// Importações para as classes e módulos necessários
import { CarFactory } from './factories/car-factory'; // Importando a classe CarFactory do caminho especificado
import { randomCarAlgorithm } from './main/random-vehicle-algorithm'; // Importando a função randomCarAlgorithm do caminho especificado
import { randomNumber } from './utils/random-numbers'; // Importando a função randomNumber do caminho especificado

// Criando uma instância da CarFactory
const carFactory = new CarFactory();

// Lista de nomes de clientes
const customerNames = ['Ana', 'Joana', 'Helena', 'Rodrigo'];

// Loop para simular interações com os veículos
for (let i = 0; i < 10; i++) {
  // Selecionando um veículo aleatório
  const vehicle = randomCarAlgorithm();

  // Selecionando aleatoriamente um nome de cliente
  const name = customerNames[randomNumber(customerNames.length)];

  // Realizando ação de buscar cliente e parar o veículo selecionado
  vehicle.pickUp(name);
  vehicle.stop();

  // Criando um novo carro utilizando a CarFactory, com um nome personalizado
  const newCar = carFactory.pickUp(name, `NOVO CARRO - ${randomNumber(100)}`);

  // Parando o novo carro
  newCar.stop();

  console.log(`---`); // Separador para fins de clareza
}

/*
Este trecho de código simula a interação com veículos utilizando as classes e funções definidas anteriormente. Ele cria uma instância da CarFactory, define uma lista de nomes de clientes e, em seguida, entra em um loop que realiza as seguintes etapas:

Seleciona um veículo aleatório utilizando a função randomCarAlgorithm().
Escolhe aleatoriamente um nome de cliente da lista.
Chama o método pickUp() no veículo para simular a ação de buscar o cliente.
Chama o método stop() no veículo para simular a ação de parar o veículo.
Cria um novo carro utilizando a CarFactory, com um nome personalizado e realiza a ação de buscar o cliente.
Chama o método stop() no novo carro.
Exibe um separador para melhorar a legibilidade do console.
Isso demonstra como as classes e funções interagem para criar, manipular e simular ações com os veículos.
*/
