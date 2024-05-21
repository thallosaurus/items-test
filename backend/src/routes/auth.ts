import { Router } from "../../deps.ts";
import { User } from "../models/user.ts";

const router = new Router();

router.post("/login", async (ctx) => {
    const data = await ctx.request.body.json();
    console.log(data);
    const data2 = await User.lookupUser(data.username, data.password);
    console.log(data2),
    ctx.response.body = JSON.stringify(data2);
});

router.post("/logout", (ctx) => {
    return {};
})

router.post("/register", async (ctx) => {
    const data = await ctx.request.body.json();

    await User.registerUser(data.username, data.password);
    ctx.response.status = 200;
});

export default router;