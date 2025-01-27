import { Account, SyncState } from "./types";

export const mock_accounts: Account[] = [
  {
    id: 1,
    name: "Main",
    icon: "data",
    order: 3,
    description: "Main Account",
    balance: 40000000,
    birth: 2100000,
    height: 2200000,
  },
  {
    id: 2,
    name: "Second",
    icon: "data",
    order: 1,
    description: "",
    balance: 80000000,
    birth: 2100000,
    height: 2200000,
  },
  {
    id: 3,
    name: "Pocket",
    icon: "data",
    order: 2,
    description: "Change",
    balance: 120000000,
    birth: 2100000,
    height: 2200000,
  },
];

export const mock_sync_state: SyncState = {
  height: 2795125,
  start: 2761142,
  latest: 2801240,
  is_rescan: false,
  remaining_eta: 102,
  start_time: 1737931988,
  speed: 214,
  downloaded: 48512,
  decrypted: 2194204,
};
