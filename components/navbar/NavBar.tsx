import Container from "../global/Container";
import CartButton from "./CartButton";
import DarkMode from "./DarkMode";
import LinksDropdown from "./LinksDropdown";
import Logo from "./Logo";
import NavSearch from "./NavSearch";
import { Suspense } from "react";

function NavBar() {
  return (
    <nav className="bg-background border-b border-muted shadow-sm sticky top-0 z-50">
      <Container className="flex items-center justify-between py-6 px-4 md:px-8">
        <Logo />
        <div className="hidden md:flex items-center gap-6">
          <Suspense>
            <NavSearch />
          </Suspense>
        </div>
        <div className="flex items-center gap-4">
          <DarkMode />
          <CartButton />
          <LinksDropdown />
        </div>
      </Container>
      <div className="flex md:hidden justify-center mt-3">
        <Suspense>
          <NavSearch />
        </Suspense>
      </div>
    </nav>
  );
}

export default NavBar;
