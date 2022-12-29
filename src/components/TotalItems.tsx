interface TotalItemsProps {
  numberOfItems: number;
}

const totalItems: string = "Total Items:";

export default function TotalItems({ numberOfItems }: TotalItemsProps) {
  return (
    <div className="float-right mb-2">
      {totalItems} <b>{numberOfItems}</b>
    </div>
  );
}
