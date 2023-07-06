'use client' 
import React from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";


interface Props {
  children: React.ReactNode
  href: string
}

const LinkNav = async ({children, href} : Props) => {
  const pathname = usePathname()
  const isSelected = pathname == href

  return <Link href={href}  >
    <div className={isSelected? "text-gray-800 dark:text-white block px-3 py-2 rounded-md text-base font-medium" : "text-gray-300 hover:text-gray-800 dark:hover:text-white block px-3 py-2 rounded-md text-base font-medium"}>

{children}
    </div>
  </Link>
}

export default LinkNav;