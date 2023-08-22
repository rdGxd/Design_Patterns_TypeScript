// Definição da interface EmailValidatorProtocol, que define um contrato para validadores de email.
export interface EmailValidatorProtocol {
  // Declaração de um membro chamado 'isEmail', que segue o contrato da interface EmailValidatorFnProtocol.
  isEmail: EmailValidatorFnProtocol;
}

// Definição da interface EmailValidatorFnProtocol, que define o contrato para funções validadoras de email.
export interface EmailValidatorFnProtocol {
  // Declaração de uma função que recebe um valor de entrada (string) e retorna um valor booleano.
  (value: string): boolean;
}

/*
Nesse trecho de código, estamos definindo duas interfaces: EmailValidatorProtocol e EmailValidatorFnProtocol.

A interface EmailValidatorProtocol estabelece um contrato para objetos que incluem um membro chamado isEmail. Esse membro segue o contrato da interface EmailValidatorFnProtocol, ou seja, é uma função validadora de email.

A interface EmailValidatorFnProtocol define o contrato para funções que validam endereços de email. Ela declara uma assinatura de função que recebe uma entrada de tipo string e retorna um valor booleano indicando se o valor fornecido é um email válido ou não.

Essas interfaces permitem a criação de classes, objetos ou funções que aderem a esse contrato, fornecendo uma estrutura sólida para implementações de validação de email.
*/
