import { Router } from "../deps.ts";
import { loadQuery } from "./database.ts";
import { db } from "./database.ts";

export default (router: Router) => {
    router.get("/items", (ctx) => {

        const data = db.query<[number, string, string]>(loadQuery("getItems")).map(row => {
            return {
                id: row[0],
                uuid: row[1],
                name: row[2]
            }
        });

        const count = db.query<[number]>("select count(*) from items");

        ctx.response.body = JSON.stringify({
            data,
            count: count.pop()?.[0]
        });
    });

    router.get("/items/:id", (ctx) => {
        const id = ctx.params.id;
        const data = db.query<[number, string, string]>(loadQuery("getItemById"), { id }).map(row => {
            return {
                id: row[0],
                uuid: row[1],
                name: row[2]
            }
        }).pop();;

        ctx.response.body = JSON.stringify(data);
    })

    router.post("/items", async (ctx) => {
        const data = await ctx.request.body.json();
        console.log("Data", data);
        db.query<[string]>(loadQuery("createNewItem"), { name: data.name, uuid: crypto.randomUUID() });

        ctx.response.status = 200;
        ctx.response.body = JSON.stringify({});
    });
}