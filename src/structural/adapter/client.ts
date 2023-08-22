// Importando a classe adaptadora EmailValidatorClassAdapter do módulo './validation/email-validator-class-adapter'.
import { EmailValidatorClassAdapter } from './validation/email-validator-class-adapter';

// Importando a função adaptadora de validação de email emailValidatorFnAdapter do módulo './validation/email-validator-fn-adapter'.
import { emailValidatorFnAdapter } from './validation/email-validator-fn-adapter';

// Importando as interfaces EmailValidatorFnProtocol e EmailValidatorProtocol do módulo './validation/email-validator-protocol'.
import {
  EmailValidatorFnProtocol,
  EmailValidatorProtocol,
} from './validation/email-validator-protocol';

// Função que valida um email usando um objeto que segue o contrato da interface EmailValidatorProtocol.
function validaEmailClass(
  emailValidator: EmailValidatorProtocol,
  email: string,
): void {
  if (emailValidator.isEmail(email)) {
    console.log('Email válido (CLASS)');
  } else {
    console.log('Email inválido (CLASS)');
  }
}

// Função que valida um email usando uma função que segue o contrato da interface EmailValidatorFnProtocol.
function validaEmailFn(
  emailValidator: EmailValidatorFnProtocol,
  email: string,
): void {
  if (emailValidator(email)) {
    console.log('Email válido (FUNCTION)');
  } else {
    console.log('Email inválido (FUNCTION)');
  }
}

// Email a ser validado
const email = 'rdg@rdg.com';

// Validando o email usando a classe adaptadora e a função de validação de email
validaEmailClass(new EmailValidatorClassAdapter(), email);
validaEmailFn(emailValidatorFnAdapter, email);

/*
Neste código, estamos importando as classes e funções adaptadoras de validação de email, bem como as interfaces que definem os contratos para essas validações. As funções validaEmailClass e validaEmailFn são utilizadas para realizar a validação de email usando tanto a abordagem da classe adaptadora quanto a abordagem da função adaptadora.

A função validaEmailClass recebe um objeto que segue o contrato da interface EmailValidatorProtocol e um endereço de email como entrada. Ela verifica se o email é válido usando o método isEmail definido na classe adaptadora e exibe uma mensagem correspondente.

A função validaEmailFn recebe uma função que segue o contrato da interface EmailValidatorFnProtocol e um endereço de email como entrada. Ela chama diretamente essa função para verificar se o email é válido e também exibe uma mensagem correspondente.

Por fim, o código valida o mesmo email usando ambas as abordagens e imprime os resultados na saída.
 */
