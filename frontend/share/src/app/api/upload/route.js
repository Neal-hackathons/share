
import 'dotenv/config'

import { createReadStream } from 'fs'




  export async function POST(req) {
    function reader(file, callback) {
      const fr = new FileReader();
      fr.onload = () => callback(null, fr.result);
      fr.onerror = (err) => callback(err);
      fr.readAsDataURL(file);
    }


    try{

        const data = await req.formData()
        const audioFile = data.get('src')
        console.log(audioFile)




        const audioData = new FormData()

        //audioData.append('pinataMetadata', JSON.stringify({name: data.get('name'), author: data.get('author'), authorAddress: data.get('authorAddress')}))

        /** 
            const resAudio = await fetch("https://api.pinata.cloud/pinning/pinFileToIPFS", {
              method: "POST",
              headers: {
                Authorization: `Bearer ${process.env.PINATA_JWT}`
              },
              body: audioData,
            });

            const ip = await resAudio.json()
            console.log(ip)
          */
            

          return Response.json({ audioFile }, { status: 200 }); 
    }catch(e) {
        return Response.json({error: 'Erreur api upload'}, {status: 500})
    }
  }