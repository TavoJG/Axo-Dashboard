import BaseAxios from "axios";

export const useAxios = () => {
  const { coreUrl } = useAppConfig();
  const axios = BaseAxios.create({
    baseURL: "/api",
    xsrfCookieName: "csrftoken",
    xsrfHeaderName: "X-CSRFToken",
  });
  return axios;
};
