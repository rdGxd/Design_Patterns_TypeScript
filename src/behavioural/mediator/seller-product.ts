// Tipo que representa informações de um produto oferecido por um vendedor
export type SellerProduct = { id: string; name: string; price: number };

/*
Este tipo é usado para padronizar a estrutura de informações de produtos em todo o sistema. Ele contém três propriedades: id (identificador único do produto), name (nome do produto) e price (preço do produto). Esse tipo ajuda a garantir consistência nas informações dos produtos compartilhadas entre os vendedores, o mediador e os compradores no sistema de mediação.
*/
