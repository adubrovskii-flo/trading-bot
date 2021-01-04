import { IOperation } from "../models/operation.interface";

export class OperationContext implements IOperation {
  constructor(private operation: IOperation) {
    operation.setContext(this);
  }

  buy() {
    this.operation.buy();
  }

  sell() {
    this.operation.sell();
  }

  changeOperation(nextOperation: IOperation) {
    this.operation = nextOperation;
  }

  setContext() {}
}
