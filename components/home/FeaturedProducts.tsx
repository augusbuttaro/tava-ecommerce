import { fetchFeaturedProducts } from "@/utils/actions";
import EmptyList from "../global/EmptyList";
import SectionTitle from "../global/SectionTitle";
import ProductsGrid from "../products/ProductsGrid";

async function FeaturedProducts() {
  const products = await fetchFeaturedProducts();

  if (products.length === 0) return <EmptyList />;

  return (
    <section className="bg-background-dark border border-primary rounded-lg shadow-md w-4/5 mx-auto my-8 p-6">
      <SectionTitle 
        text="Featured Products" 
        className="text-2xl font-semibold text-primary-dark border-b border-muted pb-4 mb-6" 
      />
      <ProductsGrid 
        products={products} 
        className="gap-6" 
      />
    </section>
  );
}

export default FeaturedProducts;
