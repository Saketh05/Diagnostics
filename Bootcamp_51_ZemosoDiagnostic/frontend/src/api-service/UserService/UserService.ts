import { UserType } from "../../components/organisms/MobileVerificatiion";
import UrlService from "../url-service/UrlService";

const userService = {
  getAllUsers: async () => {
    try {
      const usersData = await UrlService.get<UserType[]>("/users/");
      return usersData.data;
    } catch (error) {
      console.log(error);
    }
  },
  getUserById: async (userId: string) => {
    try {
      const usersData = await UrlService.get("/users/" + userId);
      return usersData.data;
    } catch (error) {
      console.log(error);
    }
  },

  saveUser: async (user: UserType) => {
    try {
      await UrlService.post("/users/", user);
    } catch (error) {
      console.log(error);
    }
  },
};

export default userService;
