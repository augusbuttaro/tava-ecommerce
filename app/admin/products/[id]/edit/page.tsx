import { fetchAdminProductDetails, updateProductAction, updateProductImgAction } from '@/utils/actions';
import FormContainer from '@/components/form/FormContainer';
import FormInput from '@/components/form/FormInput';
import PriceInput from '@/components/form/PriceInput';
import TextAreaInput from '@/components/form/TextAreaInput';
import { SubmitButton } from '@/components/form/Buttons';
import CheckboxInput from '@/components/form/CheckboxInput';
import ImageInputContainer from '@/components/form/ImageInputContainer';

{/* Add products to store */}

async function EditProducts({ params }: { params: { id: string } }) {
  const { id } = params;
  const product = await fetchAdminProductDetails(id);
  const { name, company, description, featured, price } = product;

  return (
    <section className="p-6 bg-background text-foreground rounded-lg shadow-md">
      <h1 className="text-2xl font-bold mb-6">Update Product</h1>
      <div className="bg-card p-6 rounded-lg">
        <ImageInputContainer 
          action={updateProductImgAction} 
          name={name} 
          image={product.image} 
          text="Update Image"
        >
          <input type="hidden" name="id" value={id} />
          <input type="hidden" name="url" value={product.image} />
        </ImageInputContainer>
        <FormContainer action={updateProductAction}>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
            <input type='hidden' name='id' value={id} />  
            <FormInput 
              type="text" 
              name="name" 
              label="Product Name" 
              defaultValue={name} 
            />
            <FormInput 
              type="text" 
              name="company" 
              label="Company" 
              defaultValue={company} 
            />
            <PriceInput defaultValue={price} />
          </div>
          <TextAreaInput
            name="description"
            labelText="Product Description"
            defaultValue={description}
          />
          <div className="flex items-center space-x-4 my-6">
            <CheckboxInput name="featured" label="Featured" defaultChecked={featured} />
          </div>
          <SubmitButton text="Update Product" className="w-full" />
        </FormContainer>
      </div>
    </section>
  );
}

export default EditProducts;
