export enum Strategies {
  GENERIC_SIMULATION = 'GENERIC_SIMULATION',
  PROOF_OF_STAKE = 'PROOF_OF_STAKE',
  HYPERLEDGER = 'HYPERLEDGER',
  BITCOIN_LIKE_BLOCKCHAIN = 'BITCOIN_LIKE_BLOCKCHAIN',
}

export interface INumberOfNodesConfiguration {
  numberOfNodes: number | null;
}

export interface INumberOfNeighboursConfiguration {
  numberOfNeighbours: number | null;
}

export interface IBlockTime {
  blockTime: number | null;
}

export interface ITransactionSize {
  transactionSize: number | null;
}

export interface ISimulateUntil {
  simulateUntil: number | null;
}

export interface IThroughput {
  throughput: number | null;
}

export interface ILatency {
  latency: number | null;
}

export interface ITransactionPropagationDelay {
  latency: number | null;
}

export interface INeighboursDiscoveryInterval {
  neighboursDiscoveryInterval: number | null;
}

export interface IMaxBlockSize {
  maxBlockSize: number | null;
}

export interface IMaxBlockWeight {
  maxBlockWeight: number | null;
}

export interface INetworkBandwidth {
  networkBandwidth: number | null;
}

export interface IHashRate {
  hashRate: number;
}

export interface IConfirmations {
  confirmations: number | null;
}

export interface IStrategy {
  strategy: string;
}

export interface ITransactionFee {
  transactionFee: number;
}

export interface ITransactionWeight {
  transactionWeight: number;
}

export interface IConfiguration extends
  INumberOfNodesConfiguration,
  INumberOfNeighboursConfiguration,
  IBlockTime,
  ITransactionSize,
  ISimulateUntil,
  IThroughput,
  ILatency,
  ITransactionPropagationDelay,
  IMaxBlockSize,
  IMaxBlockWeight,
  INetworkBandwidth,
  IStrategy,
  IHashRate,
  IConfirmations,
  INeighboursDiscoveryInterval,
  ITransactionFee,
  ITransactionWeight {
  [index: string]: any | null;
}

export type ConfigurationKey = keyof IConfiguration;

export interface ISvg {
  id: string;
  viewBox: string;
}
