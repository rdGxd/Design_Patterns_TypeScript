import { CustomerData } from './customer-data';

export abstract class CustomerDataParser {
  public customerData: CustomerData[] = [];

  constructor(protected filePath: string) {}

  readonly fixCustomerData = async (): Promise<void> => {
    this.customerData = await this.parseDate();
    this.hook();
    this.customerData = this.fixCpf();
  };

  private fixCpf(): CustomerData[] {
    /*
    // Forma curta
    return this.customerData.map((customer) => ({
      ...customer,
      cpf: customer.cpf.replace(/\D/g, ''),
    }));
    */
    return this.customerData.map((customer) => {
      return { ...customer, cpf: customer.cpf?.replace(/\D/g, '') };
    });
  }

  protected hook(): void {}

  protected abstract parseDate(): Promise<CustomerData[]>;
}
