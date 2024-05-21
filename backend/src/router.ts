import { Router } from "../deps.ts";
import auth from "./routes/auth.ts";
import items from "./routes/items.ts";
import users from "./routes/users.ts";

export const router = new Router();
//auth(router);
//router.use("/items", items);

router.get("/", (ctx) => {
  ctx.response.body = "hello world!";
});

router.get("/test", (ctx) => {
  throw new Error("Testerror");
});

router.get("/fail", (ctx) => {
  throw new Error("Testerror");

});

router.use("/items", items.routes());
router.use("/items", items.allowedMethods());
router.use("/auth", auth.routes());
router.use("/auth", auth.allowedMethods());
router.use("/users", users.routes());
router.use("/users", users.allowedMethods());

router.use("/search", users.routes());
router.use("/search", users.allowedMethods());