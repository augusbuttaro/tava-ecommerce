import SectionTitle from "@/components/global/SectionTitle";
import ProductsGrid from "@/components/products/ProductsGrid";
import { fetchUserFavorites } from "@/utils/actions";

async function Favorites() {
  const favorites = await fetchUserFavorites();

  if (favorites.length === 0) 
    return (
      <section className="bg-background-dark rounded-lg shadow-md p-6 w-4/5 mx-auto mt-16">
        <SectionTitle 
          text="You have no favorites yet" 
          className="text-center text-2xl font-semibold text-muted-foreground mb-6"
        />
      </section>
    );

  return (
    <section className="bg-background-dark rounded-lg shadow-md p-6 w-4/5 mx-auto mt-16">
      <SectionTitle 
        text="Favorites" 
        className="text-3xl font-semibold text-primary-dark border-b border-muted pb-4 mb-6"
      />
      <ProductsGrid 
        products={favorites.map((favorite) => favorite.product)} 
        className="gap-6"
      />
    </section>
  );
}

export default Favorites;
