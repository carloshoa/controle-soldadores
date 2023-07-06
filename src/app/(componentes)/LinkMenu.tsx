'use client'
import Link from "next/link";
import { usePathname } from "next/navigation";
import React from "react";


interface Props {
  children: React.ReactNode
  href: string
}

const LinkMenu = async ({ children, href }: Props) => {
  const pathname = usePathname()
  const isSelected = pathname == href

  return <Link href={href}  >
    <div className={isSelected ? "flex items-center justify-start w-full p-2 pl-6 my-2 text-gray-800 transition-colors duration-200 border-l-4 border-purple-500 dark:text-white" : "flex items-center justify-start w-full p-2 pl-6 my-2 text-gray-400 transition-colors duration-200 border-l-4 border-transparent hover:text-gray-800"}>
      {children}
    </div>
  </Link>
}

export default LinkMenu;