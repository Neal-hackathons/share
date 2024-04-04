'use client'

import Image from "next/image"
import Link from "next/link"
import {instruments, genres, category} from '@/lib/category'
import {
  ChevronLeft,
} from "lucide-react"

import { Button } from "@/components/ui/button"
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select"

import { Textarea } from "@/components/ui/textarea"
import { useState } from "react"
import { ScrollArea } from "@/components/ui/scroll-area"
import { Checkbox } from "@/components/ui/checkbox"



export default function Page() {
    const [data , setData] = useState({
        name: '',
        desc: '',
        price: '',
        attributes: {
            genres: [],
            instruments: [],
            category: [], 
            bpm: ''
        },
        cover: '',
        src: '',
        author: 'john doe',
        authorAddress: 'address'
    })
    const [previewCover, setPreviewCover] = useState('')
    const [uploading, setUploading] = useState(false)
    

    async function handleSubmit(e, data) {
      e.preventDefault()
      setUploading(true);
      try{
      console.log(data)
      const fileData = new FormData()
      for(const [key, value] of Object.entries(data)){

        if(key === 'attributes'){
          fileData.append(key, JSON.stringify(value))
        }else{
          fileData.append(key, value)
        }
      }


      const res = await fetch('/api/upload', {
        method: "POST",
        body: fileData
      })
      
      const resData = await res.json()
      console.log(resData)
      setUploading(false);

        }catch(e) {
          console.log(e)
          setUploading(false);
        }

    }

    function handleChange(e) {
    
      if(e.target.name === 'bpm'){
        setData(prev => {
          return {...prev, attributes: {...prev.attributes, [e.target.name]: e.target.value}}
     })
      }
        setData(prev => {
             return {...prev, [e.target.name]: e.target.value}
        })

    }


    function reader(file, callback){
      const fr = new FileReader();
      fr.onload = () => callback(null, fr.result);
      fr.onerror = (err) => callback(err);
      fr.readAsDataURL(file);

    }

    function handleFile(e){
      if(e.target.name === 'cover'){
        reader(e.target.files[0], (err, res) => {
        setPreviewCover(res)
        })
      }

      reader(audioFile, (err, res) => {
        setData(prev => {return {...prev, [e.target.name]: createReadStream(res)}})
      })
      
      //setData(prev => {return {...prev, [e.target.name]: e.target.files[0]}})
      
    }

  return (
    <div className="flex min-h-screen w-full flex-col">
      <div className="flex flex-col sm:gap-4 sm:py-4 sm:pl-14">
        <main className="grid flex-1 items-start gap-4 p-4 sm:px-6 sm:py-0 md:gap-8">
        <form onSubmit={(e) => handleSubmit(e, data)}>
          <div className="mx-auto grid max-w-[59rem] flex-1 auto-rows-max gap-4">
            <div className="flex items-center gap-4">
              <Button variant="outline" size="icon" className="h-7 w-7" asChild>
                <Link href={'/creator/tracks'}>
                    <ChevronLeft className="h-4 w-4" />
                    <span className="sr-only">Back</span>
                </Link>
              </Button>
              <h1 className="flex-1 shrink-0 whitespace-nowrap text-xl font-semibold tracking-tight sm:grow-0">
                Publiez une piste
              </h1>
              <div className="hidden items-center gap-2 md:ml-auto md:flex">
                <Button variant="outline" size="default" className="text-tiny">
                  Annuler
                </Button>
                <Button size="default" className="text-tiny"  type="submit">Confirmer</Button>
              </div>
            </div>
            
            <div className="grid gap-4 md:grid-cols-[1fr_250px] md:w-16 lg:grid-cols-3 lg:gap-8">
              <div className="grid auto-rows-max items-start gap-4 lg:col-span-2 lg:gap-8">
                <Card>
                  <CardHeader>
                    <CardTitle>Informations de base</CardTitle>
                    <CardDescription>
                        En publiant, vous confirmez que vos fichiers audio sont conformes à nos Conditions d&apos;utilisation et que vous ne violez pas les droits d&apos;un tiers.
                    </CardDescription>
                  </CardHeader>
                  <CardContent>
                    <div className="grid gap-6">
                      <div className="grid gap-3">
                        <Label htmlFor="name">Nom <span className="text-primary">*</span></Label>
                        <Input
                          name="name"
                          required
                          type="text"
                          onChange={(e) => handleChange(e)}
                          value={data.name}
                          className="w-full"
                          placeholder="Donnez un nom à votre piste"
                        />
                      </div>
                      <div className="grid gap-3">
                        <Label htmlFor="desc">Description <span className="text-primary">*</span></Label>
                        <Textarea
                          name="desc"
                          onChange={(e) => handleChange(e)}
                          required
                          value={data.desc}
                          placeholder="Saisissez une description pour votre piste"
                          className="min-h-32"
                        />
                      </div>
                      <div className="grid gap-3">
                        <Label htmlFor="price">Prix <span className="text-primary">*</span></Label>
                        <Input
                          name="price"
                          onChange={(e) => handleChange(e)}
                          value={data.price}
                          required
                          type="number"
                          className="w-full"
                          placeholder="Indiquez le prix de votre piste"
                        />
                      </div>
                    </div>
                  </CardContent>
                </Card>
                <Card>
                  <CardHeader>
                    <CardTitle>Metadonnées</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <div className="grid gap-6 sm:grid-cols-3">
                      <div className="flex flex-col gap-4 w-[200px]">
                        <label htmlFor="genres">Genres</label>
                        <ScrollArea className="rounded-md border ">
                          <div className="p-4 flex flex-col gap-2">
                          
                            {
                                genres.map((el, index) => {
                                    
                                    return(
                                        <div key={index} className="flex gap-2 items-center">
                                            <Checkbox
                                                checked={data.attributes.genres.includes(el)}
                                                onCheckedChange={(checked) => {
                                                  const genres = data.attributes.genres
                                                  const isAlreadyChecked = genres.includes(el)

                                                  if(checked && !isAlreadyChecked){
                                                    setData(prev => {
                                                      return {...prev, attributes: {...prev.attributes, genres: [...genres, el]}}
                                                    })
                                                  }

                                                  if(!checked && isAlreadyChecked){
                                                    const updated = genres.filter(genre => genre !== el)
                                                    setData(prev => {
                                                      return {...prev, attributes: {...prev.attributes, genres: updated}}
                                                    })
                                                  }
                                                }}
                                                name="genres"
                                                id="genres"
                                            />
                                            <label className="text-tiny ">{el}</label>
                                        </div>
                                    )
                                })
                            }
                          </div>
                        </ScrollArea>
                      </div>
                      <div className="flex flex-col gap-4 w-[33%]">
                      <label htmlFor="genres">Instruments</label>
                      <ScrollArea className="rounded-md border">
                        <div className="p-4 flex flex-col gap-2">
                        
                          {
                              instruments.map((el, index) => {
                                  
                                  return(
                                      <div key={index} className="flex gap-2 items-center">
                                          <Checkbox
                                              checked={data.attributes.instruments.includes(el)}
                                              onCheckedChange={(checked) => {
                                                const instruments = data.attributes.instruments
                                                const isAlreadyChecked = instruments.includes(el)

                                                if(checked && !isAlreadyChecked){
                                                  setData(prev => {
                                                    return {...prev, attributes: {...prev.attributes, instruments: [...instruments, el]}}
                                                  })
                                                }

                                                if(!checked && isAlreadyChecked){
                                                  const updated = instruments.filter(instrument => instrument !== el)
                                                  setData(prev => {
                                                    return {...prev, attributes: {...prev.attributes, instruments: updated}}
                                                  })
                                                }
                                              }}
                                              name="instruments"
                                              id='instruments'
                                          />
                                          <label  className="text-tiny ">{el}</label>
                                      </div>
                                  )
                              })
                          }
                        </div>
                      </ScrollArea>
                      </div>
                      <div className="flex flex-col gap-4 w-[33%]">
                      <label htmlFor="genres">Category</label>
                      <ScrollArea className="rounded-md border max-h-20 ">
                        <div className="p-4 flex flex-col gap-2">
                        
                          {
                            category.map((el, index) => {
                                  
                                  return(
                                      <div key={index} className="flex gap-2 items-center">
                                          <Checkbox
                                              checked={data.attributes.category.includes(el)}
                                              onCheckedChange={(checked) => {
                                                const category = data.attributes.category
                                                const isAlreadyChecked = category.includes(el)

                                                if(checked && !isAlreadyChecked){
                                                  setData(prev => {
                                                    return {...prev, attributes: {...prev.attributes, category: [...category, el]}}
                                                  })
                                                }

                                                if(!checked && isAlreadyChecked){
                                                  const updated = category.filter(cat => cat !== el)
                                                  setData(prev => {
                                                    return {...prev, attributes: {...prev.attributes, category: updated}}
                                                  })
                                                }
                                              }}
                                              name="category"
                                              id='category'
                                          />
                                          <label  className="text-tiny ">{el}</label>
                                      </div>
                                  )
                              })
                          }
                        </div>
                      </ScrollArea>
                      </div>
                      <div className="flex flex-col gap-4 w-[33%]">
                      <Label htmlFor="bpm">BPM </Label>
                      <Input
                        name="bpm"
                        id='bpm'
                        onChange={(e) => handleChange(e)}
                        value={data.attributes.bpm}
                        type="number"
                        className="w-full"
                        placeholder="Indiquez le BPM"
                      />
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </div>
              <div className="grid auto-rows-max items-start gap-4 lg:gap-8">
                <Card>
                  <CardHeader>
                    <CardTitle>Status de publication</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <div className="grid gap-6">
                      <div className="grid gap-3">
                        <Label htmlFor="status">Status</Label>
                        <Select>
                          <SelectTrigger id="status" aria-label="Select status">
                            <SelectValue placeholder="Selectionnez un status" />
                          </SelectTrigger>
                          <SelectContent>
                            <SelectItem value="draft">Draft</SelectItem>
                            <SelectItem value="published">actif</SelectItem>
                            <SelectItem value="archived">Archivé</SelectItem>
                          </SelectContent>
                        </Select>
                      </div>
                    </div>
                  </CardContent>
                </Card>
                <Card className="overflow-hidden">
                  <CardHeader>
                    <CardTitle>Fichiers</CardTitle>
                    <CardDescription>
                      Déposez votre titre et cover ici
                    </CardDescription>
                  </CardHeader>
                  <CardContent>
                    <div className="grid gap-4">
                      <div className="flex flex-col items-center gap-2">
                          <Image
                            alt="Product image"
                            className="aspect-square w-full rounded-md object-cover"
                            height="300"
                            src={previewCover !== '' ? previewCover : '/cover.jpeg'}
                            width="300"
                          />
                          <input className="w-full" id="cover" name="cover" accept="image/png, image/jpeg" type="file" onChange={handleFile}/>
                        </div>
                        
                        <div className="flex flex-col items-center gap-2">
                          <label htmlFor="src">Inserez votre piste <span className="text-primary">*</span>: </label>
                          <input className="w-full" id="src" name="src" required accept="audio" type="file" onChange={handleFile}/>
                        </div>

                    </div>
                  </CardContent>
                </Card>
              </div>
            </div>

            <div className="flex items-center justify-center gap-2 md:hidden">
              <Button variant="outline" size="default">
                Annuler
              </Button>
              <Button size="default" type="submit">Confirmer</Button>
            </div>
          </div>
        </form>
        </main>
      </div>
    </div>
  )
}

