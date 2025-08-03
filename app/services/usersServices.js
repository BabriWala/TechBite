import API from "./auth";

export const getAllUses = async () => {
  const response = await API.get(`/users/`);
  return response.data;
};

//  {
//     headers: {
//       Authorization: `Bearer ${localStorage.getItem("accessToken")}`,
//     },
//   }
