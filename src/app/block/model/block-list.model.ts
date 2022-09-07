import { Baker, Block, Hash } from "./block-dto-model";

export type BlockView = Pick<Block, 'level' | 'proposer' | 'timestamp'> & {
  numberTransactions: number;
};

export interface TransactionView {
  sender: Baker;
  target: {
    address: Hash;
  };
  amount: number;
  status: string;
}