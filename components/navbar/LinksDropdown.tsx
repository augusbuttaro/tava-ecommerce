import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuTrigger, DropdownMenuSeparator } from '../ui/dropdown-menu';
import { FiMenu } from 'react-icons/fi';
import Link from 'next/link';
import { Button } from '../ui/button';
import { links } from '@/utils/links';

function LinksDropdown() {
  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Button variant="outline" className="flex transition-transform transform hover:scale-105">
          <FiMenu className="size-6" />
        </Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent 
        className="w-40 origin-top-left animate-slide-down" 
        align="end" 
        sideOffset={10}
      >
        {links.map((link) => {
          return (
            <DropdownMenuItem key={link.href}>
              <Link href={link.href} className="capitalize w-full px-2 py-1">
                {link.label}
              </Link>
            </DropdownMenuItem>
          );
        })}
      </DropdownMenuContent>
    </DropdownMenu>
  );
}

export default LinksDropdown;
