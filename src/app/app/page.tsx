import { useSession } from "next-auth/react";

const App = async () => {
  const { data: session } = useSession({ required: true })
  return <p>

  </p>
}

export default App;