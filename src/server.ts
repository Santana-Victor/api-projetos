import 'dotenv/config';
import fastify from 'fastify';
import cors from '@fastify/cors';
import routes from './routes/routes';
const host = '0.0.0.0';
const port = process.env.PORT ? Number(process.env.PORT) : 8080;

const app = fastify();

async function startServer() {
  await app.register(cors);
  await app.register(routes);

  try {
    await app.listen({ host: host, port: port });
  } catch (error) {
    process.exit(1);
  }
}

startServer();
