'use client';

import React from 'react';
import { adminLinks } from '@/utils/links';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { Button } from '@/components/ui/button';
import { cn } from '@/lib/utils';

function Sidebar() {
  const pathname = usePathname();

  return (
    <aside className="xl:w-64 bg-muted text-muted-foreground p-2 lg:p-6">
      <nav className="flex lg:flex-col xl:text-left items-center gap-2">
        {adminLinks.map((link) => {
          const isActivePage = pathname === link.href;
          return (
            <Button
              asChild
              variant={isActivePage ? 'secondary' : 'outline'}
              key={link.href}
              className={cn(
                "w-full xl:justify-start text-sm",
                isActivePage ? "bg-primary text-primary-foreground hover:text-secondary-foreground" : ""
              )}
            >
              <Link href={link.href} className="capitalize">
                {link.label}
              </Link>
            </Button>
          );
        })}
      </nav>
    </aside>
  );
}

export default Sidebar;
