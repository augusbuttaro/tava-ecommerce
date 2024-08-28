import { formatCurrency } from '@/utils/format';
import { Product } from '@prisma/client';
import Link from 'next/link';
import { Card, CardContent } from '../ui/card';
import Image from 'next/image';
import FavoriteToggleBtn from './FavoriteToggleBtn';
import { cn } from '@/lib/utils';

function ProductsGrid({ products, className }: { products: Product[]; className?: string }) {
  return (
    <div className={cn('grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 p-6', className)}>
      {products.map((product) => {
        const { price, name, image } = product;
        const productId = product.id;
        const dollarsAmount = formatCurrency(price);

        return (
          <article
            key={productId}
            className="group relative flex flex-col justify-between rounded-lg overflow-hidden shadow-lg transition-transform transform hover:scale-105 hover:shadow-xl"
          >
            <Link href={`/products/${productId}`}>
              <Card className="h-full overflow-hidden">
                <div className="relative h-48 sm:h-56 md:h-64 lg:h-72 xl:h-80 overflow-hidden">
                  <Image
                    src={image}
                    alt={name}
                    fill
                    sizes="(max-width:768px) 100vw, (max-width:1200px) 50vw, 33vw"
                    priority
                    className="object-cover w-full h-full transform transition-transform duration-500 group-hover:scale-110"
                  />
                </div>
                <CardContent className="flex flex-col justify-between p-4">
                  <div>
                    <h2 className="capitalize text-lg font-semibold text-foreground mb-2">{name}</h2>
                    <p className="text-primary text-lg font-medium">{dollarsAmount}</p>
                  </div>
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

export default ProductsGrid;
