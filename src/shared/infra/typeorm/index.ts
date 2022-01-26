import { createConnections } from 'typeorm';

createConnections();

// yarn typeorm

// voce so pode alterar migrations só se não foi enviado para o campo de produção
// yarn typeorm migration:revert
// yarn typeorm migration:show
// yarn typeorm migration:run
