import { createContext, useEffect, useState } from "react";
import Cookies from "js-cookie";
import axios from "axios";
import { baseUrl } from "../utils";

export const AuthContext = createContext<any>(null);

export const AuthProvider = ({ children }: any) => {
  const [data, setData] = useState(null);

  // console.log("datacontext", data)

  // 6LeKDaYrAAAAAO4BjX-HruRldCOPN1Px8TyqeYnq ==Site Key

  // 6LeKDaYrAAAAADMUW2w7Qu_VtREzBL1F0MwwodD3 == Secret Key

  useEffect(() => {
    const token = Cookies.get("token"); // => 'value'
    let config = {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    };
    const getUserDetails = async () => {
      await axios
        .get(`${baseUrl}/getuser`, config)
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
