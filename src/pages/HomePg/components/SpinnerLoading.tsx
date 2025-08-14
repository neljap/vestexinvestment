import { ThreeDots } from "react-loader-spinner"


const SpinnerLoading = () => {
  return (
    <div className="h-screen w-full bg-dashbg flex duration-300 transition-all ease-in-out justify-center items-center">
        <ThreeDots  />
    </div>
  )
}

export default SpinnerLoading