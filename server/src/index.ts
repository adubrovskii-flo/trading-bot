import Koa, { Context } from "koa";
import { Buy } from "./states/Buy";
import { OperationContext } from "./states/OperationContext";
const app = new Koa();

const operation = new Buy();

const operationContext = new OperationContext(operation);
operationContext.buy();
operationContext.sell();

app.use(async (ctx: Context, next) => {
  ctx.set("Access-Control-Allow-Origin", "*");
  await next();
});

app.use(async (ctx: Context, next) => {
  ctx.body = "Hello World";
});

app.listen(3000);
