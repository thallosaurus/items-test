import { Application, Router, oakCors } from './deps.ts';

import { db, setupDatabase } from './src/database.ts';
import { router } from './src/router.ts';

//setup database tables
await setupDatabase();

const baseRouter = new Router();
baseRouter.use("/api", router.routes())
baseRouter.use("/api", router.allowedMethods())

const port = Deno.env.get("PORT") ?? "8080";
export const app = new Application();
app.use(oakCors());
app.use(baseRouter.routes())
app.use(baseRouter.allowedMethods())

Deno.addSignalListener("SIGINT", () => {
    db.close();
    Deno.exit();
});

console.log("Listening to", port);
await app.listen({ port: parseInt(port) });