import { promises } from 'fs'; // Importa o módulo fs/promises do Node.js
import { CustomerData } from './customer-data'; // Importa o modelo de dados CustomerData
import { CustomerDataParser } from './customer-data-parser'; // Importa a classe base CustomerDataParser

export class CustomerDataParserTxt extends CustomerDataParser {
  // Classe que parseia um arquivo TXT de dados de clientes

  protected async parseDate(): Promise<CustomerData[]> {
    // Função que parseia o arquivo TXT

    const rawData = await promises.readFile(this.filePath); // Lê o arquivo TXT

    const data = rawData.toString(); // Converte o arquivo TXT em uma string
    const lines = data.split('\n'); // Divide a string em linhas

    const customerData: CustomerData[] = []; // Array que armazenará os dados dos clientes

    for (const line of lines) {
      // Para cada linha no arquivo TXT
      const [name, age, cpf] = line.split('\t'); // Extrai os dados do cliente da linha
      customerData.push({ name, age, cpf }); // Adiciona o cliente ao array
    }

    return customerData; // Retorna o array com os dados dos clientes
  }
}

/*
A primeira linha importa o módulo fs/promises do Node.js. Este módulo fornece uma API assíncrona para trabalhar com arquivos.
A segunda linha importa o modelo de dados CustomerData. Este modelo define os dados de um cliente.
A terceira linha importa a classe base CustomerDataParser. Esta classe fornece uma implementação básica para parsear dados de clientes.
A quinta linha define a classe CustomerDataParserTxt. Esta classe é uma subclasse da classe base CustomerDataParser e implementa um método para parsear um arquivo TXT de dados de clientes.
A sétima linha define o método parseDate(). Este método é responsável por parsear o arquivo TXT e retornar um array com os dados dos clientes.
A décima linha define o método split(). Este método divide uma string em um array de strings, separando-as por um delimitador. No caso, o delimitador é o caractere \t (tabulação).
*/
