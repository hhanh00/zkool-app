import { Table, TableBody, TableCaption, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table"
import { mock_accounts } from "@/mock_data"

export const AccountList: React.FC<{}> = () => {
  return <div>
    <Table>
    <TableCaption>A list of your accounts.</TableCaption>
      <TableHeader>
        <TableRow>
          <TableHead className="w-[100px]">Name</TableHead>
          <TableHead className="hidden sm:table-cell">Description</TableHead>
          <TableHead className="hidden sm:table-cell">Birth Height</TableHead>
          <TableHead className="hidden sm:table-cell">Sync Height</TableHead>
          <TableHead className="text-right">Amount</TableHead>
        </TableRow>
      </TableHeader>
      <TableBody>
        {mock_accounts.map((acount) => (
          <TableRow key={acount.id}>
            <TableCell className="font-medium">{acount.name}</TableCell>
            <TableCell className="hidden sm:table-cell">{acount.description}</TableCell>
            <TableCell className="hidden sm:table-cell">{acount.birth}</TableCell>
            <TableCell className="hidden sm:table-cell">{acount.height}</TableCell>
            <TableCell className="text-right">{acount.balance}</TableCell>
          </TableRow>
        ))}
      </TableBody>
    </Table>
  </div>
}
