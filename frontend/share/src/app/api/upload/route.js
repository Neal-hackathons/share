
import 'dotenv/config'


  export async function POST(req) {

    try{

        const data = await req.formData()
        const audioFile = data.get('src')

        const audioData = new FormData()
        audioData.append('file', data.get('src'))
        console.log(audioData.get('file'))
        audioData.append('pinataMetadata', JSON.stringify({name: data.get('name'), author: data.get('author'), authorAddress: data.get('authorAddress')}))

        
            const resAudio = await fetch("https://api.pinata.cloud/pinning/pinFileToIPFS", {
              method: "POST",
              headers: {
                Authorization: `Bearer ${process.env.PINATA_JWT}`,
                'Content-Type': `multipart/form-data`
              },
              body: audioData,
            });

            const ip = await resAudio.json()
            console.log(ip)
            

          return Response.json({ audioFile }, { status: 200 }); 
    }catch(e) {
        return Response.json({error: 'Erreur api upload'}, {status: 500})
    }
  }