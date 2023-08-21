// Componente
export abstract class ProductComponent {
  abstract getPrice(): number; // Método abstrato para obter o preço do componente

  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  add(product: ProductComponent): void {} // Método para adicionar um componente (não utilizado aqui)
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  remove(product: ProductComponent): void {} // Método para remover um componente (não utilizado aqui)
}

// Folha (Leaf)
export class ProductLeaf extends ProductComponent {
  constructor(
    public name: string,
    public price: number,
  ) {
    super();
  }

  getPrice(): number {
    return this.price; // Retorna o preço do produto folha
  }
}

// Composto (Composite)
export class ProductComposite extends ProductComponent {
  private children: ProductComponent[] = []; // Array para armazenar os componentes filhos

  add(...products: ProductComponent[]): void {
    products.forEach((product) => this.children.push(product)); // Adiciona componentes filhos ao array
  }

  remove(product: ProductComponent): void {
    const productIndex = this.children.indexOf(product);
    if (productIndex !== -1) this.children.splice(productIndex, 1); // Remove um componente filho do array
  }

  getPrice(): number {
    return this.children.reduce((sum, child) => sum + child.getPrice(), 0); // Calcula o preço total dos componentes filhos
  }
}

// Cliente
const pen = new ProductLeaf('Caneta', 3);
const smartphone = new ProductLeaf('Smartphone', 2_000);
const tShirt = new ProductLeaf('Camiseta', 47);

const productBox = new ProductComposite();
productBox.add(pen, smartphone, tShirt); // Adiciona produtos folha à caixa de produtos

const tablet = new ProductLeaf('Tablet', 1_000);
const kindle = new ProductLeaf('Kindle', 300);
const anotherProductBox = new ProductComposite();
anotherProductBox.add(tablet, kindle);
productBox.add(anotherProductBox); // Adiciona outra caixa de produtos à caixa principal

console.log(productBox.getPrice()); // Calcula e exibe o preço total da caixa principal de produtos

/*
Nesse código, temos uma estrutura de classes para representar produtos individuais (ProductLeaf) e caixas de produtos que podem conter produtos individuais ou outras caixas de produtos (ProductComposite). O objetivo é calcular o preço total de todos os produtos contidos na estrutura.

No final, o código cria instâncias de produtos individuais (pen, smartphone, tShirt) e uma caixa de produtos (productBox), adiciona produtos individuais à caixa, cria mais produtos individuais (tablet, kindle) e outra caixa de produtos (anotherProductBox) e, por fim, calcula e imprime o preço total da caixa principal de produtos (productBox).
*/
