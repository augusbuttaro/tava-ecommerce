import { Label } from "@/components/ui/label";
import { Input } from "@/components/ui/input";

const name = "price";

type FormInputNumberProps = {
  defaultValue?: number;
};

function PriceInput({ defaultValue }: FormInputNumberProps) {
  return (
    <div className="mb-4">
      <Label htmlFor={name} className="capitalize">
        Price ($)
      </Label>
      <Input
        name={name}
        id={name}
        type="number"
        min={0}
        defaultValue={defaultValue || 100}
        required
        className="mt-2 border-muted focus:ring-primary"
      />
    </div>
  );
}

export default PriceInput;
