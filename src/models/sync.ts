import { mock_sync_state } from "@/mock_data";
import { SyncState } from "@/types";
import { makeAutoObservable } from "mobx";

class SyncStore {
  sync: SyncState = mock_sync_state;

  constructor() {
    makeAutoObservable(this);
  }
}

export const syncState = new SyncStore();