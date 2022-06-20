

import { NavigateFunction, useNavigate } from "react-router-dom";
import { useEffect } from "react";
import { goToLogin } from "../route/coordinator";

 const useProtectedPage = () => {
  const navigate: NavigateFunction = useNavigate();

  useEffect(() => {
    const token = localStorage.getItem("token");
    if (!token) {
      goToLogin(navigate);
    }
  }, [navigate]);
};

export default useProtectedPage