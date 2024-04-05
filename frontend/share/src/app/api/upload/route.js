
import 'dotenv/config'


  export async function POST(req) {
  try{
  
  const data = await req.formData()

  //console.log(data.get('attributes'))
  //const audioCid = await client.uploadDirectory(data.get('src'))
  
    

      
    return Response.json({ data }, { status: 200 }); 
    }catch(e) {
        return Response.json({error: e}, {status: 500})
    }
  }
