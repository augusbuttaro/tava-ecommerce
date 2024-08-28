import Link from "next/link";
import Image from "next/image";
import tava from "../../public/images/tava.png";
import { Button } from "../ui/button";

function Logo() {
  return (
    <Button variant="ghost" size="icon" asChild className="flex items-center justify-center">
      <Link href="/">
        <Image src={tava} alt="logo" width={40} height={40} />
      </Link>
    </Button>
  );
}

export default Logo;
