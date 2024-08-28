import { Button } from "@/components/ui/button"; // Assuming you have a Button component in your UI library
import Link from "next/link";

function AboutPage() {
  return (
    <section className="relative text-foreground py-12 lg:py-24">      
      <div className="relative container mx-auto px-6 lg:px-12">
        {/* Main Heading */}
        <h1 className="text-center text-4xl lg:text-6xl font-extrabold leading-tight mb-8 lg:mb-12 text-primary">
          We Love <span className="bg-primary text-white py-2 px-4 rounded-full">Store</span>
        </h1>

        {/* Description */}
        <p className="text-lg lg:text-xl leading-relaxed max-w-3xl mx-auto text-muted-foreground">
          Discover the passion and commitment that drive us to provide the best products and experiences. At our store, we blend quality with style, ensuring each item meets our high standards. From unique gadgets to fashionable accessories, explore our curated selection and see why we love what we do.
        </p>

        {/* Call to Action Button */}
        <div className="text-center mt-8">
          <Button asChild size="lg" className="bg-primary hover:bg-secondary text-primary-foreground hover:text-secondary-foreground">
            <Link href="/contact">Get in Touch</Link>
          </Button>
        </div>
      </div>
    </section>
  );
}

export default AboutPage;
