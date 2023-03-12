import { server } from "./server";

const start = async () => {
  try {
    await server.listen({ port: 3333 });
  } catch (err) {
    server.log.error(err);
    process.exit(1);
  }
};

start();
