import { Router } from "../deps.ts";
import { db, loadQuery } from "./database.ts";
import { lookupUser, registerUser } from "./database.ts";

export default (router: Router) => {
    router.post("/login", async (ctx) => {
        const data  = await ctx.request.body.json();
        console.log(data);
        const data2 = await lookupUser(data.username, data.password);
        console.log(data2),
        ctx.response.body = JSON.stringify(data2);
    });

    router.post("/logout", (ctx) => {
        return {};
    })

    router.post("/register", async (ctx) => {
        const data = await ctx.request.body.json();

        await registerUser(data.username, data.password);
        ctx.response.status = 200;
    });

    router.get("/users", (ctx) => {
        const data = getUsers();
        ctx.response.body = JSON.stringify(data);
    })
}

function getUsers() {
    const users = db.query<[number, string]>(loadQuery("getUsers")).map((row) => {
        return {
            id: row[0],
            username: row[1]
        }
    });

    return users
}