import { Application, Router, oakCors } from './deps.ts';

import { db, setupDatabase } from './src/database.ts';
import { router } from './src/router.ts';

class ResponseData {
    status: number
    data: any
    constructor(data: any) {
        this.data = data;
        this.status = 0;
    }
}

await setupDatabase();

const port = 8080;
export const app = new Application();
app.use(oakCors());

console.log("Listening to", port)

app.use(router.routes());
app.use(router.allowedMethods());


Deno.addSignalListener("SIGINT", () => {  
    db.close();
    Deno.exit();
});

await app.listen({ port });