'use client'
import { useSession } from "next-auth/react";

const App = async () => {
  useSession({ required: true })
  return <p>

  </p>
}

export default App;