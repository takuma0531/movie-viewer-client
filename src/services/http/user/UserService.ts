import { IUserService } from "./IUserService";
import { BaseHttpService } from "../base/BaseHttpService";
import { AuthorizedResult, User } from "@/typings/models/user";
import { JwtService } from "@/services/localStorage/JwtService";

const URL_PATH = {
  USER: "user",
  LOGIN: "login",
  CHECK_AUTH: "check-auth",
};

class UserService extends BaseHttpService implements IUserService {
  private readonly BASE_ROUTE = "/api/v1/users";

  public async getUserById(): Promise<User | null> {
    try {
      this.setToken();
      const { data } = await this.axiosApi.get<User>(
        `${this.BASE_ROUTE}/${URL_PATH.USER}`
      );
      return data;
    } catch (err: any) {
      throw err;
    }
  }

  public async registerUser(user: User): Promise<User> {
    try {
      const { data } = await this.axiosApi.post<User>(
        `${this.BASE_ROUTE}`,
        user
      );
      if (data.authResult?.isAuthorized!)
        JwtService.saveToken(data.authResult?.token!);
      return data;
    } catch (err: any) {
      throw err;
    }
  }

  public async updateUser(user: User): Promise<User> {
    try {
      this.setToken();
      const { data } = await this.axiosApi.put<User>(
        `${this.BASE_ROUTE}`,
        user
      );
      return data;
    } catch (err: any) {
      throw err;
    }
  }

  public async loginUser(credential: User): Promise<AuthorizedResult> {
    try {
      const { data } = await this.axiosApi.post<AuthorizedResult>(
        `${this.BASE_ROUTE}/${URL_PATH.LOGIN}`,
        credential
      );
      if (data.isAuthorized && data.token) JwtService.saveToken(data.token);
      return data;
    } catch (err: any) {
      throw err;
    }
  }

  public async deleteUser(): Promise<void> {
    try {
      this.setToken();
      await this.axiosApi.delete<void>(`${this.BASE_ROUTE}`);
    } catch (err: any) {
      throw err;
    }
  }

  public async checkAuth(): Promise<AuthorizedResult> {
    try {
      this.setToken();
      const { data } = await this.axiosApi.get<AuthorizedResult>(
        `${this.BASE_ROUTE}/${URL_PATH.CHECK_AUTH}`
      );
      if (data.isAuthorized && data.token) JwtService.saveToken(data.token);
      return data;
    } catch (err: any) {
      throw err;
    }
  }
}

export const userService = new UserService();
