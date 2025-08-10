import { TopNav } from "../components"
import Breadcrumbs from "../components/Breadcrumbs"


const Settings = () => {
  return (
    <div>
        <TopNav />
        <div className="p-6 min-h-screen">
            <Breadcrumbs>Settings</Breadcrumbs>
        </div>
    </div>
  )
}

export default Settings