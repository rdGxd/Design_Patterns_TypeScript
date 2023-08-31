import { resolve } from 'path'; // Importa o módulo path do Node.js
import { CustomerDataParserJson } from './customer-data-parser-json'; // Importa a classe CustomerDataParserJson
import { CustomerDataParserTxt } from './customer-data-parser-txt'; // Importa a classe CustomerDataParserTxt

async function run() {
  // Função que executa o código

  const filePathTxt = resolve(__dirname, 'files', 'customer.txt'); // Obtém o caminho do arquivo customer.txt
  const customerDataParserTxt = new CustomerDataParserTxt(filePathTxt); // Cria uma nova instância da classe CustomerDataParserTxt
  await customerDataParserTxt.fixCustomerData(); // Parseia o arquivo e retorna um array de objetos de dados do cliente
  console.log(customerDataParserTxt.customerData); // Imprime o array de objetos de dados do cliente no console

  console.log(); // Imprime uma linha em branco

  const filePathJson = resolve(__dirname, 'files', 'customer.json'); // Obtém o caminho do arquivo customer.json
  const customerDataParserJson = new CustomerDataParserJson(filePathJson); // Cria uma nova instância da classe CustomerDataParserJson
  await customerDataParserJson.fixCustomerData(); // Parseia o arquivo e retorna um array de objetos de dados do cliente
  console.log(customerDataParserJson.customerData); // Imprime o array de objetos de dados do cliente no console
}

run(); // Chama a função run()
