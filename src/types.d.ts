export type Account = {
  id: number;
  order: number;
  name: string;
  description: string;
  icon: string;
  balance: number;
  birth: number;
  height: number;
}

export type SyncState = {
  height: number;
  start: number;
  latest: number;
  is_rescan: boolean;
  remaining_eta: number;
  start_time: number;
  speed: number;
  downloaded: number;
  decrypted: number;
}

export type AddressBalance = {
  t: string;
  a: string;
  b: number;
}

export type AccountState = {
  name: string;
  height: number;
  balance: number;
  addresses: AddressBalance[];
}

export type Tx = {
  id: number;
  account: number;
  txid: string;
  height: number;
  timestamp: number;
  value: number;
  receiver: string;
  memo: string;
  expiration: number;
  transparent_bundle: {
    inputs: UTXO[];
    outputs: UTXO[];
  }
  sapling_bundle: {
    inputs: ShieldedSpend[];
    outputs: ShieldedOutput[];
  }
  orchard_bundle: {
    inputs: ShieldedSpend[];
    outputs: ShieldedOutput[];
  }
}

export type UTXO = {
  id: number;
  account: number;
  height: number;
  timestamp: number;
  txid: string;
  vout: number;
  address: string;
  external: number;
  addr_index: number;
  value: number;
}

export type Note = {
  note_type: 'Note';
  id: number;
  account: number;
  height: number;
  timestamp: number;
  position: number;
  txid: string;
  vout: number;
  address: string;
  addr_index: number;
  value: number;
  cmx: string;
  rcm: string;
  nf: string;
  rho: string;
  memo: string;
  is_orchard: boolean;
}

export type OpaqueSpend = {
  note_type: 'OpaqueSpend';
  nf: string;
  is_orchard: boolean;
}

export type OpaqueOutput = {
  note_type: 'OpaqueOutput';
  cmx: string;
  is_orchard: boolean;
}

export type ShieldedSpend = Note | OpaqueSpend;
export type ShieldedOutput = Note | OpaqueOutput;

export type TXSummary = {
  id: number;
  account: number;
  txid: string;
  height: number;
  timestamp: number;
  value: number;
  receiver: string;
  memo: string;

};
