import { createContext, useEffect, useState } from "react";
import Cookies from "js-cookie";
import axios from "axios";

export const AuthContext = createContext<any>(null);

export const AuthProvider = ({ children }: any) => {
  const [data, setData] = useState(null);

  // console.log("datacontext", data)

  useEffect(() => {
    const token = Cookies.get("token"); // => 'value'
    let config = {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    };
    const getUserDetails = async () => {
      await axios
        .get("http://localhost:5000/api/users/getuser", config)
        .then((res) => {
          setData(res?.data);

        })
        .catch((err) => {throw new Error(err)});
    };
    getUserDetails();
  }, []);

  console.log("from context", data)

  return (
    <AuthContext.Provider value={{ data, setData }}>
      {children}
    </AuthContext.Provider>
  );
};
