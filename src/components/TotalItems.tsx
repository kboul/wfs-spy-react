interface TotalItemsProps {
  numberOfItems: number;
}

const totalItems: string = "Total Items:";

export default function TotalItems({ numberOfItems }: TotalItemsProps) {
  return (
    <div className="float-end mb-2">
      {totalItems} <b>{numberOfItems}</b>
    </div>
  );
}
