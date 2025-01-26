import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Checkbox } from "@/components/ui/checkbox";
import {
  Form,
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { Switch } from "@/components/ui/switch";
import { Textarea } from "@/components/ui/textarea";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { z } from "zod";

const formSchema = z.object({
  name: z.string(),
  description: z.string(),
  birth: z.number(),
  restore: z.boolean(),
  key: z.string(),
  index: z.number(),
  transparent: z.boolean(),
  sapling: z.boolean(),
  orchard: z.boolean(),
  use_any_address_index: z.boolean(),
});

export const NewAccount: React.FC<{}> = () => {
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      name: "",
      description: "",
      index: 0,
      use_any_address_index: false,
    },
  });

  const onSubmit = (values: z.infer<typeof formSchema>) => {
    console.log(values);
  };

  const { watch } = form;
  const restoreField = watch("restore");

  return (
    <div className="max-w-md p-8 m-auto">
      <Card className="p-4">
        <Form {...form}>
          <form onSubmit={form.handleSubmit(onSubmit)}>
            <FormField
              control={form.control}
              name="name"
              render={({ field }) => (
                <FormItem className="py-2">
                  <FormLabel>Account Name</FormLabel>
                  <FormControl>
                    <Input {...field} />
                  </FormControl>
                </FormItem>
              )}
            />
            <FormField
              control={form.control}
              name="description"
              render={({ field }) => (
                <FormItem className="py-2">
                  <FormLabel>Description</FormLabel>
                  <FormControl>
                    <Textarea rows={2} {...field} />
                  </FormControl>
                </FormItem>
              )}
            />
            <FormField
              control={form.control}
              name="transparent"
              render={({ field }) => (
                <FormItem className="flex flex-row items-start space-x-3 space-y-0 rounded-md border p-4 shadow">
                  <FormControl>
                    <Checkbox
                      checked={field.value}
                      onCheckedChange={field.onChange}
                    />
                  </FormControl>
                  <div className="space-y-1 leading-none">
                    <FormLabel>
                      Transparent
                    </FormLabel>
                    <FormDescription>
                      This account can receive transparent funds
                    </FormDescription>
                  </div>
                </FormItem>
              )}
            />
            <FormField
              control={form.control}
              name="sapling"
              render={({ field }) => (
                <FormItem className="flex flex-row items-start space-x-3 space-y-0 rounded-md border p-4 shadow">
                  <FormControl>
                    <Checkbox
                      checked={field.value}
                      onCheckedChange={field.onChange}
                    />
                  </FormControl>
                  <div className="space-y-1 leading-none">
                    <FormLabel>
                      Sapling
                    </FormLabel>
                    <FormDescription>
                      This account can receive sapling funds
                    </FormDescription>
                  </div>
                </FormItem>
              )}
            />
            <FormField
              control={form.control}
              name="orchard"
              render={({ field }) => (
                <FormItem className="flex flex-row items-start space-x-3 space-y-0 rounded-md border p-4 shadow">
                  <FormControl>
                    <Checkbox
                      checked={field.value}
                      onCheckedChange={field.onChange}
                    />
                  </FormControl>
                  <div className="space-y-1 leading-none">
                    <FormLabel>
                      Orchard
                    </FormLabel>
                    <FormDescription>
                      This account can receive orchard funds
                    </FormDescription>
                  </div>
                </FormItem>
              )}
            />
            <FormField
              control={form.control}
              name="use_any_address_index"
              render={({ field }) => (
                <FormItem className="flex flex-row items-start space-x-3 space-y-0 rounded-md border p-4 shadow">
                  <FormControl>
                    <Checkbox
                      checked={field.value}
                      onCheckedChange={field.onChange}
                    />
                  </FormControl>
                  <div className="space-y-1 leading-none">
                    <FormLabel>
                      Use any transparent address index
                    </FormLabel>
                    <FormDescription>
                      When unchecked,
                      indices that do not correspond to a valid sapling diversified
                      index are skipped.
                    </FormDescription>
                  </div>
                </FormItem>
              )}
            />
            <FormField
              control={form.control}
              name="restore"
              render={({ field }) => (
                <FormItem className="flex flex-row items-center justify-between rounded-lg border my-2 p-3 shadow-sm">
                  <div className="space-y-0.5">
                    <FormLabel>Restore</FormLabel>
                    <FormDescription>Are you restoring an old account?</FormDescription>
                  </div>
                  <FormControl>
                    <Switch
                      checked={field.value}
                      onCheckedChange={field.onChange}
                    />
                  </FormControl>
                </FormItem>
              )}
            />
            {restoreField && <FormField
              control={form.control}
              name="key"
              render={({ field }) => (
                <FormItem className="py-2">
                  <FormLabel>Key</FormLabel>
                  <FormControl>
                    <Textarea rows={4} {...field} />
                  </FormControl>
                  <FormDescription>
                    The key can be a seed phrase, a secret key, or a viewing key.
                  </FormDescription>
                </FormItem>
              )}
            />}
            {restoreField && <FormField
              control={form.control}
              name="birth"
              render={({ field }) => (
                <FormItem className="py-2">
                  <FormLabel>Birth Height</FormLabel>
                  <FormControl>
                    <Input type="number" {...field} />
                  </FormControl>
                  <FormDescription>Block Height when the account was created.
                    Specifying the birth height may greatly reduce the synchronization time.
                  </FormDescription>
                </FormItem>
              )}
            />}
            {restoreField && <FormField
              control={form.control}
              name="index"
              render={({ field }) => (
                <FormItem className="py-2">
                  <FormLabel>Account Index</FormLabel>
                  <FormControl>
                    <Input type="number" {...field} />
                  </FormControl>
                  <FormDescription>Index of the account in the ZIP-32 derivation path</FormDescription>
                </FormItem>
              )}
            />}
            <Button type="submit">Submit</Button>
          </form>
        </Form>
      </Card>
    </div>
  );
};
