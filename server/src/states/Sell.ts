import { IOperation } from "../models/operation.interface";
import { Buy } from "./Buy";
import { OperationContext } from "./OperationContext";

export class Sell implements IOperation {
  private context: OperationContext = new OperationContext(this);

  buy() {
    console.log("---- SELL CONTEXT ----");
    console.log("BUY!");
    this.context.changeOperation(new Buy());
  }

  sell() {
    console.log("---- SELL CONTEXT ----");
    console.log("SELL!");
    this.context.changeOperation(new Buy());
  }

  setContext(context: OperationContext) {
    this.context = context;
  }
}
