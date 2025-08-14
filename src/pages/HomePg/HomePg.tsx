import { useEffect, useState } from "react"
import { FirstBody } from "./components"
import SpinnerLoading from "./components/SpinnerLoading"


const HomePg = () => {
  const [loading, setLoading] = useState(true)
  useEffect(() => {
    setTimeout(() => {
      setLoading(false)
    }, 2000)
  }, [])
  return (
    <div>
      {loading ? <SpinnerLoading /> : <FirstBody />}
    </div>
  )
}

export default HomePg