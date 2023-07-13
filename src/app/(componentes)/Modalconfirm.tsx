import React, { useEffect } from "react";

interface Props {
  show: boolean
  handleShow: Function
  handleSubmit: Function
  dados: any
}

export default function ModalConfirm({ handleShow, show, handleSubmit, dados }: Props) {
  const [showModal, setShowModal] = React.useState(show);

  useEffect(() => {
    if (!showModal) {
      handleShow()
    }
  }, [showModal, handleShow])

  return (
    <>
      {showModal ? (
        <>
          <div
            className="justify-center items-center flex overflow-x-hidden overflow-y-auto fixed inset-0 z-50 outline-none focus:outline-none"
          >
            <div className="relative w-auto my-6 mx-auto max-w-3xl">
              {/*content*/}
              <div className="border-0 rounded-lg shadow-lg relative flex flex-col w-full bg-white outline-none focus:outline-none">
                {/*header*/}



                {/*body*/}
                <div className="relative p-6 flex-auto">
                  Dados do soldador
                  <p className="my-4 text-slate-500 text-lg leading-relaxed">
                    {dados.nome}
                  </p>
                  <p className="my-4 text-slate-500 text-lg leading-relaxed">
                    {dados.sinete}
                  </p>
                </div>
                {/*footer*/}
                <div className="flex items-center justify-end p-6 border-t border-solid border-slate-200 rounded-b">

                  <button
                    className="bg-emerald-500 text-white active:bg-emerald-600 font-bold uppercase text-sm px-6 py-3 rounded shadow hover:shadow-lg outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150"
                    type="button"
                    onClick={() => {
                      handleSubmit()
                      setShowModal(false)
                    }}
                  >
                    OK
                  </button>
                </div>
              </div>
            </div>
          </div>
          <div className="opacity-25 fixed inset-0 z-40 bg-black"></div>
        </>
      ) : null}
    </>
  );
}