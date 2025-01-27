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
