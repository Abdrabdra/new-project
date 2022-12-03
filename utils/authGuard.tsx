import { NextPage } from "next";
import { useRouter } from "next/router";
import { useEffect, useState } from "react";
import { useTypedSelector } from "../hook/useTypedSelector";
import { fetchUser } from "../store/auth/auth.action";

export const authRoute = (Component: NextPage) => {
  return (props: any) => {
    const router = useRouter();
    const [user, setUser] = useState(null);
    const [authenticated, setAuthenticated] = useState(false);
    useEffect(() => {
      const checkToken = async () => {
        const token = localStorage.getItem("access_token");

        if (!token) {
          router.replace("/");
        } else {
          const response: any = await fetchUser();
          if (!response.ok) {
            localStorage.removeItem("access_token");
            router.replace("/");
          } else {
            const userData = await response.json();
            if (!userData.currentUser) {
              router.replace("/");
              localStorage.removeItem('access_token');
            } else {
              setUser(userData.currentUser);
              setAuthenticated(true);
            }
          }
        }
      }
      checkToken();
    }, []);

    if (authenticated) {
      return <Component {...props} />;
    } else {
      return null;
    }
  }
};