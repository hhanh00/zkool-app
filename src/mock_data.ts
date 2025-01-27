import { Account, AccountState, SyncState } from "./types";

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

export const mock_account_state: AccountState = {
  name: 'Main',
  height: 2795125,
  balance: 72000000,
  addresses: [
    {
      t: 'UA',
      a: 'uregtest1chggrm62vhkf5ftv3mawjvavuwjgx7x3wj582tlq5769cl6xf6q6whrukc5z2mxyz603j6lzda8pgyy8dy59qta58uncp6cetwmweklawr2ty34jqw6e8d704rly7m7eh9wcs50m0hdvsdg5akzys3uh95wugw9n78a5gj0mc0m69rsu2lf32tl8glje9p6870e9wwy6qeeyvg6x7ae',
      b: 72000000,
    },
    {
      t: 'Diversified',
      a: 'uregtest1chggrm62vhkf5ftv3mawjvavuwjgx7x3wj582tlq5769cl6xf6q6whrukc5z2mxyz603j6lzda8pgyy8dy59qta58uncp6cetwmweklawr2ty34jqw6e8d704rly7m7eh9wcs50m0hdvsdg5akzys3uh95wugw9n78a5gj0mc0m69rsu2lf32tl8glje9p6870e9wwy6qeeyvg6x7ae',
      b: 72000000,
    },
    {
      t: 'Sapling',
      a: 'zregtestsapling1h0ud99tf3qe9lmpmncs8rz0vwluhav0etuuejmvxcjnykd6gvp8tllh77ac0dm60zqmyq3c2a3t',
      b: 24000000,
    },
    {
      t: 'Orchard',
      a: 'uregtest1qae0mnr0p9jenge23nc47f359kwkyqvq0kl3qfgyqmk5k37jcvqlzafype9r99yxwfhs38q3w0a2qgam489deht2fguv6hg6g5m0c5vk',
      b: 72000000,
    },
    {
      t: 'Transparent',
      a: 'tmFtne18VWwk7x8p2wUwfnAqtntMVikctYi',
      b: 10000000,
    },
  ]
}
