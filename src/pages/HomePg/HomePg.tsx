import { FirstBody } from "./components"
import TestHero from "./components/TestHero"


const HomePg = () => {
  return (
    <div>
      <TestHero />
      {/* Render the FirstBody component */}
      <FirstBody />
    </div>
  )
}

export default HomePg