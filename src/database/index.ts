import 'reflect-metadata';
import { createConnection } from 'typeorm';
import { SnakeNamingStrategy } from 'typeorm-naming-strategies';

const patch = process.env.NODE_ENV === 'development'
  ? `${__dirname}/entity/*.ts`
  : `${__dirname}/entity/*.js`;

createConnection({
  type: 'mysql',
  host: 'localhost',
  port: 3306,
  username: 'root',
  password: '123456',
  database: 'teste',
  entities: [patch],
  namingStrategy: new SnakeNamingStrategy(),
})
  .then((connection) => {
    if (connection.isConnected) {
      console.log('Banco conectado!');
    }
  })
  .catch((error) => console.log(error));
