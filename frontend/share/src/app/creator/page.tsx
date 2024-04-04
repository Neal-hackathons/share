import Link from "next/link"
import {
  ArrowUpRight,
  AudioLines,
  CreditCard,
  DollarSign,
  Heart,
} from "lucide-react"

import {
  Avatar,
  AvatarFallback,
  AvatarImage,
} from "@/components/ui/avatar"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table"

export default function Dashboard() {
  return (
        <>
            <div className="grid gap-4 md:grid-cols-2 md:gap-8 lg:grid-cols-4">
                <Card>
                    <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                    <CardTitle className="text-xs font-medium">
                        Revenu Total
                    </CardTitle>
                    <DollarSign className="h-4 w-4 text-muted-foreground" />
                    </CardHeader>
                    <CardContent>
                    <div className="text-2xl font-bold">4,231.89 AFT</div>
                    <p className="text-sm text-muted-foreground">
                        +20.1% depuis le mois dernier
                    </p>
                    </CardContent>
                </Card>
                <Card>
                    <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                    <CardTitle className="text-xs font-medium">
                        Ventes
                    </CardTitle>
                    <CreditCard className="h-4 w-4 text-muted-foreground" />
                    </CardHeader>
                    <CardContent>
                    <div className="text-2xl font-bold">+235</div>
                    <p className="text-sm text-muted-foreground">
                        +180.1% depuis le mois dernier
                    </p>
                    </CardContent>
                </Card>
                <Card>
                    <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                    <CardTitle className="text-xs font-medium">Tracks</CardTitle>
                    <AudioLines  className="h-4 w-4 text-muted-foreground"  />
                    </CardHeader>
                    <CardContent>
                    <div className="text-2xl font-bold">+42</div>
                    <p className="text-sm text-muted-foreground">
                        +19% depuis le mois dernier
                    </p>
                    </CardContent>
                </Card>
                <Card>
                    <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                    <CardTitle className="text-xs font-medium">Likes</CardTitle>
                    <Heart className="h-4 w-4 text-muted-foreground" />
                    </CardHeader>
                    <CardContent>
                    <div className="text-2xl font-bold">+573</div>
                    <p className="text-sm text-muted-foreground">
                        +24.3% depuis le mois dernier
                    </p>
                    </CardContent>
                </Card>
            </div>

            <div className="grid gap-4 md:gap-8 lg:grid-cols-2 xl:grid-cols-3">
                <Card className="xl:col-span-2">
                    <CardHeader className="flex flex-row items-center">
                    <div className="grid gap-2">
                        <CardTitle>Transactions</CardTitle>
                        <CardDescription>
                         Les dernières transactions depuis votre collection.
                        </CardDescription>
                    </div>
                    <Button asChild size="sm" className="ml-auto gap-1">
                        <Link href="#">
                         Tout Voir
                        <ArrowUpRight className="h-4 w-4" />
                        </Link>
                    </Button>
                    </CardHeader>
                    <CardContent>
                    <Table>
                        <TableHeader>
                        <TableRow>
                            <TableHead>Client</TableHead>
                            <TableHead className="hidden xl:table-column">
                            Type
                            </TableHead>
                            <TableHead className="hidden xl:table-column">
                            Status
                            </TableHead>
                            <TableHead className="hidden xl:table-column">
                            Date
                            </TableHead>
                            <TableHead className="text-right">Montant</TableHead>
                        </TableRow>
                        </TableHeader>
                        <TableBody>
                        <TableRow>
                            <TableCell>
                            <div className="font-medium">0x461b...e01e</div>
                            <div className="hidden text-sm text-muted-foreground md:inline">
                                Liam Johnson
                            </div>
                            </TableCell>
                            <TableCell className="hidden xl:table-column">
                            Sale
                            </TableCell>
                            <TableCell className="hidden xl:table-column">
                            <Badge className="text-xs" variant="outline">
                                Approved
                            </Badge>
                            </TableCell>
                            <TableCell className="hidden md:table-cell lg:hidden xl:table-column">
                            2023-06-23
                            </TableCell>
                            <TableCell className="text-right">100.00 AFT</TableCell>
                        </TableRow>
                        <TableRow>
                            <TableCell>
                            <div className="font-medium">0xdeeb...07db</div>
                            <div className="hidden text-sm text-muted-foreground md:inline">
                                
                            </div>
                            </TableCell>
                            <TableCell className="hidden xl:table-column">
                            Sale
                            </TableCell>
                            <TableCell className="hidden xl:table-column">
                            <Badge className="text-xs" variant="outline">
                                Approved
                            </Badge>
                            </TableCell>
                            <TableCell className="hidden md:table-cell lg:hidden xl:table-column">
                            2023-06-24
                            </TableCell>
                            <TableCell className="text-right">150.00 AFT</TableCell>
                        </TableRow>
                        <TableRow>
                            <TableCell>
                            <div className="font-medium">0xdce1...524b</div>
                            <div className="hidden text-sm text-muted-foreground md:inline">
                            Noah Williams
                            </div>
                            </TableCell>
                            <TableCell className="hidden xl:table-column">
                            Sale
                            </TableCell>
                            <TableCell className="hidden xl:table-column">
                            <Badge className="text-xs" variant="outline">
                                Approved
                            </Badge>
                            </TableCell>
                            <TableCell className="hidden md:table-cell lg:hidden xl:table-column">
                            2023-06-25
                            </TableCell>
                            <TableCell className="text-right">150.00 AFT</TableCell>
                        </TableRow>
                        <TableRow>
                            <TableCell>
                            <div className="font-medium">0x2be6...cd44</div>
                            <div className="hidden text-sm text-muted-foreground md:inline">
                            
                            </div>
                            </TableCell>
                            <TableCell className="hidden xl:table-column">
                            Sale
                            </TableCell>
                            <TableCell className="hidden xl:table-column">
                            <Badge className="text-xs" variant="outline">
                                Approved
                            </Badge>
                            </TableCell>
                            <TableCell className="hidden md:table-cell lg:hidden xl:table-column">
                            2023-06-26
                            </TableCell>
                            <TableCell className="text-right">100.00 AFT</TableCell>
                        </TableRow>
                        <TableRow>
                            <TableCell>
                            <div className="font-medium">0x461b...e01e</div>
                            <div className="hidden text-sm text-muted-foreground md:inline">
                                Liam Johnson
                            </div>
                            </TableCell>
                            <TableCell className="hidden xl:table-column">
                            Sale
                            </TableCell>
                            <TableCell className="hidden xl:table-column">
                            <Badge className="text-xs" variant="outline">
                                Approved
                            </Badge>
                            </TableCell>
                            <TableCell className="hidden md:table-cell lg:hidden xl:table-column">
                            2023-06-27
                            </TableCell>
                            <TableCell className="text-right">200.00 AFT</TableCell>
                        </TableRow>
                        </TableBody>
                    </Table>
                    </CardContent>
                </Card>

                <Card>
                    <CardHeader>
                    <CardTitle>Top Tracks</CardTitle>
                    </CardHeader>
                    <CardContent className="grid gap-8">
                        <div className="flex items-center gap-4">
                        <Avatar className="hidden h-12 w-12 sm:flex">
                            <AvatarImage src="/cover.jpeg" alt="Avatar" className="object-cover" />
                            <AvatarFallback>T</AvatarFallback>
                        </Avatar>
                            <div className="grid gap-2">
                            <p className="text-tiny font-medium leading-none">
                                Loop_Botega_120BPM
                            </p>
                            <div className="flex gap-1 text-sm">
                                <Badge variant={'outline'} className="justify-center ">loop</Badge>
                                <Badge variant={'outline'} className="justify-center ">melody</Badge>
                            </div>
                            </div>
                            <div className="ml-auto font-medium">+77</div>
                        </div>
                        <div className="flex items-center gap-4">
                        <Avatar className="hidden h-12 w-12 sm:flex">
                            <AvatarImage src="/cover.jpeg" alt="Avatar" className="object-cover" />
                            <AvatarFallback>T</AvatarFallback>
                            </Avatar>
                            <div className="grid gap-2">
                            <p className="text-tiny font-medium leading-none">
                                Loop_Vocal_Voicemail_73BPM
                            </p>
                            <div className="flex gap-1 text-sm">
                                <Badge variant={'outline'} className="justify-center ">loop</Badge>
                                <Badge variant={'outline'} className="justify-center ">vocal</Badge>
                            </div>
                            </div>
                            <div className="ml-auto font-medium">+53</div>
                        </div>
                        <div className="flex items-center gap-4">
                        <Avatar className="hidden h-12 w-12 sm:flex">
                            <AvatarImage src="/cover.jpeg" alt="Avatar" className="object-cover"/>
                            <AvatarFallback>T</AvatarFallback>
                            </Avatar>
                            <div className="grid gap-2">
                            <p className="text-tiny font-medium leading-none">
                                OS_FLOW_140BPM
                            </p>
                            <div className="flex gap-1 text-sm">
                                <Badge variant={'outline'} className="justify-center ">one shot</Badge>
                                <Badge variant={'outline'} className="justify-center ">live sounds</Badge>
                            </div>
                            </div>
                            <div className="ml-auto font-medium">+36</div>
                        </div>
                        <div className="flex items-center gap-4">
                        <Avatar className="hidden h-12 w-12 sm:flex">
                            <AvatarImage src="/cover.jpeg" alt="Avatar" className="object-cover" />
                            <AvatarFallback>T</AvatarFallback>
                            </Avatar>
                            <div className="grid gap-2">
                            <p className="text-tiny font-medium leading-none">
                                CAS_acoustic_nylon_70BPM
                            </p>
                            <div className="flex gap-1 text-sm">
                                <Badge variant={'outline'} className="justify-center ">loop</Badge>
                                <Badge variant={'outline'} className="justify-center ">live sounds</Badge>
                            </div>
                            </div>
                            <div className="ml-auto font-medium">+32</div>
                        </div>
                        <div className="flex items-center gap-4">
                        <Avatar className="hidden h-12 w-12 sm:flex">
                            <AvatarImage src="/cover.jpeg" alt="Avatar" className="object-cover"/>
                            <AvatarFallback>T</AvatarFallback>
                            </Avatar>
                            <div className="grid gap-2">
                            <p className="text-tiny font-medium leading-none">
                                perc_loop_furies_100BPM
                            </p>
                            <div className="flex gap-1 text-sm">
                                <Badge variant={'outline'} className="justify-center ">loop</Badge>
                                <Badge variant={'outline'} className="justify-center ">perc</Badge>
                            </div>
                            </div>
                            <div className="ml-auto font-medium">+23</div>
                        </div>
                    </CardContent>
                </Card>
            </div>
        </>
  )
}
