import {
  Table,
  TableBody,
  TableCaption,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { mock_accounts } from "@/mock_data";
import { useState } from "react";
import {
  DndContext,
  closestCenter,
  PointerSensor,
  useSensor,
  useSensors,
  DragEndEvent,
} from "@dnd-kit/core";
import { arrayMove, SortableContext, useSortable } from "@dnd-kit/sortable";
import { CSS } from "@dnd-kit/utilities";
import { Account } from "@/types";

export const AccountList: React.FC<{}> = () => {
  const [data, setData] = useState(mock_accounts);
  const sensors = useSensors(useSensor(PointerSensor));

  const handleDragEnd = (event: DragEndEvent) => {
    const { active, over } = event;

    if (over != null && active.id !== over.id) {
      setData((items) => {
        const oldIndex = items.findIndex((item) => item.id === active.id);
        const newIndex = items.findIndex((item) => item.id === over.id);
        // TODO: Send new order to BackEnd
        return arrayMove(items, oldIndex, newIndex);
      });
    }
  };

  return (
    <DndContext
      sensors={sensors}
      collisionDetection={closestCenter}
      onDragEnd={handleDragEnd}
    >
      <SortableContext items={data.map((item) => item.id)}>
        <Table>
          <TableCaption>
            <p>A list of your accounts. Drag & Drop to reorder.</p>
            <p>Tap to select. Long Tap to edit.</p>
          </TableCaption>
          <TableHeader>
            <TableRow>
              <TableHead className="w-[100px]">Name</TableHead>
              <TableHead className="hidden sm:table-cell">
                Description
              </TableHead>
              <TableHead className="hidden sm:table-cell">
                Birth Height
              </TableHead>
              <TableHead className="hidden sm:table-cell">
                Sync Height
              </TableHead>
              <TableHead className="text-right">Amount</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {data.map((account) => (
              <SortableRow key={account.id} id={account.id} account={account} />
            ))}
          </TableBody>
        </Table>
      </SortableContext>
    </DndContext>
  );
};

const SortableRow: React.FC<{ id: number; account: Account }> = ({
  id,
  account,
}) => {
  const { attributes, listeners, setNodeRef, transform, transition } =
    useSortable({ id });

  const style = {
    transform: CSS.Transform.toString(transform),
    transition,
  };

  return (
    <TableRow
      ref={setNodeRef}
      style={style}
      {...attributes}
      {...listeners}
      className="cursor-move"
    >
      <TableCell className="font-medium">{account.name}</TableCell>
      <TableCell className="hidden sm:table-cell">
        {account.description}
      </TableCell>
      <TableCell className="hidden sm:table-cell">{account.birth}</TableCell>
      <TableCell className="hidden sm:table-cell">{account.height}</TableCell>
      <TableCell className="text-right">{account.balance}</TableCell>
    </TableRow>
  );
};
