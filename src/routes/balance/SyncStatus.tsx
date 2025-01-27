import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";

import { observer } from "mobx-react-lite";
import { syncState } from "@/models/sync";
import { Progress } from "@/components/ui/progress";
import humanizeDuration from "humanize-duration";

export const SyncStatus = observer(() => {
  const {
    sync: {
      height,
      start,
      latest,
      is_rescan,
      remaining_eta,
      speed,
      downloaded,
      decrypted,
    },
  } = syncState;

  const progress = (100 * (height - start)) / (latest - start);
  const remaining = humanizeDuration(remaining_eta * 1000);
  const status =
    height == latest
      ? "SYNCHRONIZED"
      : is_rescan
      ? "RESCANNING"
      : "CATCHING UP";

  return (
    <Tabs defaultValue="progress" className="max-w-md m-auto py-8">
      <TabsList className="grid w-full grid-cols-2">
        <TabsTrigger value="progress">Progress</TabsTrigger>
        <TabsTrigger value="stats">Stats</TabsTrigger>
      </TabsList>
      <TabsContent value="progress">
        <Card>
          <CardHeader>
            <CardTitle>{`APP ${status}`}</CardTitle>
            <CardDescription>
              Shows the current height vs the latest height, and an estimation
              of the remaining synchronization work.
            </CardDescription>
          </CardHeader>
          <CardContent className="space-y-2">
            <div className="space-y-1">
              <Label htmlFor="name">Current Height</Label>
              <Input readOnly value={height} />
            </div>
            <div className="space-y-1">
              <Label htmlFor="name">Latest Height</Label>
              <Input readOnly value={latest} />
            </div>
            <Progress value={progress} />
            <div className="space-y-1">
              <Label htmlFor="name">Blocks Processed by Second</Label>
              <Input readOnly value={speed} />
            </div>
            <div className="space-y-1">
              <Label htmlFor="name">
                Estimated Remaining Synchronization Time
              </Label>
              <Input readOnly value={remaining} />
            </div>
          </CardContent>
          <CardFooter>
            <Button>Save changes</Button>
          </CardFooter>
        </Card>
      </TabsContent>
      <TabsContent value="stats">
        <Card>
          <CardHeader>
            <CardTitle>Statistics</CardTitle>
            <CardDescription>
              Shows network and protocol statistics
            </CardDescription>
          </CardHeader>
          <CardContent className="space-y-2">
            <div className="space-y-1">
              <Label htmlFor="current">Bytes downloaded</Label>
              <Input readOnly value={downloaded} />
            </div>
            <div className="space-y-1">
              <Label htmlFor="new">Number of notes decrypted</Label>
              <Input readOnly value={decrypted} />
            </div>
          </CardContent>
          <CardFooter>
            <Button>Cancel Sync</Button>
          </CardFooter>
        </Card>
      </TabsContent>
    </Tabs>
  );
});
