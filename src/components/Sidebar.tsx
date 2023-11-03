"use client";

import Link from "next/link";

import { Montserrat } from "next/font/google";
import { LayoutDashboard, Coins, Settings } from "lucide-react";

import { cn } from "@/lib/utils";

const montserrat = Montserrat({ weight: "600", subsets: ["latin"] });

const routes = [
  {
    label: "Dashboard",
    icon: LayoutDashboard,
    href: "/dashboard",
  },
  {
    label: "Expenses",
    icon: Coins,
    href: "/expenses",
  },
];

export default function Sidebar() {
  return (
    <div className="space-y-4 py-4 flex flex-col h-full bg-sky-900 text-white">
      <div className="px-3 py-2 flex-1">
        <Link href="/dashboard" className="flex items-center pl-3 mb-14">
          <h1 className={cn("text-2xl font-bold", montserrat.className)}>
            Meran
          </h1>
        </Link>

        <div className="space-y-1">
          {routes.map((route) => (
            <Link
              key={route.href}
              href={route.href}
              className="text-sm group flex p-3 w-full justify-start font-medium cursor-pointer hover:white hover:bg-white/10 rounded-lg transition"
            >
              <div className="flex items-center flex-1">
                <route.icon className="w-5 h-5 mr-3" />
                {route.label}
              </div>
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
}
