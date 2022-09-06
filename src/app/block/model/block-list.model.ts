import { Baker } from "./block-dto-model";

export interface BlockView {
  level: number;
  proposer: Baker;
  timestamp: Date;
  numberTransactions: number;
}