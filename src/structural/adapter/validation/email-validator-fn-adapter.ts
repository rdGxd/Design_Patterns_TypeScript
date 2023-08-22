// Importando a função isEmail da biblioteca 'validator' para verificar se um dado valor é um email válido.
import isEmail from 'validator/lib/isEmail';

// Importando a interface EmailValidatorFnProtocol do módulo './email-validator-protocol' para adaptação da função validadora.
import { EmailValidatorFnProtocol } from './email-validator-protocol';

// Adaptação de uma função validadora de email usando a interface EmailValidatorFnProtocol.
export const emailValidatorFnAdapter: EmailValidatorFnProtocol = (
  value: string,
): boolean => {
  // Utiliza a função isEmail da biblioteca 'validator' para realizar a validação.
  return isEmail(value);
};

/*
Aqui, estamos importando a função isEmail da biblioteca 'validator' para verificar se um determinado valor é um endereço de email válido. Além disso, estamos importando a interface EmailValidatorFnProtocol do módulo 'email-validator-protocol', que presumivelmente define um contrato para funções validadoras de emails.

A constante emailValidatorFnAdapter é uma função que atua como uma adaptação da função isEmail para cumprir o contrato definido pela interface. Ela recebe um valor de entrada como parâmetro e retorna um valor booleano indicando se o valor fornecido é um email válido ou não. A implementação da função simplesmente chama a função isEmail da biblioteca 'validator' para realizar a validação e retorna o resultado booleano correspondente.
*/
