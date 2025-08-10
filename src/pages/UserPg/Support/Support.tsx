import { TopNav } from "../components"
import Breadcrumbs from "../components/Breadcrumbs"


const Support = () => {
  return (
    <div>
      <TopNav />
      <div className="p-6 min-h-screen">
       <Breadcrumbs>Support</Breadcrumbs>
        <div className="container">
          <form action="" className="mx-auto shadow">
            <h3>Support Ticket</h3>
            <div className="flex flex-col gap-2">
              <label htmlFor=""></label>
              <input type="text" />
            </div>
            <div>
              <label htmlFor=""></label>
              <input type="text" />
            </div>
            <div>
              <label htmlFor=""></label>
              <textarea name="" id=""></textarea>
            </div>
          </form>
        </div>
      </div>
      

    </div>
  )
}

export default Support