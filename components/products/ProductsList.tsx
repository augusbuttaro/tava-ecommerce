import { formatCurrency } from '@/utils/format';
import Link from 'next/link';
import { Card, CardContent } from '@/components/ui/card';
import { Product } from '@prisma/client';
import Image from 'next/image';
import FavoriteToggleBtn from './FavoriteToggleBtn';

function ProductsList({ products }: { products: Product[] }) {
  return (
    <div className="space-y-6 p-4">
      {products.map((product) => {
        const { name, price, image, company } = product;
        const dollarsAmount = formatCurrency(price);
        const productId = product.id;

        return (
          <article key={productId} className="group relative flex items-center rounded-lg overflow-hidden shadow-lg transition-transform transform hover:scale-105 hover:shadow-xl">
            <Link href={`/products/${productId}`} className="flex flex-grow">
              <Card className="flex flex-grow items-center overflow-hidden">
                <div className="relative w-1/3 h-48 md:h-64 overflow-hidden">
                  <Image
                    src={image}
                    alt={name}
                    fill
                    sizes="(max-width:768px) 100vw, (max-width:1200px) 50vw, 33vw"
                    priority
                    className="object-cover w-full h-full transform transition-transform duration-500 group-hover:scale-110"
                  />
                </div>
                <CardContent className="flex flex-col justify-between p-4 w-2/3">
                  <div>
                    <h1 className="capitalize text-xl font-semibold text-foreground mb-1">{name}</h1>
                    <h2 className="text-sm font-medium text-muted-foreground">{company}</h2>
                  </div>
                  <p className="text-primary text-lg font-medium mt-2">{dollarsAmount}</p>
                </CardContent>
              </Card>
            </Link>
            <div className="absolute top-4 right-4 z-10">
              <FavoriteToggleBtn productId={productId} />
            </div>
          </article>
        );
      })}
    </div>
  );
}

export default ProductsList;
