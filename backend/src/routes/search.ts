import { Router } from "../../deps.ts";
import { db, loadQuery } from "../database.ts";

const router = new Router();

export default router;

router.get("/", (ctx) => {
    const query = "%" + ctx.request.url.searchParams.get("query") + "%";

    console.log("query", query);

    const res = db.query<[number, string]>(loadQuery("search"), { query }).map((row) => {
        return {
            id: row[0],
            name: row[1]
        }
    });

    ctx.response.body = JSON.stringify(res);
})