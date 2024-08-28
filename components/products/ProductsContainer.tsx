import ProductsGrid from './ProductsGrid';
import ProductsList from './ProductsList';
import { FiList } from 'react-icons/fi';
import { RiGridFill } from 'react-icons/ri';
import { Button } from '@/components/ui/button';
import { Separator } from '@/components/ui/separator';
import { fetchAllProducts } from '@/utils/actions';
import Link from 'next/link';

async function ProductsContainer({ layout, search }: { layout: string; search: string }) {
  const products = await fetchAllProducts({ search });
  const totalProducts = products.length;
  const searchTerm = search ? `&search=${search}` : '';

  return (
    <section className="container mx-auto px-4 py-8">
      <header className="flex flex-col sm:flex-row items-center justify-between mb-8">
        <h2 className="text-3xl font-semibold text-foreground mb-4 sm:mb-0">
          {totalProducts} {totalProducts === 1 ? 'Product' : 'Products'} Found
        </h2>
        <div className="flex items-center gap-4">
          <Button
            variant={layout === 'grid' ? 'default' : 'outline'}
            asChild
            size="icon"
            className="w-12 h-12 flex justify-center items-center"
          >
            <Link href={`/products?layout=grid${searchTerm}`}>
              <RiGridFill className="w-6 h-6" />
            </Link>
          </Button>
          <Button
            variant={layout === 'list' ? 'default' : 'outline'}
            asChild
            size="icon"
            className="w-12 h-12 flex justify-center items-center"
          >
            <Link href={`/products?layout=list${searchTerm}`}>
              <FiList className="w-6 h-6" />
            </Link>
          </Button>
        </div>
      </header>

      <Separator className="my-8" />

      <div className="w-full">
        {totalProducts === 0 ? (
          <div className="text-center text-xl font-medium text-muted-foreground">
            Sorry, no products matched your search...
          </div>
        ) : layout === 'grid' ? (
          <ProductsGrid products={products} className="w-full mx-auto" />
        ) : (
          <ProductsList products={products} />
        )}
      </div>
    </section>
  );
}

export default ProductsContainer;
