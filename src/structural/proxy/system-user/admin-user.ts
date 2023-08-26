// Importando os módulos e interfaces necessários
import {
  SystemUserAddressProtocol,
  SystemUserProtocol,
} from './system-user-protocol';

// Definição da classe AdminUser que implementa a interface SystemUserProtocol
export class AdminUser implements SystemUserProtocol {
  constructor(
    public firstName: string,
    public userName: string,
  ) {}

  // Método assíncrono para obter endereços associados ao usuário administrador
  async getAddresses(): Promise<SystemUserAddressProtocol[]> {
    // Retornando uma promise que será resolvida após um atraso de 2000ms
    return new Promise((resolve) => {
      // Simulando um atraso com setTimeout para imitar o comportamento assíncrono
      setTimeout(() => {
        // Resolvendo a promise com um array de endereços
        return resolve([
          { street: `Av. Brasil`, number: 50 }, // Endereço 1
          { street: `Rua B.`, number: 191 }, // Endereço 2
        ]);
      }, 2000); // Atraso de 2000ms (2 segundos)
    });
  }
}

/*
Estamos importando os módulos e interfaces necessários de um arquivo chamado system-user-protocol.

Definimos a classe AdminUser, que implementa a interface SystemUserProtocol. Isso significa que a classe AdminUser deve ter as propriedades e métodos especificados pela interface SystemUserProtocol.

O constructor da classe AdminUser aceita dois parâmetros: firstName e userName.

O método getAddresses é uma função assíncrona que retorna uma promise de um array de objetos SystemUserAddressProtocol.

Dentro do método getAddresses, criamos uma nova promise que é resolvida após um atraso simulado de 2000ms (2 segundos) usando setTimeout. Isso é feito para imitar o comportamento assíncrono de uma operação do mundo real.

No callback do setTimeout, resolvemos a promise com um array contendo dois objetos de endereço, cada um com as propriedades street e number.

Os comentários fornecidos acima explicam cada seção do código em detalhes.
*/
