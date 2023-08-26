// Importando a classe AdminUser e as interfaces necessárias
import { AdminUser } from './admin-user';
import {
  SystemUserAddressProtocol,
  SystemUserProtocol,
} from './system-user-protocol';

// Definição da classe SystemUserProxy que implementa a interface SystemUserProtocol
export class SystemUserProxy implements SystemUserProtocol {
  // Armazenando o usuário real e seus endereços em cache
  private realUser: SystemUserProtocol | null = null;
  private realUserAddress: SystemUserAddressProtocol[] | null = null;

  // Construtor da classe SystemUserProxy
  constructor(
    public firstName: string,
    public userName: string,
  ) {}

  // Método privado para criar o usuário real (AdminUser)
  private createUser(): SystemUserProtocol {
    if (this.realUser === null) {
      this.realUser = new AdminUser(this.firstName, this.userName);
    }

    return this.realUser;
  }

  // Implementação do método getAddresses da interface SystemUserProtocol
  async getAddresses(): Promise<SystemUserAddressProtocol[]> {
    // Criando ou obtendo o usuário real
    this.realUser = this.createUser();

    // Se os endereços ainda não foram obtidos, buscando-os e armazenando em cache
    if (this.realUserAddress === null) {
      this.realUserAddress = await this.realUser.getAddresses();
    }

    return this.realUserAddress;
  }
}

/*
Estamos importando a classe AdminUser e as interfaces necessárias do arquivo admin-user e system-user-protocol.

Definimos a classe SystemUserProxy, que implementa a interface SystemUserProtocol.

Dentro da classe SystemUserProxy:

Temos duas propriedades privadas: realUser (representando o usuário real) e realUserAddress (armazenando os endereços em cache).
O construtor da classe SystemUserProxy recebe o nome e o nome de usuário como parâmetros.

O método privado createUser é usado para criar o usuário real (AdminUser) se ele ainda não estiver criado.

O método getAddresses, que é parte da implementação da interface SystemUserProtocol, primeiro cria o usuário real ou obtém a instância existente.

Se os endereços ainda não tiverem sido buscados, o método chama getAddresses no usuário real e armazena os endereços em cache.

Os comentários adicionados explicam cada parte do código e auxiliam na compreensão das ações realizadas pela classe SystemUserProxy.
*/
