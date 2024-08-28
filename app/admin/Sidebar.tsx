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
    <aside className="w-64 bg-muted text-muted-foreground p-6 border-r border-border">
      <nav className="flex flex-col space-y-2">
        {adminLinks.map((link) => {
          const isActivePage = pathname === link.href;
          return (
            <Button
              asChild
              variant={isActivePage ? 'secondary' : 'outline'}
              key={link.href}
              className={cn(
                "w-full justify-start text-left",
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
