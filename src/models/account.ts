import { mock_account_state } from "@/mock_data";
import { AccountState } from "@/types";
import { makeAutoObservable } from "mobx";

class AccountStore {
  account: AccountState = mock_account_state;

  constructor() {
    makeAutoObservable(this);
  }
}

export const accountState = new AccountStore();
