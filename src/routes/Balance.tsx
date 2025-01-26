import { Button } from "@/components/ui/button"
import { SyncStatus } from "./balance/SyncStatus"
import { runInAction } from "mobx"
import { syncState } from "@/models/sync"

export const Balance: React.FC<{}> = () => {
  return <div>
    <SyncStatus />
    <Button onClick={() => 
      runInAction(() => {
        syncState.sync.latest += 1;
      })
    }></Button>
  </div>  
}
