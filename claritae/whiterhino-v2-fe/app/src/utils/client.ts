import CONFIG from "../config";

export const isAdmin = () => {
  return CONFIG.USER_TYPE === "admin";
};
