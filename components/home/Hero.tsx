import Link from "next/link";
import { Button } from "../ui/button";
import HeroCarousel from "./HeroCarousel";

function Hero() {
  return (
    <section className="relative flex flex-col items-center justify-center min-h-[75vh] bg-background w-full max-w-7xl self-center text-foreground overflow-y-hidden">
      {/* Background Image Container */}
      <div className="absolute inset-0">
        <HeroCarousel className="absoluteobject-cover w-full h-full" />
        <div className="absolute inset-0 bg-background opacity-0 dark:opacity-40"></div>
      </div>

      {/* Text Content */}
      <div className="relative z-10  p-6 flex flex-col items-center text-center rounded-lg lg:px-12">
        <h1 className="text-4xl lg:text-5xl font-bold mb-6 leading-tight text-secondary">
          Elevate Your Shopping Experience
        </h1>
        <p className="text-lg lg:text-xl mb-8 max-w-lg lg:max-w-xl text-primary-foreground">
          Explore our curated selection of top products designed to make your shopping journey exceptional. From innovative gadgets to stylish apparel, we have something for everyone. Start discovering today and redefine your retail experience.
        </p>
        <Button asChild size="lg" className="bg-primary hover:bg-secondary text-primary-foreground hover:text-secondary-foreground">
          <Link href="/products">Explore Our Products</Link>
        </Button>
        <div className="absolute inset-0 -z-10 bg-black opacity-50"></div>
      </div>
    </section>
  );
}

export default Hero;
