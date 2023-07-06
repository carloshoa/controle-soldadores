import { NextApiResponse } from "next";
import { NextResponse } from "next/server";
import { listWelder } from "../db/listWelder/route";

export async function GET(req: any, res: NextApiResponse) {

  try {

    const list = await listWelder()

    if (list instanceof Error) {

      throw new Error('Soldador já cadastrado')
    } else {

      return NextResponse.json(list)
    }

  } catch (error: any) {

    return NextResponse.json({
      'error': error.message
    }, {
      status: 300
    })


  }
}
