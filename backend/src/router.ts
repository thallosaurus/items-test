import { Router } from "../deps.ts";
import auth from "./auth.ts";
import items from "./items.ts";


export const router = new Router();
auth(router);
items(router);

router.get("/", (ctx) => {
  ctx.response.body = "hello world!";
});

router.get("/fail", (ctx) => {
  throw new Error("Testerror");
});

