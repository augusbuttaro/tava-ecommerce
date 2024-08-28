import BreadCrumbs from '@/components/product-details/BreadCrumbs';
import { fetchSingleProduct } from '@/utils/actions';
import Image from 'next/image';
import { formatCurrency } from '@/utils/format';
import FavoriteToggleButton from '@/components/products/FavoriteToggleBtn';
import AddToCart from '@/components/product-details/AddToCart';
import ProductRating from '@/components/product-details/ProductRating';
import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';

async function SingleProduct({ params }: { params: { id: string } }) {
  const product = await fetchSingleProduct(params.id);
  const { name, image, company, description, price } = product;
  const dollarAmount = formatCurrency(price);

  return (
    <section className="flex flex-col gap-8 mx-auto p-6 w-3/5 min-h-[75vh]">
      <BreadCrumbs name={name} />

      <Card className="flex flex-col md:flex-row gap-8 overflow-hidden shadow-lg rounded-lg flex-grow">
        <div className="relative flex-shrink-0 w-full md:w-1/2 lg:w-2/5 h-96 md:h-auto overflow-hidden">
          <Image
            src={image}
            alt={name}
            fill
            priority
            sizes="(max-width:768px) 100vw, (max-width:1200px) 50vw, 33vw"
            className="transform transition-transform duration-500 object-cover hover:scale-110"
          />
        </div>

        <CardContent className="flex flex-col justify-between p-6 gap-6 flex-grow">
          <div>
            <div className="flex justify-between items-center mb-4">
              <h1 className="text-2xl capitalize font-semibold text-foreground">{name}</h1>
              <FavoriteToggleButton productId={params.id} />
            </div>

            <ProductRating productId={params.id} className='flex items-center gap-2'/>

            <h2 className="text-lg font-medium text-primary mt-4">{company}</h2>
            <p className="text-xl font-semibold text-foreground mt-2">{dollarAmount}</p>

            <p className="text-base text-muted-foreground mt-4 leading-relaxed">{description}</p>
          </div>

          <AddToCart productId={params.id} />
        </CardContent>
      </Card>

      <Button
        variant="outline"
        size="lg"
        className="mx-auto mt-auto"
      >
        Back to Products
      </Button>
    </section>
  );
}

export default SingleProduct;