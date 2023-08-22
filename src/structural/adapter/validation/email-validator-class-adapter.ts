// Importando a função isEmail da biblioteca 'validator' para verificar se um dado valor é um email válido.
import isEmail from 'validator/lib/isEmail';

// Importando a interface EmailValidatorProtocol do módulo './email-validator-protocol' para implementação da classe.
import { EmailValidatorProtocol } from './email-validator-protocol';

// Classe que adapta a função isEmail para a interface EmailValidatorProtocol.
export class EmailValidatorClassAdapter implements EmailValidatorProtocol {
  // Método que verifica se um valor fornecido é um email válido.
  isEmail(value: string): boolean {
    // Utiliza a função isEmail da biblioteca 'validator' para realizar a verificação.
    return isEmail(value);
  }
}

/*
Nesse código, estamos importando a função isEmail da biblioteca 'validator' para validar se um dado valor é um endereço de email válido. Também importamos a interface EmailValidatorProtocol de um módulo chamado 'email-validator-protocol', que presumivelmente define um contrato para validação de emails. A classe EmailValidatorClassAdapter implementa essa interface e adapta a função isEmail para cumprir o contrato definido. O método isEmail na classe chama a função isEmail da biblioteca 'validator' para verificar se o valor fornecido é um email válido, e retorna um valor booleano indicando o resultado da validação.
*/
