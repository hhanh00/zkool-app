import { cn } from "@/lib/utils";
import { Note, Tx } from "@/types";
import dayjs from "dayjs";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "./accordion";
import BigNumber from "bignumber.js";

type TransactionProps = React.HTMLAttributes<HTMLDivElement> & {
  tx: Tx;
};

export const p1 = (p: string) => p.substring(0, 32);
export const p2 = (p: string) => p.substring(32, 64);
export const v = (v: number) => {
  const satoshisBN = new BigNumber(v);
  const divisor = new BigNumber(100000000);
  return satoshisBN.dividedBy(divisor).toString();
}
export const dateOf = (ts: number) => dayjs(ts * 1000).format("YYYY-MM-DD HH:mm:ss");

export const Transaction: React.FC<TransactionProps> = ({
  tx,
  className,
  ...props
}) => {
  const date = dateOf(tx.timestamp);

  return (
    <div
      className="m-auto max-w-sm flex flex-col p-1 border rounded border-amber-500"
      {...props}
    >
      <div className={cn("flex p-2", className)}>
        <div className="flex flex-auto flex-col items-center">
          <div className="text-base text-amber-600">ID</div>
          <div className="flex text-sm font-mono">{tx.id}</div>
        </div>
        <div className="flex flex-auto flex-col items-center">
          <div className="text-base text-amber-600">Height</div>
          <div className="flex text-sm font-mono">{tx.height}</div>
        </div>
      </div>
      <div className="flex flex-auto justify-between">
        <div className="text-amber-600">TX</div>
        <div className="self-end text-xs font-mono">{p1(tx.txid)}</div>
      </div>
      <div className="self-end text-right text-xs font-mono">
        {p2(tx.txid)}
      </div>
      <div className="flex justify-between">
        <div className="text-amber-600">Date/Time</div>
        <div>{date}</div>
      </div>
      <div className="text-amber-600">Receiver/Address</div>
      <p className="text-sm font-semibold self-end break-all">{tx.receiver}</p>
      <div className="flex justify-between">
        <div className="text-amber-600">Amount</div>
        <div className="font-bold">{v(tx.value)} ZEC</div>
      </div>
      <div className="text-amber-600">Memo</div>
      <div className="text-sm">{tx.memo}</div>
      <Accordion type="multiple" className="w-full">
        <AccordionItem value="transparent">
          <AccordionTrigger className="text-base text-amber-600">
            Transparent Bundle
          </AccordionTrigger>
          <AccordionContent asChild>
            <div className="text-amber-600">Inputs</div>
            <div className="flex flex-col p-1 gap-y-1">
              {tx.transparent_bundle.inputs.map((i) => (
                <div className="flex flex-col border p-1" key={i.id}>
                  <div className="flex flex-auto justify-between">
                    <div className="text-amber-600">Address</div>
                    <div className="self-end text-xs">{i.address}</div>
                  </div>
                  <div className="flex flex-auto justify-between">
                    <div className="text-amber-600">TX</div>
                    <div className="self-end text-xs font-mono">
                      {p1(i.txid)}
                    </div>
                  </div>
                  <div className="self-end text-right text-xs font-mono">
                    {p2(i.txid)}
                  </div>
                  <div className="flex flex-auto justify-between">
                    <div className="text-amber-600">Vout</div>
                    <div className="self-end text-xs">{i.vout}</div>
                  </div>
                  <div className="flex flex-auto justify-between">
                    <div className="text-amber-600">Amount</div>
                    <div className="self-end text-xs">{v(i.value)} ZEC</div>
                  </div>
                </div>
              ))}
            </div>
            <div className="text-amber-600">Outputs</div>
            <div className="flex flex-col p-1 gap-y-1">
              {tx.transparent_bundle.outputs.map((o) => (
                <div className="flex flex-col border p-1" key={o.id}>
                  <div className="flex flex-auto justify-between">
                    <div className="text-amber-600">Address</div>
                    <div className="self-end text-xs">{o.address}</div>
                  </div>
                  <div className="flex flex-auto justify-between">
                    <div className="text-amber-600">Amount</div>
                    <div className="self-end text-xs">{v(o.value)} ZEC</div>
                  </div>
                </div>
              ))}
            </div>
          </AccordionContent>
        </AccordionItem>
        <AccordionItem value="sapling">
          <AccordionTrigger className="text-base text-amber-600">
            Sapling Bundle
          </AccordionTrigger>
          <AccordionContent asChild>
            <div className="text-amber-600">Inputs</div>
            <div className="flex flex-col p-1 gap-y-1">
              {tx.sapling_bundle.inputs.map((i) => (
                <div className="flex flex-col border p-1" key={i.nf}>
                  <div className="flex flex-auto justify-between">
                    <div className="text-amber-600">Nullifier</div>
                    <div className="self-end text-xs font-mono">
                      {p1(i.nf)}
                    </div>
                  </div>
                  <div className="self-end text-right text-xs font-mono">
                    {p2(i.nf)}
                  </div>
                  {i.note_type == "Note" && <DisplayNote note={i} />}
                </div>
              ))}
            </div>
            <div className="text-amber-600">Outputs</div>
            <div className="flex flex-col p-1 gap-y-1">
              {tx.sapling_bundle.outputs.map((o) => (
                <div className="flex flex-col border p-1" key={o.cmx}>
                  <div className="flex flex-auto justify-between">
                    <div className="text-amber-600">Commitment</div>
                    <div className="self-end text-xs font-mono">
                      {p1(o.cmx)}
                    </div>
                  </div>
                  <div className="self-end text-right text-xs font-mono">
                    {p2(o.cmx)}
                  </div>
                  {o.note_type == "Note" && <DisplayNote note={o} />}
                </div>
              ))}
            </div>
          </AccordionContent>
        </AccordionItem>
        <AccordionItem value="orchard">
          <AccordionTrigger className="text-base text-amber-600">
            Orchard Bundle
          </AccordionTrigger>
          <AccordionContent asChild>
            <div className="text-amber-600">Inputs</div>
            <div className="flex flex-col p-1 gap-y-1">
              {tx.orchard_bundle.inputs.map((i) => (
                <div className="flex flex-col border p-1" key={i.nf}>
                  <div className="flex flex-auto justify-between">
                    <div className="text-amber-600">Nullifier</div>
                    <div className="self-end text-xs font-mono">
                      {p1(i.nf)}
                    </div>
                  </div>
                  <div className="self-end text-right text-xs font-mono">
                    {p2(i.nf)}
                  </div>
                  {i.note_type == "Note" && <DisplayNote note={i} />}
                </div>
              ))}
            </div>
            <div className="text-amber-600">Outputs</div>
            <div className="flex flex-col p-1 gap-y-1">
              {tx.orchard_bundle.outputs.map((o) => (
                <div className="flex flex-col border p-1" key={o.cmx}>
                  <div className="flex flex-auto justify-between">
                    <div className="text-amber-600">Commitment</div>
                    <div className="self-end text-xs font-mono">
                      {p1(o.cmx)}
                    </div>
                  </div>
                  <div className="self-end text-right text-xs font-mono">
                    {p2(o.cmx)}
                  </div>
                  {o.note_type == "Note" && <DisplayNote note={o} />}
                </div>
              ))}
            </div>
          </AccordionContent>
        </AccordionItem>
      </Accordion>
    </div>
  );
};

const DisplayNote: React.FC<{ note: Note }> = ({ note }) => {
  return (
    <>
      <div className="text-amber-600">Address</div>
      <div className="self-end text-xs break-all">{note.address}</div>
      <div className="flex flex-auto justify-between">
        <div className="text-amber-600">Amount</div>
        <div className="self-end text-xs">{v(note.value)} ZEC</div>
      </div>
      <div className="text-amber-600">Memo</div>
      <div className="text-sm">{note.memo}</div>
    </>
  );
};
