import { accountState } from "@/models/account";
import { observer } from "mobx-react-lite";
import QRCode from "react-qr-code";

import { Card, CardContent } from "@/components/ui/card";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
} from "@/components/ui/carousel";
import { Textarea } from "@/components/ui/textarea";

export const Balance: React.FC<{}> = observer(() => {
  const {
    account: { name, height, balance, addresses },
  } = accountState;

  return (
    <div className="flex flex-col items-center max-w-md m-auto">
      <div className="text-lg">{name}</div>
      <div className="text-sm">{height}</div>
      <Carousel
        opts={{
          align: "center",
          loop: true,
        }}
        className="w-full max-w-xs m-auto"
      >
        <CarouselContent>
          {addresses.map((address) => (
            <CarouselItem key={address.t} className="">
              <div className="p-1 max-w-xs">
                <Card>
                  <CardContent className="flex flex-col aspect-square items-center justify-center p-6">
                    <div style={{ background: "white", padding: "16px" }}>
                      <QRCode value={address.a} />
                    </div>
                    <div>{address.t}</div>
                    <Textarea
                      className="md:text-xs text-xs resize-none"
                      readOnly
                      rows={7}
                      value={address.a}
                    />
                  </CardContent>
                </Card>
              </div>
            </CarouselItem>
          ))}
        </CarouselContent>
      </Carousel>
      <div className="pt-2 text-sm">
        Slide left/right to show your other addresses
      </div>
      <div className="pt-4"><Amount zats={balance}/></div>
    </div>
  );
});

export const Amount: React.FC<{ zats: number }> = ({ zats }) => {
  const mzec = Math.floor(zats / 100000);
  const sats = (zats % 100000).toString();
  return (
    <div>
      <span className="text-4xl">{mzec / 1000}</span>
      <span className="text-xs">{sats.padStart(5, "0")}</span>
    </div>
  );
};
