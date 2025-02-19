import { Account, AccountState, SyncState, Tx, TXSummary } from "./types";

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
  name: "Main",
  height: 2795125,
  balance: 722421402,
  addresses: [
    {
      t: "UA",
      a: "uregtest1chggrm62vhkf5ftv3mawjvavuwjgx7x3wj582tlq5769cl6xf6q6whrukc5z2mxyz603j6lzda8pgyy8dy59qta58uncp6cetwmweklawr2ty34jqw6e8d704rly7m7eh9wcs50m0hdvsdg5akzys3uh95wugw9n78a5gj0mc0m69rsu2lf32tl8glje9p6870e9wwy6qeeyvg6x7ae",
      b: 72000000,
    },
    {
      t: "Diversified",
      a: "uregtest1chggrm62vhkf5ftv3mawjvavuwjgx7x3wj582tlq5769cl6xf6q6whrukc5z2mxyz603j6lzda8pgyy8dy59qta58uncp6cetwmweklawr2ty34jqw6e8d704rly7m7eh9wcs50m0hdvsdg5akzys3uh95wugw9n78a5gj0mc0m69rsu2lf32tl8glje9p6870e9wwy6qeeyvg6x7ae",
      b: 72000000,
    },
    {
      t: "Sapling",
      a: "zregtestsapling1h0ud99tf3qe9lmpmncs8rz0vwluhav0etuuejmvxcjnykd6gvp8tllh77ac0dm60zqmyq3c2a3t",
      b: 24000000,
    },
    {
      t: "Orchard",
      a: "uregtest1qae0mnr0p9jenge23nc47f359kwkyqvq0kl3qfgyqmk5k37jcvqlzafype9r99yxwfhs38q3w0a2qgam489deht2fguv6hg6g5m0c5vk",
      b: 72000000,
    },
    {
      t: "Transparent",
      a: "tmFtne18VWwk7x8p2wUwfnAqtntMVikctYi",
      b: 10000000,
    },
  ],
};

export const mock_tx: Tx = {
  id: 1,
  account: 1,
  txid: "d5f64424f55586f66838b53670969a387ef342249e8e9bb40c9a5f2f2fd49d3b",
  height: 2100125,
  timestamp: 1738148377,
  value: 4000000000,
  receiver:
    "uregtest1qae0mnr0p9jenge23nc47f359kwkyqvq0kl3qfgyqmk5k37jcvqlzafype9r99yxwfhs38q3w0a2qgam489deht2fguv6hg6g5m0c5vk",
  memo: "This demonstration text is carefully crafted to contain exactly 512 characters, ensuring precision for any testing or previewing requirements. It serves as an example to verify that the text fits within strict character limits. Every punctuation mark, space, and letter has been intentionally placed to create a passage that not only meets the exact count but also remains coherent and useful for demonstration purposes. Enjoy this accurate and reliable sample text. This extra sentence fills the remaining gap!",
  expiration: 2100500,
  transparent_bundle: {
    inputs: [
      {
        id: 1,
        account: 1,
        height: 2100100,
        timestamp: 1738147177,
        txid: "1234567890123456789012345678901234567890123456789012345678901234",
        vout: 0,
        address: "tmFtne18VWwk7x8p2wUwfnAqtntMVikctYi",
        external: 0,
        addr_index: 0,
        value: 1000000000,
      },
      {
        id: 2,
        account: 1,
        height: 2100100,
        timestamp: 1738147177,
        txid: "1234567890123456789012345678901234567890123456789012345678901234",
        vout: 0,
        address: "tmFtne18VWwk7x8p2wUwfnAqtntMVikctYi",
        external: 0,
        addr_index: 0,
        value: 1000000000,
      },
    ],
    outputs: [
      {
        id: 2,
        account: 1,
        height: 2100200,
        timestamp: 1738197177,
        txid: "1234567890123456789012345678901234567890123456789012345678901234",
        vout: 0,
        address: "tmFtne18VWwk7x8p2wUwfnAqtntMVikctYi",
        external: 0,
        addr_index: 0,
        value: 900000000,
      },
    ],
  },
  sapling_bundle: {
    inputs: [
      {
        note_type: "OpaqueSpend",
        nf: "1234567890123456789012345678901234567890123456789012345678901234",
        is_orchard: false,
      },
      {
        note_type: "Note",
        id: 2,
        account: 1,
        height: 2100200,
        timestamp: 1738197177,
        txid: "1234567890123456789012345678901234567890123456789012345678901234",
        vout: 1,
        address:
          "zregtestsapling1h0ud99tf3qe9lmpmncs8rz0vwluhav0etuuejmvxcjnykd6gvp8tllh77ac0dm60zqmyq3c2a3t",
        addr_index: 0,
        value: 900000000,
        position: 1421032045,
        cmx: "1234567890123456789012345678901234567890123456789012345678901234",
        rcm: "1234567890123456789012345678901234567890123456789012345678901234",
        nf: "2234567890123456789012345678901234567890123456789012345678901234",
        rho: "",
        memo: "This demonstration text is carefully crafted to contain exactly 512 characters, ensuring precision for any testing or previewing requirements. It serves as an example to verify that the text fits within strict character limits. Every punctuation mark, space, and letter has been intentionally placed to create a passage that not only meets the exact count but also remains coherent and useful for demonstration purposes. Enjoy this accurate and reliable sample text. This extra sentence fills the remaining gap!",
        is_orchard: false,
      },
    ],
    outputs: [
      {
        note_type: "OpaqueOutput",
        cmx: "1234567890123456789012345678901234567890123456789012345678901234",
        is_orchard: false,
      },
      {
        note_type: "Note",
        id: 3,
        account: 1,
        height: 2100200,
        timestamp: 1738197177,
        txid: "1234567890123456789012345678901234567890123456789012345678901234",
        vout: 1,
        address:
          "zregtestsapling1h0ud99tf3qe9lmpmncs8rz0vwluhav0etuuejmvxcjnykd6gvp8tllh77ac0dm60zqmyq3c2a3t",
        addr_index: 0,
        value: 900000000,
        position: 1421032045,
        cmx: "2234567890123456789012345678901234567890123456789012345678901234",
        rcm: "1234567890123456789012345678901234567890123456789012345678901234",
        nf: "1234567890123456789012345678901234567890123456789012345678901234",
        rho: "",
        memo: "This demonstration text is carefully crafted to contain exactly 512 characters, ensuring precision for any testing or previewing requirements. It serves as an example to verify that the text fits within strict character limits. Every punctuation mark, space, and letter has been intentionally placed to create a passage that not only meets the exact count but also remains coherent and useful for demonstration purposes. Enjoy this accurate and reliable sample text. This extra sentence fills the remaining gap!",
        is_orchard: false,
      },
    ],
  },
  orchard_bundle: {
    inputs: [
      {
        note_type: "OpaqueSpend",
        nf: "1234567890123456789012345678901234567890123456789012345678901234",
        is_orchard: true,
      },
      {
        note_type: "Note",
        id: 2,
        account: 1,
        height: 2100200,
        timestamp: 1738197177,
        txid: "1234567890123456789012345678901234567890123456789012345678901234",
        vout: 1,
        address:
          "uregtest1qae0mnr0p9jenge23nc47f359kwkyqvq0kl3qfgyqmk5k37jcvqlzafype9r99yxwfhs38q3w0a2qgam489deht2fguv6hg6g5m0c5vk",
        addr_index: 0,
        value: 900000000,
        position: 1421032045,
        cmx: "1234567890123456789012345678901234567890123456789012345678901234",
        rcm: "1234567890123456789012345678901234567890123456789012345678901234",
        nf: "2234567890123456789012345678901234567890123456789012345678901234",
        rho: "1234567890123456789012345678901234567890123456789012345678901234",
        memo: "",
        is_orchard: true,
      },
    ],
    outputs: [
      {
        note_type: "OpaqueOutput",
        cmx: "1234567890123456789012345678901234567890123456789012345678901234",
        is_orchard: true,
      },
      {
        note_type: "Note",
        id: 3,
        account: 1,
        height: 2100200,
        timestamp: 1738197177,
        txid: "1234567890123456789012345678901234567890123456789012345678901234",
        vout: 1,
        address:
          "uregtest1qae0mnr0p9jenge23nc47f359kwkyqvq0kl3qfgyqmk5k37jcvqlzafype9r99yxwfhs38q3w0a2qgam489deht2fguv6hg6g5m0c5vk",
        addr_index: 0,
        value: 2950000000,
        position: 1421032045,
        cmx: "2234567890123456789012345678901234567890123456789012345678901234",
        rcm: "1234567890123456789012345678901234567890123456789012345678901234",
        nf: "1234567890123456789012345678901234567890123456789012345678901234",
        rho: "1234567890123456789012345678901234567890123456789012345678901234",
        memo: "",
        is_orchard: true,
      },
    ],
  },
};

export const mock_txs: TXSummary[] = [
  {
    id: 1,
    account: 1,
    txid: "d5f64424f55586f66838b53670969a387ef342249e8e9bb40c9a5f2f2fd49d3b",
    height: 2100125,
    timestamp: 1738148377,
    value: 4000000000,
    receiver:
      "uregtest1qae0mnr0p9jenge23nc47f359kwkyqvq0kl3qfgyqmk5k37jcvqlzafype9r99yxwfhs38q3w0a2qgam489deht2fguv6hg6g5m0c5vk",
    memo: "This demonstration text is carefully crafted to contain exactly 512 characters, ensuring precision for any testing or previewing requirements. It serves as an example to verify that the text fits within strict character limits. Every punctuation mark, space, and letter has been intentionally placed to create a passage that not only meets the exact count but also remains coherent and useful for demonstration purposes. Enjoy this accurate and reliable sample text. This extra sentence fills the remaining gap!",
  },
  {
    id: 2,
    account: 1,
    txid: "d5f64424f55586f66838b53670969a387ef342249e8e9bb40c9a5f2f2fd49d3b",
    height: 2100125,
    timestamp: 1738148377,
    value: 4000000000,
    receiver:
      "uregtest1qae0mnr0p9jenge23nc47f359kwkyqvq0kl3qfgyqmk5k37jcvqlzafype9r99yxwfhs38q3w0a2qgam489deht2fguv6hg6g5m0c5vk",
    memo: "This demonstration text is carefully crafted to contain exactly 512 characters, ensuring precision for any testing or previewing requirements. It serves as an example to verify that the text fits within strict character limits. Every punctuation mark, space, and letter has been intentionally placed to create a passage that not only meets the exact count but also remains coherent and useful for demonstration purposes. Enjoy this accurate and reliable sample text. This extra sentence fills the remaining gap!",
  },
  {
    id: 3,
    account: 1,
    txid: "d5f64424f55586f66838b53670969a387ef342249e8e9bb40c9a5f2f2fd49d3b",
    height: 2100125,
    timestamp: 1738148377,
    value: 4000000000,
    receiver:
      "uregtest1qae0mnr0p9jenge23nc47f359kwkyqvq0kl3qfgyqmk5k37jcvqlzafype9r99yxwfhs38q3w0a2qgam489deht2fguv6hg6g5m0c5vk",
    memo: "This demonstration text is carefully crafted to contain exactly 512 characters, ensuring precision for any testing or previewing requirements. It serves as an example to verify that the text fits within strict character limits. Every punctuation mark, space, and letter has been intentionally placed to create a passage that not only meets the exact count but also remains coherent and useful for demonstration purposes. Enjoy this accurate and reliable sample text. This extra sentence fills the remaining gap!",
  },
];
