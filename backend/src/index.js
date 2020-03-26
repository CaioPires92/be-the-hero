const express = require('express');
const cors = require('cors'); 
const routes = require('./routes');

const app = express();

app.use(cors());
app.use(express.json());
app.use(routes);

app.listen(3333)

/**
 * Rota / Recurso
 */

/**Métodos HTTP:
 * 
 * GET: Buscar/listar uma informação do back-end
 * POST: Criar uma informação no back-end
 * PUT: alterar uma informação no back-end
 * DELETE: deletar uma informação no back-end
 */

 /**
  * Tipos de parametros:
  * 
  * Query Params: Parâmetros nomeados enviados na rota após o "?" (filtros, paginação)
  * Route Params: Parâmetros ultilizados para identificar recursos 
  * Request Body: Corpo da quisição ultilizado para criar ou alterar recursos
  */

  /**
   * SQL: MySQL, SQlite, PostgreeSQL, Oracle, Microsoft SQL Server
   * noSQL: MongoDB, CouchDB, etc...
   */

   /**
    * Driver: SELECT * FROM users
    * Query Builder: table('Users').select('*').where()
    */




