import { User, AuthorizedResult } from "@/typings/models/user";

export interface IUserService {
  getUserById(): Promise<User | null>;
  registerUser(user: User): Promise<User>;
  updateUser(user: User): Promise<User>;
  loginUser(credential: User): Promise<AuthorizedResult>;
  deleteUser(): Promise<void>;
  checkAuth(): Promise<AuthorizedResult>;
}
