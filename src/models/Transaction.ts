import { Proposal, ValidatorPubKey } from '../service/rpc/NodeRpcModels';
import {
  NFTAccountTransactionResponse,
  NftResponse,
  NftTransactionResponse,
} from '../service/rpc/ChainIndexingModels';

export enum TransactionStatus {
  SUCCESS = 'SUCCESS',
  PENDING = 'PENDING',
  FAILED = 'FAILED',
}

export enum TransactionDirection {
  INCOMING,
  OUTGOING,
  SELF,
}

export interface TransactionData {
  hash: string;
  memo: string | null;
  date: string;
  status: TransactionStatus;
  assetSymbol: string;
}

export interface TransferTransactionData extends TransactionData {
  senderAddress: string;
  receiverAddress: string;
  amount: string;
}

export interface StakingTransactionData extends TransactionData {
  delegatorAddress: string;
  validatorAddress: string;
  stakedAmount: string;
}

export interface StakingTransactionList {
  transactions: Array<StakingTransactionData>;
  totalBalance: string;
  walletId: string;
}

export interface RewardTransactionList {
  transactions: Array<RewardTransaction>;
  walletId: string;
}

export interface TransferTransactionList {
  transactions: Array<TransferTransactionData>;
  walletId: string;
}

export interface NFTList {
  nfts: Array<NftModel>;
  walletId: string;
}

export interface NFTQueryParams {
  tokenId: string;
  denomId: string;
}

export interface NFTTransactionHistory {
  transfers: Array<NftTransferModel>;
  walletId: string;
  nftQuery: NFTQueryParams;
}

export interface ValidatorList {
  validators: Array<ValidatorModel>;
  chainId: string;
}

export interface ProposalList {
  proposals: Array<ProposalModel>;
  chainId: string;
}

export interface RewardTransaction {
  delegatorAddress: string;
  validatorAddress: string;
  amount: string;
}

export interface BroadCastResult {
  readonly transactionHash?: string;
  readonly message?: string;
  readonly code?: number;
}

export interface ValidatorModel {
  readonly status: string;
  readonly jailed: boolean;
  readonly validatorName: string;
  readonly validatorAddress: string;
  readonly validatorWebSite: string;
  readonly securityContact: string;
  readonly currentCommissionRate: string;
  readonly maxCommissionRate: string;
  readonly currentTokens: string;
  readonly currentShares: string;
  readonly pubKey: ValidatorPubKey;
}

export interface ProposalModel extends Proposal {}
export interface NftModel extends NftResponse {
  isMintedByCDC: boolean;
  marketplaceLink: string;
}
export interface NftTransferModel extends NftTransactionResponse {}
export interface NFTAccountTransactionModel extends NFTAccountTransactionResponse {}

export interface NFTAccountTransactionList {
  transactions: Array<NFTAccountTransactionModel>;
  walletId: string;
}

export const ProposalStatuses = {
  PROPOSAL_STATUS_UNSPECIFIED: 'PROPOSAL_STATUS_UNSPECIFIED',
  PROPOSAL_STATUS_DEPOSIT_PERIOD: 'PROPOSAL_STATUS_DEPOSIT_PERIOD',
  PROPOSAL_STATUS_VOTING_PERIOD: 'PROPOSAL_STATUS_VOTING_PERIOD',
  PROPOSAL_STATUS_PASSED: 'PROPOSAL_STATUS_PASSED',
  PROPOSAL_STATUS_REJECTED: 'PROPOSAL_STATUS_REJECTED',
  PROPOSAL_STATUS_FAILED: 'PROPOSAL_STATUS_FAILED',
};

export enum VoteOption {
  VOTE_OPTION_UNSPECIFIED = 0,
  VOTE_OPTION_YES = 1,
  VOTE_OPTION_ABSTAIN = 2,
  VOTE_OPTION_NO = 3,
  VOTE_OPTION_NO_WITH_VETO = 4,
}
