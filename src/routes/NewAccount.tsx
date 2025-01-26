import { Form } from "@/components/ui/form"
import { zodResolver } from "@hookform/resolvers/zod"
import { useForm } from "react-hook-form"
import { z } from "zod"

const formSchema = z.object({
  name: z.string(),
  description: z.string(),
  birth: z.number(),
  key: z.string(),
  index: z.number(),
  transparent: z.boolean(),
  sapling: z.boolean(),
  orchard: z.boolean(),
  use_any_address_index: z.boolean(),
})


export const NewAccount: React.FC<{}> = () => {
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      name: "",
      description: "",
      index: 0,
      use_any_address_index: false,
    },
  })

  return (
    <Form {...form}>
      <form></form>
    </Form>
  )
}
