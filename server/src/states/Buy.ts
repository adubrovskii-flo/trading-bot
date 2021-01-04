import { IOperation } from "../models/operation.interface";
import { OperationContext } from "./OperationContext";
import { Sell } from "./Sell";

export class Buy implements IOperation {
  private context: OperationContext = new OperationContext(this);

  buy() {
    console.log("---- BUY CONTEXT ----");
    console.log("BUY!");
    this.context.changeOperation(new Sell());
  }

  sell() {
    console.log("---- BUY CONTEXT ----");
    console.log("SELL!");
    this.context.changeOperation(new Sell());
  }

  setContext(context: OperationContext) {
    this.context = context;
  }
}
