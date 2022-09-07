export interface Block {
  cycle:                         number;
  level:                         number;
  hash:                          Hash;
  timestamp:                     Date;
  proto:                         number;
  payloadRound:                  number;
  blockRound:                    number;
  validations:                   number;
  deposit:                       number;
  reward:                        number;
  bonus:                         number;
  fees:                          number;
  nonceRevealed:                 boolean;
  proposer:                      Baker;
  producer:                      Baker;
  software:                      Software;
  lbToggle:                      boolean;
  lbToggleEma:                   number;
  endorsements:                  Endorsement[];
  preendorsements:               Activation[];
  proposals:                     Ballot[];
  ballots:                       Ballot[];
  activations:                   Activation[];
  doubleBaking:                  DoubleIng[];
  doubleEndorsing:               DoubleIng[];
  doublePreendorsing:            DoubleIng[];
  nonceRevelations:              NonceRevelation[];
  delegations:                   Delegation[];
  originations:                  Tion[];
  transactions:                  Tion[];
  reveals:                       Reveal[];
  registerConstants:             RegisterConstant[];
  setDepositsLimits:             RegisterConstant[];
  transferTicketOps:             TransferTicketOp[];
  txRollupCommitOps:             Reveal[];
  txRollupDispatchTicketsOps:    RegisterConstant[];
  txRollupFinalizeCommitmentOps: RegisterConstant[];
  txRollupOriginationOps:        RegisterConstant[];
  txRollupRejectionOps:          RegisterConstant[];
  txRollupRemoveCommitmentOps:   RegisterConstant[];
  txRollupReturnBondOps:         RegisterConstant[];
  txRollupSubmitBatchOps:        RegisterConstant[];
  migrations:                    Migration[];
  revelationPenalties:           RevelationPenalty[];
  endorsingRewards:              EndorsingReward[];
  quote:                         { [key: string]: number };
  priority:                      number;
  baker:                         Baker;
  lbEscapeVote:                  boolean;
  lbEscapeEma:                   number;
}

export interface Activation {
  type:      Hash;
  id:        number;
  level:     number;
  timestamp: Date;
  block:     Hash;
  hash:      Hash;
  account?:  Baker;
  balance?:  number;
  quote:     { [key: string]: number };
  delegate?: Baker;
  slots?:    number;
}

export interface Baker {
  alias:   Hash;
  address: Hash;
}

export type Hash = string;

export interface Ballot {
  type:        Hash;
  id:          number;
  level:       number;
  timestamp:   Date;
  block:       Hash;
  hash:        Hash;
  period:      Period;
  proposal:    Proposal;
  delegate:    Baker;
  votingPower: number;
  vote?:       Hash;
  quote:       { [key: string]: number };
  rolls:       number;
  duplicated?: boolean;
}

export interface Period {
  index:      number;
  epoch:      number;
  kind:       Hash;
  firstLevel: number;
  lastLevel:  number;
}

export interface Proposal {
  alias: Hash;
  hash:  Hash;
}

export interface Delegation {
  type:           Hash;
  id:             number;
  level:          number;
  timestamp:      Date;
  block:          Hash;
  hash:           Hash;
  counter:        number;
  initiator:      Baker;
  sender:         Baker;
  senderCodeHash: number;
  nonce:          number;
  gasLimit:       number;
  gasUsed:        number;
  bakerFee:       number;
  amount:         number;
  prevDelegate:   Baker;
  newDelegate:    Baker;
  status:         Hash;
  errors:         Error[];
  quote:          { [key: string]: number };
}

export interface Error {
  type: Hash;
}

export interface DoubleIng {
  type:                  Hash;
  id:                    number;
  level:                 number;
  timestamp:             Date;
  block:                 Hash;
  hash:                  Hash;
  accusedLevel:          number;
  accuser:               Baker;
  accuserReward:         number;
  offender:              Baker;
  offenderLoss:          number;
  quote:                 { [key: string]: number };
  accuserRewards?:       number;
  offenderLostDeposits?: number;
  offenderLostRewards?:  number;
  offenderLostFees?:     number;
}

export interface Endorsement {
  type:      Hash;
  id:        number;
  level:     number;
  timestamp: Date;
  block:     Hash;
  hash:      Hash;
  delegate:  Baker;
  slots:     number;
  deposit:   number;
  rewards:   number;
  quote:     { [key: string]: number };
}

export interface EndorsingReward {
  type:      Hash;
  id:        number;
  level:     number;
  timestamp: Date;
  block:     Hash;
  baker:     Baker;
  expected:  number;
  received:  number;
  quote:     { [key: string]: number };
}

export interface Migration {
  type:                Hash;
  id:                  number;
  level:               number;
  timestamp:           Date;
  block:               Hash;
  kind:                Hash;
  account:             Baker;
  balanceChange:       number;
  storage:             null;
  diffs:               Diff[];
  tokenTransfersCount: number;
  quote:               { [key: string]: number };
}

export interface Diff {
  bigmap:  number;
  path:    Hash;
  action:  Hash;
  content: Content;
}

export interface Content {
  hash:  Hash;
  key:   null;
  value: null;
}

export interface NonceRevelation {
  type:          Hash;
  id:            number;
  level:         number;
  timestamp:     Date;
  block:         Hash;
  hash:          Hash;
  baker:         Baker;
  sender:        Baker;
  revealedLevel: number;
  revealedCycle: number;
  nonce:         Hash;
  reward:        number;
  quote:         { [key: string]: number };
  bakerRewards:  number;
}

export interface Tion {
  type:                Hash;
  id:                  number;
  level:               number;
  timestamp:           Date;
  block:               Hash;
  hash:                Hash;
  counter:             number;
  initiator:           Baker;
  sender:              Baker;
  senderCodeHash:      number;
  nonce:               number;
  gasLimit:            number;
  gasUsed:             number;
  storageLimit:        number;
  storageUsed:         number;
  bakerFee:            number;
  storageFee:          number;
  allocationFee:       number;
  contractBalance?:    number;
  contractManager?:    Baker;
  contractDelegate?:   Baker;
  code?:               null;
  storage:             null;
  diffs:               Diff[];
  status:              Hash;
  errors:              Error[];
  originatedContract?: OriginatedContract;
  tokenTransfersCount: number;
  quote:               { [key: string]: number };
  target?:             Baker;
  targetCodeHash?:     number;
  amount?:             number;
  parameter?:          Parameter;
  hasInternals?:       boolean;
}

export interface OriginatedContract {
  kind:     Hash;
  alias:    Hash;
  address:  Hash;
  typeHash: number;
  codeHash: number;
  tzips:    Hash[];
}

export interface Parameter {
  entrypoint: Hash;
  value:      null;
}

export interface RegisterConstant {
  type:           Hash;
  id:             number;
  level:          number;
  timestamp:      Date;
  block:          Hash;
  hash:           Hash;
  sender:         Baker;
  counter:        number;
  gasLimit:       number;
  gasUsed:        number;
  storageLimit:   number;
  storageUsed?:   number;
  bakerFee:       number;
  storageFee?:    number;
  status:         Hash;
  address?:       Hash;
  value?:         null;
  errors:         Error[];
  quote:          { [key: string]: number };
  limit?:         Hash;
  rollup?:        Baker;
  allocationFee?: number;
  committer?:     Baker;
  reward?:        number;
  loss?:          number;
  bond?:          number;
}

export interface Reveal {
  type:          Hash;
  id:            number;
  level:         number;
  timestamp:     Date;
  block:         Hash;
  hash:          Hash;
  sender:        Baker;
  counter:       number;
  gasLimit:      number;
  gasUsed:       number;
  bakerFee:      number;
  status:        Hash;
  errors:        Error[];
  quote:         { [key: string]: number };
  storageLimit?: number;
  storageUsed?:  number;
  rollup?:       Baker;
  bond?:         number;
}

export interface RevelationPenalty {
  type:        Hash;
  id:          number;
  level:       number;
  timestamp:   Date;
  block:       Hash;
  baker:       Baker;
  missedLevel: number;
  loss:        number;
  quote:       { [key: string]: number };
  lostReward:  number;
  lostFees:    number;
}

export interface Software {
  version: Hash;
  date:    Date;
}

export interface TransferTicketOp {
  type:         Hash;
  id:           number;
  level:        number;
  timestamp:    Date;
  block:        Hash;
  hash:         Hash;
  sender:       Baker;
  counter:      number;
  gasLimit:     number;
  gasUsed:      number;
  storageLimit: number;
  storageUsed:  number;
  bakerFee:     number;
  storageFee:   number;
  target:       Baker;
  ticketer:     Baker;
  amount:       Hash;
  entrypoint:   Hash;
  contentType:  any;
  content:      null;
  status:       Hash;
  errors:       Error[];
  quote:        { [key: string]: number };
}