import { BuilderFacade } from './builder-facade';

// Cria uma instância da fachada que simplifica a criação de pratos
const builderFacade = new BuilderFacade();

// Chama o método para criar e exibir um prato principal
builderFacade.makeMeal1();

// Chama o método para criar um prato principal com bebida e exibi-lo
builderFacade.makeMeal2();

// Chama o método para criar e exibir um prato vegano
builderFacade.makeMeal3();

/*
Neste trecho de código, estamos importando a classe BuilderFacade do arquivo builder-facade.ts. Em seguida, criamos uma instância dessa fachada usando new BuilderFacade(). Os três métodos subsequente chamam as funções da instância da fachada para criar e exibir diferentes tipos de pratos, demonstrando o uso simplificado e centralizado dos construtores de pratos principais e veganos definidos na classe BuilderFacade.
*/
