import { Route, Routes } from "react-router-dom";
import { NavLinks } from "./components";
import Dashboard from "./Dashboard/Dashboard";
import Deposit from "./Deposit/Deposit";
import Support from "./Support/Support";
import Withdraw from "./Withdraw/Withdraw";
import KycVerify from "./KycVerify/KycVerify";
import KycData from "./KycVerify/KycData";
import Settings from "./Settings/Settings";

const UserPg = () => {
  return (
     
      <NavLinks>

          <Routes>
            <Route path="/dashboard" element={<div className="pl-60"><Dashboard /></div>} />
            <Route path="/profile" element={<div>Profile</div>} />
            <Route path="/settings" element={<div className="pl-60"><Settings /></div>} />
            <Route path="/deposit" element={<div className="pl-60" ><Deposit /></div>} />
            <Route path="/withdraw" element={<div className="pl-60"><Withdraw /></div>} />
            <Route path="/kyc-verification" element={<div className="pl-60"><KycVerify /></div>} />
            <Route path="/kyc-data" element={<div className="pl-60"><KycData /></div>} />
            <Route path="/support" element={<Support />} />
          </Routes>
      </NavLinks>
  );
};

export default UserPg;
