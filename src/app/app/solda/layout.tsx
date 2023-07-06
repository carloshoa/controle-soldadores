import LinkNav from '@/app/(componentes)/LinkNav'
import React from 'react'

interface LayoutAppProps {
    children: React.ReactNode
}

const LayoutApp = ({ children }: LayoutAppProps) => {
    return (
        <>
            <div>
                <nav className="bg-white dark:bg-gray-800  shadow ">
                    <div className="px-8 mx-auto max-w-7xl">
                        <div className="flex items-center justify-between h-16">
                            <div className=" flex items-center">
                                <div className="hidden md:block">
                                    <div className="flex items-baseline ml-10 space-x-4">
                                        <LinkNav href="/app/solda/soldadores">
                                            Cadastro de Soldadores
                                        </LinkNav>
                                        <LinkNav href="/app/solda/rqs">
                                            Cadastro de Qualificações
                                        </LinkNav>
                                        <LinkNav href="/app/solda/controle">
                                            Controle de Soldadores
                                        </LinkNav>
                                        <LinkNav href="/app/solda/lista">
                                            Lista de Soldadores
                                        </LinkNav>
                                    </div>
                                </div>
                            </div>

                            <div className="flex -mr-2 md:hidden">
                                <button className="text-gray-800 dark:text-white hover:text-gray-300 inline-flex items-center justify-center p-2 rounded-md focus:outline-none">
                                    <svg
                                        width={20}
                                        height={20}
                                        fill="currentColor"
                                        className="w-8 h-8"
                                        viewBox="0 0 1792 1792"
                                        xmlns="http://www.w3.org/2000/svg"
                                    >
                                        <path d="M1664 1344v128q0 26-19 45t-45 19h-1408q-26 0-45-19t-19-45v-128q0-26 19-45t45-19h1408q26 0 45 19t19 45zm0-512v128q0 26-19 45t-45 19h-1408q-26 0-45-19t-19-45v-128q0-26 19-45t45-19h1408q26 0 45 19t19 45zm0-512v128q0 26-19 45t-45 19h-1408q-26 0-45-19t-19-45v-128q0-26 19-45t45-19h1408q26 0 45 19t19 45z"></path>
                                    </svg>
                                </button>
                            </div>
                        </div>
                    </div>
                    <div className="md:hidden">
                        <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
                            <LinkNav href="/app/solda/soldadores">
                                Cadastro de Soldadores
                            </LinkNav>
                            <LinkNav href="/app/solda/rqs">
                                Cadastro de Qualificação
                            </LinkNav>
                            <LinkNav href="/app/solda/controle">
                                Controle de Soldadores
                            </LinkNav>
                            <LinkNav href="/app/solda/lista">
                                Lista de Soldadores
                            </LinkNav>
                        </div>
                    </div>
                </nav>
            </div>
            {children}
        </>
    )
}

export default LayoutApp
