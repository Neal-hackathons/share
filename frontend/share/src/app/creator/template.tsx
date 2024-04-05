'use client'

import Link from "next/link"
import {
  CircleUser,
  Menu,
  Search,
} from "lucide-react"

import { Button } from "@/components/ui/button"

import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"
import { Input } from "@/components/ui/input"
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet"



export default function template({ children }: { children: React.ReactNode }) {
    return (
      <div className="flex min-h-screen w-full flex-col">
        <header className="sticky top-0 flex h-16 items-center gap-4 border-b bg-background px-4 md:px-6">
          <nav className="hidden flex-col gap-6 text-lg font-medium md:flex md:flex-row md:items-center md:gap-5 md:text-tiny lg:gap-6">
            <Link
              href="/"
              className="flex items-center gap-2 text-xl font-semibold md:text-lg"
            >
              <span>Share</span>
            </Link>
            <Link
              href="/creator"
              className="text-muted-foreground transition-colors hover:text-foreground"
            >
              Dashboard
            </Link>
            <Link
              href="/creator/sales"
              className="text-muted-foreground transition-colors hover:text-foreground"
            >
              Ventes
            </Link>
            <Link
              href="/creator/tracks"
              className="text-muted-foreground transition-colors hover:text-foreground"
            >
              Tracks
            </Link>
            <Link
              href="/creator/analytics"
              className="text-muted-foreground transition-colors hover:text-foreground"
            >
              Analytics
            </Link>
          </nav>

          <Sheet>
            <SheetTrigger asChild>
              <Button
                variant="outline"
                size="icon"
                className="shrink-0 md:hidden"
              >
                <Menu className="h-5 w-5" />
                <span className="sr-only">Toggle navigation menu</span>
              </Button>
            </SheetTrigger>
            <SheetContent side="left">
              <nav className="grid gap-6 text-lg font-medium">
                <Link
                  href="/"
                  className="flex items-center gap-2 text-xl font-semibold"
                >
                  <span >Share</span>
                </Link>
                <Link href="/creator" className="text-muted-foreground hover:text-foreground">
                  Dashboard
                </Link>
                <Link
                  href="/creator/sales"
                  className="text-muted-foreground hover:text-foreground"
                >
                  Ventes
                </Link>
                <Link
                  href="/creator/tracks"
                  className="text-muted-foreground hover:text-foreground"
                >
                  Tracks
                </Link>
                <Link
                  href="/creator/Analytics"
                  className="text-muted-foreground hover:text-foreground"
                >
                  Analytics
                </Link>
              </nav>
            </SheetContent>
          </Sheet>

          <div className="flex w-full items-center gap-4 md:ml-auto md:gap-2 lg:gap-4">
            <form className="ml-auto flex-1 sm:flex-initial">
              <div className="relative">
                <Search className="absolute left-2.5 top-2.5 h-4 w-4 text-muted-foreground" />
                <Input
                  type="search"
                  placeholder="Rechercher un de vos track..."
                  className="pl-8 sm:w-[300px] md:w-[200px] lg:w-[300px]"
                />
              </div>
            </form>
            <DropdownMenu>
              <DropdownMenuTrigger asChild>
                <Button variant="secondary" size="icon" className="rounded-full">
                  <CircleUser className="h-5 w-5" />
                  <span className="sr-only">Toggle user menu</span>
                </Button>
              </DropdownMenuTrigger>
              <DropdownMenuContent align="end">
                <DropdownMenuLabel>0x35...2b0F3</DropdownMenuLabel>
                <DropdownMenuSeparator />
                <DropdownMenuItem><Link href={"/settings"}>Réglage</Link></DropdownMenuItem>
                <DropdownMenuItem>Support</DropdownMenuItem>
                <DropdownMenuSeparator />
                <DropdownMenuItem><Link href={"/"}>Déconnexion</Link></DropdownMenuItem>
              </DropdownMenuContent>
            </DropdownMenu>
          </div>
        </header>


        <main className="flex flex-1 flex-col gap-4 p-4 md:gap-8 md:p-8">
            {children}
        </main>
      </div>
    )
  }