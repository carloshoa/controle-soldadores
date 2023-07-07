import { listWelder } from "@/app/db/listWelder/route";
import { NextResponse } from "next/server";

export async function POST(req: any, res: any) {
  console.log('chegou antes do try catch')

  try {

    console.log('chegou na api...')
    const list = await listWelder()
    console.log('passou na api...')

    if (list instanceof Error) {

      throw new Error('Soldador já cadastrado')
    } else {

      return NextResponse.json(list)
    }

  } catch (error: any) {

    return NextResponse.json({
      'error': error.message
    },
    )


  }
}
