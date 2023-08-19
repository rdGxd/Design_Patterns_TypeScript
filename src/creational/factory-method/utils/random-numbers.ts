// Função que gera um número aleatório entre 0 (inclusive) e o valor de "length" (exclusivo)
export function randomNumber(length: number): number {
  return Math.floor(Math.random() * length);
}

/*
Neste código, temos uma função chamada randomNumber que aceita um parâmetro length que representa o valor máximo do intervalo para gerar um número aleatório. A função utiliza a função Math.random() para gerar um número decimal aleatório entre 0 (inclusive) e 1 (exclusivo). Em seguida, esse número é multiplicado pelo valor de length, e a função Math.floor() é usada para arredondar o resultado para o inteiro mais próximo, garantindo assim um valor inteiro dentro do intervalo desejado.

Essa função é útil para gerar índices aleatórios usados, por exemplo, para selecionar elementos aleatórios de uma lista/array.
*/
