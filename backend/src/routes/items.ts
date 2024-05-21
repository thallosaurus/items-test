import { Router } from "../../deps.ts";
import { loadQuery } from "../database.ts";
import { db } from "../database.ts";
import { Item } from "../models/item.ts";

export const router = new Router();

router.get("/", (ctx) => {
    const data = Item.getAllItems();

    ctx.response.body = JSON.stringify(data);
});

router.get("/:id", (ctx) => {
    const id = ctx.params.id;

    const data = Item.lookupItemById(parseInt(id));

    ctx.response.body = JSON.stringify(data);
})

router.post("/", async (ctx) => {
    const data = await ctx.request.body.json();
    console.log("Data", data);
    db.query<[string]>(loadQuery("createNewItem"), { name: data.name, uuid: crypto.randomUUID() });

    ctx.response.status = 200;
    ctx.response.body = JSON.stringify({});
});

export default router;