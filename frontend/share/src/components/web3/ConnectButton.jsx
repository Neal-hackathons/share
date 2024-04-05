'use client'
import { Button } from "@/components/ui/button"
import { useEffect, useState } from "react"
import { useAccount, useConnect } from 'wagmi'
import { injected } from 'wagmi/connectors'
import { Loader2, CircleUser } from "lucide-react"

import {
    DropdownMenu,
    DropdownMenuContent,
    DropdownMenuItem,
    DropdownMenuLabel,
    DropdownMenuSeparator,
    DropdownMenuTrigger,
  } from "@/components/ui/dropdown-menu"

export default function ConnectButton() {
    const[isConnected, setConnected] = useState(false)

    const[isLoading, setLoading] = useState(false)
    const { connect } = useConnect()
    const account = useAccount()

    useEffect(()=>{

        account.isConnected ? setConnected(true) : setConnected(false)
        account.isConnecting ? setLoading(true) : setLoading(false)

    }, [account])



    
    

    return (
            isConnected ? <ConnectedAvatar/> : 
            !isLoading ? <Button className="text-tiny" onClick={() => connect({ connector: injected() })} >Connexion</Button> :
            <Button disabled><Loader2 className="mr-2 h-4 w-4 animate-spin" /></Button>
    )
}

const ConnectedAvatar = () => {

    return ( 
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
          <DropdownMenuItem>Réglage</DropdownMenuItem>
          <DropdownMenuItem>Support</DropdownMenuItem>
          <DropdownMenuSeparator />
          <DropdownMenuItem>Déconnexion</DropdownMenuItem>
        </DropdownMenuContent>
      </DropdownMenu>
    )
}
