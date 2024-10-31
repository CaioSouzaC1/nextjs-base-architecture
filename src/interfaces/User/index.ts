import { IApiRoot, ITimestamps } from "../Api";

export interface IUser extends ITimestamps {
  name: string;
  email: string;
  last_login: Date | null;
  count_login: number;
}

export interface IUserLogin extends IApiRoot {
  data: {
    user: IUser;
    token: string;
  };
}
