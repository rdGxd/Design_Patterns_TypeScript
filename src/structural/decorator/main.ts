import { ProductCustomizationDecorator } from './product/product-customization-decorator';
import { ProductStampDecorator } from './product/product-stamp-decorator';
import { TShirt } from './product/t-shirt';

// Cria uma instância de camiseta (TShirt) sem decorações.
const tShirt = new TShirt();

// Cria uma instância de camiseta com decoração de estampa.
const tShirtWithStamp = new ProductStampDecorator(tShirt);

// Cria uma instância de camiseta customizada.
const customizedTShirt = new ProductCustomizationDecorator(tShirt);

// Imprime as informações sobre os diferentes tipos de camisetas.
console.log(tShirt.getPrice(), tShirt.getName()); // Preço e nome da camiseta simples.
console.log(tShirtWithStamp.getPrice(), tShirtWithStamp.getName()); // Preço e nome da camiseta com estampa.
console.log(customizedTShirt.getPrice(), customizedTShirt.getName()); // Preço e nome da camiseta customizada.

/*
Nesse código, importamos as classes necessárias para construir diferentes tipos de camisetas e aplicar decorações. Em seguida, criamos instâncias de TShirt, ProductStampDecorator e ProductCustomizationDecorator para ilustrar o uso de cada tipo de objeto.

Por fim, imprimimos as informações de preço e nome de cada instância para mostrar como as decorações afetam esses valores. Isso demonstra a flexibilidade do padrão de decorador, onde podemos criar diferentes combinações de objetos decorados para adicionar funcionalidades de maneira modular.
*/
