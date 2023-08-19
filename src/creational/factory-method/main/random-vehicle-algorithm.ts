// Importações para as classes e módulos necessários
import { BicycleFactory } from '../factories/bicycle-factory'; // Importando a classe BicycleFactory do caminho especificado
import { CarFactory } from '../factories/car-factory'; // Importando a classe CarFactory do caminho especificado
import { randomNumber } from '../utils/random-numbers'; // Importando a função randomNumber do caminho especificado
import { Vehicle } from '../vehicle/vehicle'; // Importando a classe Vehicle do caminho especificado

// Função que implementa um algoritmo de seleção de carro aleatório
export function randomCarAlgorithm(): Vehicle {
  // Criação de instâncias das fábricas de carros e bicicletas
  const carFactory = new CarFactory();
  const bicycleFactory = new BicycleFactory();

  // Criação de instâncias de carros e bicicleta utilizando as fábricas
  const car1 = carFactory.getVehicle('Fusca');
  const car2 = carFactory.getVehicle('Celta');
  const bicycle = bicycleFactory.getVehicle('Bicycle');

  // Criação de uma lista contendo carros e bicicleta
  const cars = [car1, car2, bicycle];

  // Seleciona e retorna aleatoriamente um veículo da lista
  return cars[randomNumber(cars.length)];
}

/*
Este trecho de código é uma função chamada randomCarAlgorithm(), que demonstra um algoritmo para selecionar aleatoriamente um veículo (carro ou bicicleta) utilizando as classes e fábricas previamente definidas.

A função cria instâncias de CarFactory e BicycleFactory para criar carros e bicicletas, respectivamente. Ela então cria instâncias de carros e uma bicicleta utilizando essas fábricas. Esses veículos são adicionados a uma lista chamada cars.

Por fim, a função utiliza a função randomNumber() para gerar um índice aleatório dentro dos limites do tamanho da lista cars e retorna um veículo aleatório da lista. Isso demonstra um exemplo de como utilizar as fábricas e classes de veículos para selecionar um veículo de forma aleatória.
*/
