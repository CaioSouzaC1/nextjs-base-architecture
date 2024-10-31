import { IUser } from '@/interfaces/User'

declare module 'next-auth' {
  interface Session {
    user: IUser
    token: string
  }

  interface User extends IUser {
    token: string
  }
}
