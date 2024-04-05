'use client'

import * as React from "react"

import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"
import { CirclePlay } from 'lucide-react';
import Image from "next/image"

export default function MusicCard() {

    const [hover, setHover] = React.useState(false)
  return (
    <Card className="p-2" style={{width: '250px'}} >
        <CardContent className=" relative w-full " style={{height: '200px', cursor: 'pointer'}} onMouseEnter={() => setHover(true)} onMouseLeave={() => setHover(false)}>   
            <Image src='/cover.jpeg' objectFit="cover" fill />
            <div className="absolute left-0 w-full h-full flex items-center justify-center" style={{display: hover ? 'flex' : 'none'}}>
                <CirclePlay  color="#EA580C" className="h-10 w-10"/>
            </div>
        </CardContent>
      <CardHeader className="p-0 mt-2">
        <CardTitle className="text-lg ">Tracks title</CardTitle>
        <CardDescription className="text-wrap">Description a propos de votre piste.</CardDescription>
      </CardHeader>
      <CardFooter className="flex justify-between">

      </CardFooter>
    </Card>
  )
}
