import prisma from "@/app/lib/prisma";

export const listWelder = async (sinete?: string) => {

  try {
    console.log("chegou na requisição do prisma! ..........")
    const list = await prisma.welder.findMany({
      where: {
        sinete: {
          equals: sinete
        }
      }
    })
    console.log("passou da requisição do prisma! ..........")

    return list

  } catch (error) {

    return error
  }

}
