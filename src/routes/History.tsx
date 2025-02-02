import { dateOf, v } from "@/components/ui/transaction";
import { TXSummary } from "@/types";

export const History: React.FC<{ txs: TXSummary[] }> = ({ txs }) => {
  return (
    <div className="flex flex-col max-w-sm m-auto gap-y-2">
      {txs.map((tx: TXSummary) => {
        return (
          <div key={tx.id} className="flex flex-col border rounded p-1">
            <div className="flex justify-between">
              <div>
                <span className="text-amber-600">Height: </span>
                {tx.height}
              </div>
              <div>{dateOf(tx.timestamp)}</div>
            </div>
            <div>
              <span className="text-amber-600">Address: </span>
              <span className="break-all font-semibold">{tx.receiver}</span>
            </div>
            <div className="flex justify-between">
              <span className="text-amber-600">Amount:</span>
              <span className="text-red-500 font-semibold">{v(tx.value)} ZEC</span>
            </div>
            <div className="text-xs">{tx.memo}</div>
          </div>
        );
      })}
    </div>
  );
};
