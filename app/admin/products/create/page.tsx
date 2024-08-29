import { SubmitButton } from "@/components/form/Buttons";
import CheckboxInput from "@/components/form/CheckboxInput";
import FormContainer from "@/components/form/FormContainer";
import FormInput from "@/components/form/FormInput";
import ImageInput from "@/components/form/ImageInput";
import PriceInput from "@/components/form/PriceInput";
import TextAreaInput from "@/components/form/TextAreaInput";
import { createProductAction } from "@/utils/actions";
import { faker } from "@faker-js/faker";

function CreateProducts() {
  const name = faker.commerce.productName();
  const company = faker.company.name();
  const description = faker.lorem.paragraph({ min: 10, max: 12 });

  return (
    <section className="p-6 bg-background text-foreground rounded-lg shadow-md">
      <h1 className="text-2xl font-bold mb-6">Create Product</h1>
      <div className="bg-card p-6 rounded-lg">
        <FormContainer action={createProductAction}>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
            <FormInput 
              type="text" 
              name="name" 
              defaultValue={name} 
              label="Product Name" 
            />
            <FormInput 
              type="text"
              name="company"
              label="Company"
              defaultValue={company}
            />
            <PriceInput />
            <ImageInput />
          </div>
          <TextAreaInput 
            name="description"
            labelText="Product Description"
            defaultValue={description}
          />
          <div className="flex items-center space-x-4 my-6">
            <CheckboxInput 
              name="featured"
              label="Featured"
            />
          </div>
          <SubmitButton text="Create Product" className="w-full" />
        </FormContainer>
      </div>
    </section>
  );
}

export default CreateProducts;
