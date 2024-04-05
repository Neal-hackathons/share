'use client'

import MusicCard from '@/components/musicCard'
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"
import { ScrollArea, ScrollBar } from "@/components/ui/scroll-area"
 

export default function Page() {
  return (
    <Card className="sm:col-span-2">
        <CardHeader className="pb-3">
          <CardTitle >Nouveautés </CardTitle>
          <CardDescription className="w-full text-balance leading-relaxed">
            <div className='flex gap-6'>
            <MusicCard/>
            <MusicCard/>
            <MusicCard/>
            </div>
          </CardDescription>
        </CardHeader>
        <CardFooter>
        </CardFooter>
    </Card>
  )
}

