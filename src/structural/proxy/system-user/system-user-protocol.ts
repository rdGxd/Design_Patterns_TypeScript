// Definindo o tipo para o protocolo de endereço do usuário do sistema
export type SystemUserAddressProtocol = { street: string; number: number };

// Definindo a interface do protocolo do usuário do sistema
export interface SystemUserProtocol {
  firstName: string; // Propriedade representando o primeiro nome do usuário
  userName: string; // Propriedade representando o nome de usuário do usuário

  // Método para obter os endereços do usuário como uma promessa
  getAddresses(): Promise<SystemUserAddressProtocol[]>;
}

/*
Foi definido o tipo SystemUserAddressProtocol que representa a estrutura de um endereço de usuário do sistema, com propriedades street (rua) e number (número).

Foi definida a interface SystemUserProtocol que estabelece o contrato para as propriedades e métodos que devem estar presentes em uma classe que a implementa:

A propriedade firstName representa o primeiro nome do usuário.
A propriedade userName representa o nome de usuário do usuário.
O método getAddresses é um método assíncrono que deve retornar uma promessa (Promise) contendo um array de objetos que seguem o protocolo de endereço do usuário do sistema (SystemUserAddressProtocol).
Essas definições são utilizadas para garantir que classes que implementem a interface SystemUserProtocol cumpram o contrato especificado, e para fornecer um tipo seguro para representar endereços de usuário do sistema.
*/
