import React from "react";
import { Separator } from "@/components/ui/separator";
import Sidebar from "./Sidebar";

function DashboardLayout({ children }: { children: React.ReactNode }) {
  return (
    <div className="flex min-h-screen bg-background text-foreground">
      <Sidebar />
      <main className="flex-1 p-6">
        <h1 className="text-3xl font-bold">Dashboard</h1>
        <Separator className="my-4" />
        <div className="bg-card p-6 rounded-lg shadow-lg">
          {children}
        </div>
      </main>
    </div>
  );
}

export default DashboardLayout;
