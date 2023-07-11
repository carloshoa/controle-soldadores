'use client'
import axios from "axios"
import Link from "next/link"
import { useRouter } from "next/navigation"
import { useEffect, useState } from "react"


const App = async () => {

  const router = useRouter()
  const [listWelder, setListWelder] = useState([])
  const [active, setActive] = useState(false)


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

  const handleList = (sinete: string, active: boolean) => {
    active ? router.push(`/app/solda/lista/${sinete}`) : null
  }

  return <div className="flex flex-col w-full justify-center center content-center m-4">

    <form className="flex flex-col justify-center w-fit space-y-3 md:flex-row md:w-full md:space-x-3 md:space-y-0">
      <div className="flex flex-col w-full">
        <div className="flex flex-col w-full">
          <div className="m-2 w-full">
            <input type="text" id="&quot;form-subscribe-Subscribe" className=" rounded-lg border-transparent flex-1 appearance-none border border-gray-300 w-full py-2 px-4 bg-white text-gray-700 placeholder-gray-400 shadow-sm text-base focus:outline-none focus:ring-2 focus:ring-purple-600 focus:border-transparent" placeholder="Nome" />
          </div>
          <div className="flex flex-row ">
            <div className="m-2 w-full  ">
              <input type="text" id="&quot;form-subscribe-Subscribe" className=" rounded-lg border-transparent flex-1 appearance-none border border-gray-300 w-full py-2 px-4 bg-white text-gray-700 placeholder-gray-400 shadow-sm text-base focus:outline-none focus:ring-2 focus:ring-purple-600 focus:border-transparent" placeholder="CPF" />
            </div>
            <div className="m-2 w-full  ">
              <input type="text" id="&quot;form-subscribe-Subscribe" className=" rounded-lg border-transparent flex-1 appearance-none border border-gray-300 w-full py-2 px-4 bg-white text-gray-700 placeholder-gray-400 shadow-sm text-base focus:outline-none focus:ring-2 focus:ring-purple-600 focus:border-transparent" placeholder="Sinete" />
            </div>
          </div>
        </div>
        <div className="p-5 flex flex-row ">
          <div className="flex items-center gap-8">
            <label className="inline-flex items-center">
              <input type="radio" name="vehicle" className="w-5 h-5 text-red-600" />
              <span className="ml-2 text-gray-700">
                Car
              </span>
            </label>
            <label className="inline-flex items-center">
              <input type="radio" name="vehicle" className="w-5 h-5 text-red-600" />
              <span className="ml-2 text-gray-700">
                Cycle
              </span>
            </label>
          </div>
          <div className="flex items-center gap-8">
            <label className="inline-flex items-center">
              <input type="radio" name="vehicle" className="w-5 h-5 text-red-600" />
              <span className="ml-2 text-gray-700">
                Car
              </span>
            </label>
            <label className="inline-flex items-center">
              <input type="radio" name="vehicle" className="w-5 h-5 text-red-600" />
              <span className="ml-2 text-gray-700">
                Cycle
              </span>
            </label>
          </div>
        </div>
      </div>
    </form>
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
                        {welder.processos}
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