import prisma from "@/app/lib/prisma";

//import { PrismaClient } from "@prisma/client";
//const prisma = new PrismaClient()


interface IFormInput {
  data: {
    welderName: string
    welderCpf: string
    welderRg: string
    SMAW: boolean
    FCAW: boolean
    GTAW: boolean
    sinete: string
  }
}


export async function createWelder(dataWelder: IFormInput) {

  const processos = []
  if (dataWelder.data.SMAW) {
    processos.push('SMAW');
  }
  if (dataWelder.data.FCAW) {
    processos.push('FCAW');
  }
  if (dataWelder.data.GTAW) {
    processos.push('GTAW');
  }

  try {

    const ExistWelder = await prisma.welder.findMany({
      where: {
        OR: [
          {
            sinete: {
              equals: dataWelder.data.sinete,
            },
          },
          {
            cpf: {
              equals: dataWelder.data.welderCpf
            }
          },
        ]
      }
    })

    if (ExistWelder.length) {

      throw Error(`já existe soldador com os dados informado, ${ExistWelder}`)

    } else {

      const Welder = await prisma.welder.create({
        data: {
          nome: dataWelder.data.welderName,
          cpf: dataWelder.data.welderCpf,
          rg: dataWelder.data.welderRg,
          sinete: dataWelder.data.sinete,
          processos: processos,
        }
      })

      console.log("Welder de retorno do prisma", Welder)
      return Welder

    }


  } catch (error) {

    return error
  }

}