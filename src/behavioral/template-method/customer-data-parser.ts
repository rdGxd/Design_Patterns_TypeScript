import { CustomerData } from './customer-data';

export abstract class CustomerDataParser {
  // Classe abstrata que representa um parser de dados de clientes

  public customerData: CustomerData[] = []; // Array que armazenará os dados dos clientes

  constructor(protected filePath: string) {} // Construtor da classe

  readonly fixCustomerData = async (): Promise<void> => {
    // Função que corrige os dados dos clientes

    this.customerData = await this.parseDate(); // Parseia os dados dos clientes
    this.hook(); // Executa o hook
    this.customerData = this.fixCpf(); // Corrige os CPFs dos clientes
  };

  private fixCpf(): CustomerData[] {
    // Função que corrige os CPFs dos clientes

    /*
    // Forma curta
    return this.customerData.map((customer) => ({
    ...customer,
    cpf: customer.cpf.replace(/\D/g, ''),
    }));
    */
    // Forma mais legível
    return this.customerData.map((customer) => {
      return {
        ...customer, // Copia os outros dados do cliente
        cpf: customer.cpf?.replace(/\D/g, ''), // Corrige o CPF do cliente
      };
    });
  }

  protected hook(): void {} // Hook que pode ser implementado pelas subclasses

  protected abstract parseDate(): Promise<CustomerData[]>; // Método abstrato que deve ser implementado pelas subclasses
}

/*
A primeira linha importa o modelo de dados CustomerData. Este modelo define os dados de um cliente.
A segunda linha define a classe CustomerDataParser. Esta classe é uma classe abstrata que representa um parser de dados de clientes.
A quarta linha define o atributo customerData. Este atributo é um array que armazenará os dados dos clientes.
A quinta linha define o construtor da classe. Este construtor recebe o caminho do arquivo de dados como parâmetro.
A sétima linha define o método fixCustomerData(). Este método é responsável por corrigir os dados dos clientes.
A décima linha define o método fixCpf(). Este método é responsável por corrigir os CPFs dos clientes.
A décima terceira linha define o método hook(). Este método é um hook que pode ser implementado pelas subclasses.
A décima quinta linha define o método parseDate(). Este método é um método abstrato que deve ser implementado pelas subclasses.
*/
