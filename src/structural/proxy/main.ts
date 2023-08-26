// Importando o módulo SystemUserProxy
import { SystemUserProxy } from './system-user/system-user-proxy';

// Função assíncrona clientCode para demonstração
async function clientCode(): Promise<void> {
  // Criando uma instância de SystemUserProxy com nome e nome de usuário
  const user = new SystemUserProxy(`Rodrigo`, `rdGxd`);

  // Mensagem de saída indicando a espera de 2 segundos
  console.log('Isso vai levar 2 segundos');

  // Obtendo e exibindo os endereços do usuário
  console.log(await user.getAddresses());

  // Mensagem indicando o uso do cache
  console.log(`Isso vai se repetir (CACHE)`);

  // Loop para repetidamente obter e exibir endereços (usando o cache)
  for (let i = 0; i < 5; i++) {
    console.log(await user.getAddresses());
  }
}

// Chamando a função clientCode para executar o código
clientCode();

/*
Estamos importando o módulo SystemUserProxy de um arquivo chamado system-user-proxy dentro da pasta system-user.

A função assíncrona clientCode é definida para demonstrar o uso do SystemUserProxy.

Dentro da função clientCode:

Criamos uma instância do SystemUserProxy com um nome (Rodrigo) e um nome de usuário (rdGxd).
Uma mensagem é exibida indicando que a operação levará 2 segundos.
Chamamos o método getAddresses da instância user e exibimos os endereços resultantes.
Uma mensagem é exibida indicando que os resultados a seguir serão do cache.
Utilizamos um loop para repetidamente obter e exibir os endereços do usuário (usando o cache) por 5 vezes.
Finalmente, chamamos a função clientCode para executar o código e observar o comportamento do SystemUserProxy.

Os comentários adicionados explicam cada parte do código e o que está acontecendo em cada etapa.
*/
