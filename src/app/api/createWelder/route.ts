import { createWelder } from "@/app/db/createWelder/route";
import { NextApiResponse } from "next";
import { NextResponse } from "next/server";

export async function POST(req: any, res: NextApiResponse) {

  try {

    const body = await req.json()

    const welder = await createWelder(body)

    if (welder instanceof Error) {

      console.log('chegou aqui fora do catach deu erro...', { welder })
      throw new Error('Soldador já cadastrado')
    } else {

      console.log('chegou aqui não deu erro...', welder)
      return NextResponse.json(welder)
    }

  } catch (error: any) {

    console.log('chegou aqui errooo...', error)

    // return (error)

    // { error: 'Internal Server Error' }, { status: 500 }

    return NextResponse.json({
      'error': error.message
    }, {
      status: 300
    })


  }
}
