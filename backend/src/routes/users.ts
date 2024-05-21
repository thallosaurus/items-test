import { Router } from "../../deps.ts";
import { User } from "../models/user.ts";

const router = new Router();

router.get("/", (ctx) => {
    const data = User.getAllUsers();
    ctx.response.body = JSON.stringify(data);
});


export default router;