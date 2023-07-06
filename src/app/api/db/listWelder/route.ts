import prisma from "@/app/lib/prisma";

export async function listWelder(sinete?: string) {

  try {

    const list = await prisma.welder.findMany({
      where: {
        sinete: {
          equals: sinete
        }
      }
    })

    return list

  } catch (error) {

    return error
  }

}