import { OperationContext } from "../states/OperationContext";

export interface IOperation {
    buy: () => void;
    sell: () => void;
    setContext: (context: OperationContext) => void;
}
