import { accountState } from "@/models/account";
import { observer } from "mobx-react-lite";
import QRCode from "react-qr-code";

import { Card, CardContent } from "@/components/ui/card";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
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
          align: "start",
          loop: true,
        }}
        className="w-full max-w-sm m-auto"
      >
        <CarouselContent>
          {addresses.map((address) => (
            <CarouselItem key={address.t} className="">
              <div className="p-1">
                <Card>
                  <CardContent className="flex flex-col aspect-square items-center justify-center p-6">
                    <div style={{ background: "white", padding: "16px" }}>
                      <QRCode value={address.a} />
                    </div>
                    <div>{address.t}</div>
                    <Textarea className="md:text-xs text-xs">{address.a}</Textarea>
                  </CardContent>
                </Card>
              </div>
            </CarouselItem>
          ))}
        </CarouselContent>
        <CarouselPrevious />
        <CarouselNext />
      </Carousel>
      <div className="pt-4">{balance}</div>
    </div>
  );
});
