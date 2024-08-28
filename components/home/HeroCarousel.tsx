import hero1 from '@/public/images/Hero1.jpg'
import hero2 from '@/public/images/Hero2.jpg'
import hero3 from '@/public/images/Hero3.jpg'
import hero4 from '@/public/images/Hero4.jpg'
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from '../ui/carousel'
import { cn } from '@/lib/utils'
import Image from 'next/image'

const carouselImages = [hero1, hero2, hero3, hero4]

function HeroCarousel({ className }: { className?: string }) {
  return (
    <div className={cn(className, "relative w-full h-full")}>
      <Carousel className="relative w-full h-full">
        <CarouselContent className="w-full h-full">
          {carouselImages.map((image, index) => (
            <CarouselItem key={index} className="relative w-full h-full flex items-center justify-center pl-8">
              <Image 
                src={image} 
                alt={`hero-${index}`} 
                layout="responsive" 
                className="object-cover w-full" 
              />
            </CarouselItem>
          ))}
        </CarouselContent>
        <CarouselPrevious className="absolute left-4 top-1/2 transform -translate-y-1/2 z-10 rounded-full p-2" />
        <CarouselNext className="absolute right-4 top-1/2 transform -translate-y-1/2 z-10 rounded-full p-2" />
      </Carousel>
    </div>
  )
}

export default HeroCarousel;
