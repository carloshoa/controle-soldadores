'use client'
import React from "react";
import MenuLateral from "../(componentes)/MenuLateral";


interface LayoutAppProps {
  children: React.ReactNode;
}

const LayoutApp = ({ children }: LayoutAppProps) => {
  return (
    <MenuLateral >

      {children}
    </MenuLateral>

  );
}

export default LayoutApp