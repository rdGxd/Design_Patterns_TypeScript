import { promises } from 'fs'; // Importa o módulo fs/promises do Node.js
import { CustomerData } from './customer-data'; // Importa o modelo de dados CustomerData
import { CustomerDataParser } from './customer-data-parser'; // Importa a classe base CustomerDataParser

export class CustomerDataParserJson extends CustomerDataParser {
  // Classe que parseia um arquivo JSON de dados de clientes

  protected async parseDate(): Promise<CustomerData[]> {
    // Função que parseia o arquivo JSON

    const rawData = await promises.readFile(this.filePath); // Lê o arquivo JSON

    const data = JSON.parse(rawData.toString()); // Converte o arquivo JSON em um objeto JavaScript

    const customerData: CustomerData[] = []; // Array que armazenará os dados dos clientes

    for (const customer of data) {
      // Para cada cliente no arquivo JSON
      const { name, age, cpf } = customer; // Extrai os dados do cliente
      customerData.push({ name, age, cpf }); // Adiciona o cliente ao array
    }

    return customerData; // Retorna o array com os dados dos clientes
  }

  hook(): void {
    // Função que é executada quando o parser é instanciado

    console.log('O hook foi executado'); // Imprime uma mensagem no console
  }
}

/*
A primeira linha importa o módulo fs/promises do Node.js. Este módulo fornece uma API assíncrona para trabalhar com arquivos.
A segunda linha importa o modelo de dados CustomerData. Este modelo define os dados de um cliente.
A terceira linha importa a classe base CustomerDataParser. Esta classe fornece uma implementação básica para parsear dados de clientes.
A quinta linha define a classe CustomerDataParserJson. Esta classe é uma subclasse da classe base CustomerDataParser e implementa um método para parsear um arquivo JSON de dados de clientes.
A sétima linha define o método parseDate(). Este método é responsável por parsear o arquivo JSON e retornar um array com os dados dos clientes.
A décima linha define o método hook(). Este método é responsável por executar uma ação quando o parser é instanciado.
Espero que isso ajude!
*/
