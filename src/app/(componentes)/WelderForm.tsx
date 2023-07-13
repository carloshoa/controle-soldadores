'use client'
import { yupResolver } from "@hookform/resolvers/yup"
import axios from "axios"
import { useEffect, useState } from "react"
import { SubmitHandler, useForm } from "react-hook-form"
import * as yup from "yup"
import Modal from "./Modal"
import ModalConfirm from "./ModalConfirm"

interface IFormInput {
  welderName: string
  welderCpf: string
  welderRg: string
  SMAW: boolean
  FCAW: boolean
  GTAW: boolean
  sinete: string
}

yup.addMethod(yup.array, 'unique', function (message, mapper = (a: any) => a) {
  return this.test('unique', message, function (list) {
    return list?.length === new Set(list?.map(mapper)).size;
  });
});

// const path = 'http://localhost:3000'
// const path = 'https://controle-soldadores-tbt.vercel.app'

const welderSchema = yup
  .object().
  shape({
    welderName: yup.string().required('Nome é um campo obrigatório'),
    welderCpf: yup.string().required('Cpf é um campo obrigatório'),
    welderRg: yup.string(),
    SMAW: yup.boolean().required(),
    FCAW: yup.boolean().required(),
    GTAW: yup.boolean().required(),
    sinete: yup.string().required('Sinete é um campo obrigatório'),
  }).required()


const App = async () => {

  const [showModal, setShowModal] = useState(false)
  const [showModalConfirm, setShowModalConfirm] = useState(false)
  const [approvedDate, setApprovedDate] = useState(false)

  const { getValues, register, handleSubmit, formState, setError } = useForm<IFormInput>({
    resolver: async (data, context, options) => {
      // you can debug your validation schema here
      console.log("formData", data)
      console.log(
        "validation result",
        await yupResolver(welderSchema)(data, context, options)
      )
      return yupResolver(welderSchema)(data, context, options)
    }
  })

  const onSubmit: SubmitHandler<IFormInput> = async (data) => {
    console.log('data.....', data)
    // inserir modal de confirmação //
    console.log('teste ....')
    // se positivo segue 

    if (approvedDate) {


      try {
        const resposta = await axios.post('https://controle-soldadores-tbt.vercel.app/api/createWelder', {
          data,
          headers: {
            "Content-Type": "application/json"
          },
        })

        console.log('tipo da resposta', (resposta))


        if ((resposta.status) === 200) {
          console.log("soldador cadastrado com sucesso")
          // setShowModal(!showModal)
          // redirect('/app/solda/soldadores')
        }

      } catch (error: any) {

        // if (resposta.data.error) {
        setError("welderName", {
          type: "manual",
          message: error.response.data?.error,
        })
        // }
      }
    } else {
      setShowModal(true)
    }
    // setShowModal(false)

    // setValue("welderRg","")
    // } catch (error) {
    //   console.log("erro no formulário .......................", error)
    // }
    // if(resposta.status === 200){
    //   console.log('resposta ,', resposta)
    //   reset()
    // }
    // console.log("....................   ")
    // if(resposta.status === 500 ){

    //   console.log("errro   ", formState.errors)
    // }


  }


  useEffect(() => {

  }, [showModal]); // use entire formState object as optional array arg in useEffect, not individual properties of itros ....,",errors.welderName)

  const updateShowModal = () => {
    setShowModal(false)
  }
  const updateShowModalConfirm = () => {
    setShowModalConfirm(false)
  }

  const handleApprovedDate = () => {
    setApprovedDate(false)
  }

  return (

    <div className="h-screen px-4 pb-24 overflow-auto md:px-6">
      <h1 className="text-4xl font-semibold text-gray-800 dark:text-white">

      </h1>


      <section className="h-screen mt-5 white">
        <form onSubmit={handleSubmit(onSubmit)} className="container max-w-full mx-auto shadow-md md:w-10/12">
          {/* <div className="pre-4 border-t-2 border-indigo-400 rounded-lg bg-gray-500 ">
            <div className="max-w-sm mx-auto md:w-full md:mx-0">
              <div className="inline-flex items-center space-x-4 p-10">
                Cadastro de Soldadores
              </div>
            </div>
          </div> */}
          <div className="space-y-6 border-t-2 border-indigo-400 rounded-lg bg-white">
            <div className="items-center w-full p-4 space-y-4 text-gray-500 md:inline-flex md:space-y-0">
              <h2 className="max-w-sm mx-auto md:w-3/12">
                INFORMAÇÕES PESSOAIS
              </h2>
              {showModalConfirm ? (<ModalConfirm handleShow={updateShowModalConfirm} handleSubmit={handleApprovedDate} dados={getValues()} ></ModalConfirm>) : (<div> </div>)}
              {showModal ? (<Modal handleShow={updateShowModal} show={true}></Modal>) : (<div> </div>)}
              <div className="max-w-2xl mx-auto md:w-9/12">
                <div className=" relative mb-2">
                  <input  {...register("welderName")} type="text" id="welder-info-name" className=" rounded-lg border-transparent flex-1 appearance-none border border-gray-300 w-full py-2 px-4 bg-white text-gray-700 placeholder-gray-400 shadow-sm text-base focus:outline-none focus:ring-2 focus:ring-purple-600 focus:border-transparent" placeholder="Nome" />
                </div>
                <div className=" text-red-500 ">
                  {formState.errors.welderName && <span> {formState.errors.welderName.message}</span>}
                </div>
                <div className=" relative mb-2 ">
                  <input {...register("welderCpf")} type="text" id="welder-info-cpf" className=" rounded-lg border-transparent flex-1 appearance-none border border-gray-300 w-full py-2 px-4 bg-white text-gray-700 placeholder-gray-400 shadow-sm text-base focus:outline-none focus:ring-2 focus:ring-purple-600 focus:border-transparent" placeholder="CPF" />
                </div>
                <div className=" text-red-500 ">
                  {formState.errors.welderCpf && <span> {formState.errors.welderCpf.message}</span>}
                </div>
                <div className=" relative ">
                  <input {...register("welderRg")} type="text" id="welder-info-rg" className=" rounded-lg border-transparent flex-1 appearance-none border border-gray-300 w-full py-2 px-4 bg-white text-gray-700 placeholder-gray-400 shadow-sm text-base focus:outline-none focus:ring-2 focus:ring-purple-600 focus:border-transparent" placeholder="RG" />
                </div>
                <div className=" text-red-500 ">
                  {formState.errors.welderRg && <span> {formState.errors.welderRg.message}</span>}
                </div>
              </div>
            </div>
            <hr />
            <div className="items-center w-full p-4 space-y-4 text-gray-500 md:inline-flex md:space-y-0">
              <h2 className="max-w-sm mx-auto md:w-3/12">
                SOLDAGEM
              </h2>
              <div className="max-w-2xl mx-auto space-y-5 md:w-9/12">
                <div>

                  <div className=" relative ">

                    <div className="flex">

                      <div className="mr-5">
                        <div className="relative inline-block w-10 mr-2 align-middle select-none">
                          <input {...register("SMAW")} type="checkbox" name="SMAW" id="SMAW" className="checked:bg-blue-500 outline-none focus:outline-none right-4 checked:right-0 duration-200 ease-in absolute block w-6 h-6 rounded-full bg-white border-4 appearance-none cursor-pointer" />
                          <label htmlFor="SMAW" className="block h-6 overflow-hidden bg-gray-300 rounded-full cursor-pointer">
                          </label>
                        </div>
                        <span className="font-medium text-gray-400">
                          SMAW
                        </span>
                      </div>
                      <div className="mr-5">
                        <div className="relative inline-block w-10 mr-2 align-middle select-none">
                          <input {...register("FCAW")} type="checkbox" name="FCAW" id="FCAW" className="checked:bg-blue-500 outline-none focus:outline-none right-4 checked:right-0 duration-200 ease-in absolute block w-6 h-6 rounded-full bg-white border-4 appearance-none cursor-pointer" />
                          <label htmlFor="FCAW" className="block h-6 overflow-hidden bg-gray-300 rounded-full cursor-pointer">
                          </label>
                        </div>
                        <span className="font-medium text-gray-400">
                          FCAW
                        </span>
                      </div>
                      <div className="mr-5">
                        <div className="relative inline-block w-10 mr-2 align-middle select-none">
                          <input {...register("GTAW")} type="checkbox" name="GTAW" id="GTAW" className="checked:bg-blue-500 outline-none focus:outline-none right-4 checked:right-0 duration-200 ease-in absolute block w-6 h-6 rounded-full bg-white border-4 appearance-none cursor-pointer" />
                          <label htmlFor="GTAW" className="block h-6 overflow-hidden bg-gray-300 rounded-full cursor-pointer">
                          </label>
                        </div>
                        <span className="font-medium text-gray-400">
                          GTAW
                        </span>
                      </div>
                    </div>
                  </div>
                </div>
                <div>
                  <div className=" relative ">
                    <input {...register("sinete")} type="text" id="welder-info-sinete" className=" rounded-lg border-transparent flex-1 appearance-none border border-gray-300 w-full py-2 px-4 bg-white text-gray-700 placeholder-gray-400 shadow-sm text-base focus:outline-none focus:ring-2 focus:ring-purple-600 focus:border-transparent" placeholder="Sinete" />
                  </div>
                  <div className="text-red-500">
                    {formState.errors.sinete && <span> {formState.errors.sinete.message}</span>}
                  </div>
                </div>
              </div>
            </div>
            <hr />
            <div className="w-full px-4 pb-4 ml-auto text-gray-500 md:w-1/3">
              <button type="submit" onClick={() => setShowModalConfirm(true)} className="py-2 px-4  bg-blue-600 hover:bg-blue-700 focus:ring-blue-500 focus:ring-offset-blue-200 text-white w-full transition ease-in duration-200 text-center text-base font-semibold shadow-md focus:outline-none focus:ring-2 focus:ring-offset-2  rounded-lg ">
                SALVAR
              </button>
            </div>
          </div>
        </form>
      </section>
    </div>
  )
}

export default App;