import { signIn } from "next-auth/react"
import { ReactNode } from "react"

interface Props {
  children: ReactNode
}
  const SignButton = ({children}: Props) => {
  <button onClick={() => signIn()}>{children}</button>
}

export default SignButton