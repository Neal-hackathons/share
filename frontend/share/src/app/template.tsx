'use client'

import Link from "next/link"
import {
  Menu,
  Search,
  Home,
  Radio,
  TrendingUp,
  Heart,
  Globe,
} from "lucide-react"

import { Button } from "@/components/ui/button"

import { Badge } from "@/components/ui/badge"
import { Input } from "@/components/ui/input"
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet"
import { usePathname } from 'next/navigation'
import ConnectButton from "@/components/web3/ConnectButton"



export default function template({ children }: { children: React.ReactNode }) {

    const pathname = usePathname()
    const isCreator = pathname.includes('creator')
    console.log(isCreator)
    return (

    !isCreator ?
      <div className="flex min-h-screen w-full flex-col">
        <header className="sticky top-0 flex h-16 items-center gap-4 border-b bg-background px-4 md:px-6">
          <nav className="hidden flex-col gap-6 text-lg font-medium md:flex md:flex-row md:items-center md:gap-5 md:text-tiny lg:gap-6 text-nowrap">
            <Link
              href="/"
              className="flex items-center gap-2 text-xl font-semibold md:text-lg"
            >
              <span>Share</span>
            </Link>
            <Link
              href="/user/tracks"
              className="text-muted-foreground transition-colors hover:text-foreground"
            >
              Mes Tracks
            </Link>
            <Link
              href="/community"
              className="text-muted-foreground transition-colors hover:text-foreground"
            >
              Communauté
            </Link>
            <Link
              href="/blog"
              className="text-muted-foreground transition-colors hover:text-foreground"
            >
              Blog
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
                  placeholder="Rechercher un track..."
                  className="pl-8 sm:w-[300px] md:w-[200px] lg:w-[300px]"
                />
              </div>
            </form>
            <ConnectButton/>
          </div>
        </header>


        <div className="grid min-h-screen w-full md:grid-cols-[220px_1fr] lg:grid-cols-[280px_1fr]">
          <div className="grid min-h-screen w-full md:grid-cols-[220px_1fr] lg:grid-cols-[280px_1fr]">
            <div className="hidden border-r bg-muted/40 md:block">
              <div className="flex h-full max-h-screen flex-col gap-2">
                <div className="flex-1">
                  <nav className="grid gap-4 items-start px-2 py-6 text-base font-medium lg:px-4">
                    <Link
                      href="#"
                      className="flex items-center gap-3 rounded-lg px-3 py-2 text-muted-foreground transition-all hover:text-primary"
                    >
                      <Home className="h-4 w-4" />
                      Accueil
                    </Link>
                    <Link
                      href="#"
                      className="flex items-center gap-3 rounded-lg px-3 py-2 text-muted-foreground transition-all hover:text-primary"
                    >
                      <Globe className="h-4 w-4"/>
                      Explorer
                    </Link>
                    <Link
                      href="#"
                      className="flex items-center gap-3 rounded-lg bg-muted px-3 py-2 text-primary transition-all hover:text-primary"
                    >
                      <Heart  className="h-4 w-4"/>
                      Likes
                    </Link>
                    <Link
                      href="#"
                      className="flex items-center gap-3 rounded-lg px-3 py-2 text-muted-foreground transition-all hover:text-primary"
                    >
                    <TrendingUp className="h-4 w-4"/>
                      Top trends
                    </Link>
                    <Link
                      href="#"
                      className="flex items-center gap-3 rounded-lg px-3 py-2 text-muted-foreground transition-all hover:text-primary"
                    >
                      <Radio className="h-4 w-4" />
                      Radio 
                    </Link>
                  </nav>
                </div>
              </div>
            </div>
          </div>


          <div className="flex flex-col">
            <main className="grid gap-4 p-4 lg:gap-6 lg:p-6 ">
              {children}
            </main>
          </div>
        </div>
      </div>
      : <>{children}</>
    )
  }