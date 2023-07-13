'use client'
import Loading from "@/app/loading"
import axios from "axios"
import Link from "next/link"
import { useRouter } from "next/navigation"
import { Suspense, useEffect, useState } from "react"


const App = async () => {

  const router = useRouter()
  const [listWelder, setListWelder] = useState<any>([])
  const [active, setActive] = useState<boolean>(false)


  const getWelder = async () => {
    try {

      const resposta = await axios.post('https://controle-soldadores-tbt.vercel.app/api/listWelder')

      setListWelder(resposta.data)

    } catch (error) {
      console.log(error)
    }
  }

  useEffect(() => {
    getWelder()
    setActive(true)
  }, [])

  const filterWelder = async (valueFilter?: any, typeFilter?: any) => {
    try {

      const resposta = await axios.post('https://controle-soldadores-tbt.vercel.app/api/listWelder')

      // setListWelder(resposta.data)

      const nameFilter: any = document.getElementById('nameFilter');
      const cpfFilter: any = document.getElementById('cpfFilter');
      const sineteFilter: any = document.getElementById('sineteFilter');

      console.log('item 1', nameFilter.value.toUpperCase())
      console.log('item 2', cpfFilter.value.toString())
      console.log('item 3', sineteFilter.value.toString())
      let filteredWelder = resposta.data
      if (nameFilter.value) {
        console.log('teste do filtro, item 1 :', resposta.data[0].nome.toUpperCase())
        console.log('teste do filtro, item 1 :', nameFilter.value.toUpperCase())
        filteredWelder = resposta.data.filter((welder: any) => welder.nome.toUpperCase().includes(nameFilter.value.toUpperCase()))
      }
      if (cpfFilter.value) {
        console.log('teste do filtro, item 1 :', resposta.data[0].cpf)
        console.log('teste do filtro, item 1 :', cpfFilter.value.toString())
        filteredWelder = resposta.data.filter((welder: any) => welder.cpf.includes(cpfFilter.value.toString()))
      }
      if (sineteFilter.value) {
        console.log('teste do filtro, item 1 :', resposta.data[0].sinete)
        console.log('teste do filtro, item 1 :', sineteFilter.value.toString())
        filteredWelder = resposta.data.filter((welder: any) => welder.sinete.includes(sineteFilter.value.toString()))
      }

      setListWelder(filteredWelder)



      console.log('testando filtroooooooooooooooo', filteredWelder)
    } catch (error) {
      console.log(error)
    }


  }

  const handleList = (sinete: string, active: boolean) => {
    active ? router.push(`/app/solda/lista/${sinete}`) : null
  }

  return <div className="flex flex-col w-full justify-center center content-center m-4">

    <form className="flex flex-col justify-center w-fit space-y-3 md:flex-row md:w-full md:space-x-3 md:space-y-0">
      <div className="flex flex-col w-full">
        <div className="flex flex-col w-full">
          <div className="m-2 w-full center pr-4">
            <input type="text" onChange={(e) => filterWelder(e.target.value, 'nome')} id="nameFilter" className=" rounded-lg border-transparent flex-1 appearance-none border border-gray-300 w-full py-2 px-4 bg-white text-gray-700 placeholder-gray-400 shadow-sm text-base focus:outline-none focus:ring-2 focus:ring-purple-600 focus:border-transparent" placeholder="Nome" />
          </div>
          <div className="flex flex-row ">
            <div className="m-2 w-full  ">
              <input type="text" onChange={(e) => filterWelder(e.target.value, 'cpf')} id="cpfFilter" className=" rounded-lg border-transparent flex-1 appearance-none border border-gray-300 w-full py-2 px-4 bg-white text-gray-700 placeholder-gray-400 shadow-sm text-base focus:outline-none focus:ring-2 focus:ring-purple-600 focus:border-transparent" placeholder="CPF" />
            </div>
            <div className="m-2 w-full  ">
              <input type="text" onChange={(e) => filterWelder(e.target.value, 'sinete')} id="sineteFilter" className=" rounded-lg border-transparent flex-1 appearance-none border border-gray-300 w-full py-2 px-4 bg-white text-gray-700 placeholder-gray-400 shadow-sm text-base focus:outline-none focus:ring-2 focus:ring-purple-600 focus:border-transparent" placeholder="Sinete" />
            </div>
          </div>
        </div>
        <div className="p-5 flex flex-row justify-between mx-10">
          <div className="flex items-center gap-8">
            <label className="inline-flex items-center">
              <input type="radio" name="status" className="w-5 h-5 text-red-600" />
              <span className="ml-2 text-gray-700">
                Ativo
              </span>
            </label>
            <label className="inline-flex items-center">
              <input type="radio" name="status" className="w-5 h-5 text-red-600" />
              <span className="ml-2 text-gray-700">
                Desligado
              </span>
            </label><label className="inline-flex items-center">
              <input type="radio" defaultChecked name="status" className="w-5 h-5 text-red-600" />
              <span className="ml-2 text-gray-700">
                Todos
              </span>
            </label>
          </div>
          <div className="flex items-center gap-8">
            <label className="inline-flex items-center">
              <input type="radio" name="processo" className="w-5 h-5 text-red-600" />
              <span className="ml-2 text-gray-700">
                GTAW
              </span>
            </label>
            <label className="inline-flex items-center">
              <input type="radio" name="processo" className="w-5 h-5 text-red-600" />
              <span className="ml-2 text-gray-700">
                FCAW
              </span>
            </label>
            <label className="inline-flex items-center">
              <input type="radio" name="processo" className="w-5 h-5 text-red-600" />
              <span className="ml-2 text-gray-700">
                SMAW
              </span>
            </label>
            <label className="inline-flex items-center">
              <input type="radio" defaultChecked name="processo" className="w-5 h-5 text-red-600" />
              <span className="ml-2 text-gray-700">
                Todos
              </span>
            </label>
          </div>
        </div>
      </div>
    </form>
    <Suspense fallback={<Loading />}></Suspense>

    {/* component */}
    <div className="flex flex-col">
      <div className="overflow-x-auto sm:mx-0.5 lg:mx-0.5">
        <div className="py-2 inline-block min-w-full sm:px-6 lg:px-8">
          <div className="overflow-hidden">
            <table className="min-w-full">
              <thead className="bg-gray-200 border-b">
                <tr>
                  <th scope="col" className="text-sm font-medium text-gray-900 px-6 py-4 text-left">
                    Sinete
                  </th>
                  <th scope="col" className="text-sm font-medium text-gray-900 px-6 py-4 text-left">
                    Nome
                  </th>
                  <th scope="col" className="text-sm font-medium text-gray-900 px-6 py-4 text-left">
                    Cpf
                  </th>
                  <th scope="col" className="text-sm font-medium text-gray-900 px-6 py-4 text-left">
                    Rg
                  </th>
                  <th scope="col" className="text-sm font-medium text-gray-900 px-6 py-4 text-left">
                    Processos
                  </th>
                  <th scope="col" className="text-sm font-medium text-gray-900 px-6 py-4 text-left">
                    Status
                  </th>
                </tr>
              </thead>
              <tbody>
                {listWelder.map((welder: any) => {
                  return (
                    <tr key={welder.sinete} onClick={() => handleList(welder.sinete, active)}
                      className="bg-white border-b transition duration-300 ease-in-out hover:bg-gray-100">

                      <Link href={'/app/solda/controle'} className='w-full'>
                        <td className="px-6 py-4 w-full h-full whitespace-nowrap text-sm font-medium text-gray-900">
                          {welder.sinete}
                        </td>
                      </Link>
                      <td className="text-sm text-gray-900 font-light px-6 py-4 whitespace-nowrap">
                        {welder.nome}
                      </td>
                      <td className="text-sm text-gray-900 font-light px-6 py-4 whitespace-nowrap">
                        {welder.cpf}
                      </td>
                      <td className="text-sm text-gray-900 font-light px-6 py-4 whitespace-nowrap">
                        {welder.rg}
                      </td>
                      <td className="text-sm text-gray-900 font-light px-6 py-4 whitespace-nowrap">
                        {welder.processos ? welder.processos.split(' ') : ""}
                      </td>
                      <td className="text-sm text-gray-900 font-light px-6 py-4 whitespace-nowrap">
                        {welder.ativo}
                      </td>
                    </tr>
                  )
                })
                }

              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div >
  </div >

}

export default App;