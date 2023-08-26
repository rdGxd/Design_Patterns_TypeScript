// Importando a função deliveryContext e a classe DeliveryFactory
import { deliveryContext } from './delivery/delivery-context';
import { DeliveryFactory } from './delivery/delivery-factory';

// Criando uma instância da DeliveryFactory
const factory = new DeliveryFactory();

// Realizando várias entregas usando o contexto de entrega
deliveryContext(factory, `Rodrigo`, `191a`, `AV. Brasil`, `SP`);
deliveryContext(factory, `Helena`, `191a`, `AV. Brasil`, `SP`);
deliveryContext(factory, `Joana`, `200`, `AV. Brasil`, `SP`);
deliveryContext(factory, `Eliana`, `2`, `Rua A`, `Salvador`);
deliveryContext(factory, `João`, `2022`, `AV. B`, `RJ`);
deliveryContext(factory, `Rodrigo`, `191a`, `AV. Brasil`, `SP`);
deliveryContext(factory, `Helena`, `191a`, `AV. Brasil`, `SP`);
deliveryContext(factory, `Joana`, `200`, `AV. Brasil`, `SP`);
deliveryContext(factory, `Eliana`, `2`, `Rua A`, `Salvador`);
deliveryContext(factory, `João`, `2022`, `AV. B`, `RJ`);
deliveryContext(factory, `Rodrigo`, `191a`, `AV. Brasil`, `SP`);
deliveryContext(factory, `Helena`, `191a`, `AV. Brasil`, `SP`);
deliveryContext(factory, `Joana`, `200`, `AV. Brasil`, `SP`);
deliveryContext(factory, `Eliana`, `2`, `Rua A`, `Salvador`);
deliveryContext(factory, `João`, `2022`, `AV. B`, `RJ`);

// Exibindo as localizações armazenadas na fábrica
console.log();
console.log(factory.getLocations());

/*
Estamos importando a função deliveryContext e a classe DeliveryFactory dos seus respectivos arquivos.

Criamos uma instância da classe DeliveryFactory chamada factory.

Usamos a função deliveryContext várias vezes para realizar entregas utilizando o contexto de entrega e a fábrica. Cada chamada à função simula a realização de uma entrega para diferentes destinatários e endereços.

Após todas as entregas serem realizadas, exibimos as localizações armazenadas na fábrica usando factory.getLocations(). Isso nos mostrará os objetos de localização criados e reutilizados durante as entregas.

O resultado da execução desse código mostrará as informações das localizações criadas e reutilizadas, demonstrando o uso do padrão de projeto Flyweight.
*/
