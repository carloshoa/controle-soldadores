import { listWelder } from "@/app/db/listWelder/route";
import { NextApiResponse } from "next";
import { NextResponse } from "next/server";


export async function GET(req: Request, res: NextApiResponse) {

  const arraySinete = req.url?.split('/')!
  const sinete = arraySinete[arraySinete.length - 1]

  console.log('entrou aquiii')
  try {

    const list = await listWelder(sinete)

    if (list instanceof Error) {

      throw new Error('Soldador já cadastrado')
    } else {

      return NextResponse.json(list)
    }

  } catch (error: any) {

    return NextResponse.json({
      'error': error.message
    }, {
      status: 501
    })

  }
}
